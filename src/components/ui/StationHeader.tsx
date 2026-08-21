import { useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'motion/react'
import {
  type Station,
  type StationId,
  getStation,
  getStationIndex,
  getPrevStation,
  getNextStation,
} from '../../content/stations'
import { scrollToStation } from '../../lib/scrollToStation'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'
import { useTheme } from '../../hooks/useTheme'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

type StationButtonProps = {
  stationId: StationId
  direction?: 'prev' | 'next'
}

function StationButton({ stationId, direction }: StationButtonProps) {
  const station = getStation(stationId)
  const { resolvedTheme } = useTheme()

  return (
    <button
      type="button"
      className="bg-secondary hover:bg-secondary/80 transition-colors duration-300 w-22 h-15 text-lg flex flex-col items-center justify-center border-2 border-dominant rounded-lg"
      onClick={() => scrollToStation(stationId)}
      aria-label={`Go to ${direction === 'prev' ? 'previous' : 'next'} station: ${station?.label}`}
    >
      <span className="text-dominant">{station?.label}</span>
      <img
        src={direction === 'prev' ? leftArrow : rightArrow}
        alt=""
        className={`${resolvedTheme === 'light' ? '' : 'invert'} mt-1 h-4 w-4`}
      />
    </button>
  )
}

/** Slide distance for station-to-station slot changes (px). */
const SLOT_OFFSET = 48

/**
 * Variants receive `custom` = scroll direction (1 = down/forward, -1 = up/back).
 * Forward: new content enters from the right, old exits to the left.
 * Back: the opposite.
 */
const slotVariants: Variants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? SLOT_OFFSET : -SLOT_OFFSET,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? -SLOT_OFFSET : SLOT_OFFSET,
    opacity: 0,
  }),
}

const slotTransition = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 34,
  mass: 0.8,
}

const instantTransition = { duration: 0 }

function StationHeader({ stationId }: { stationId: StationId | null }) {
  const reduceMotion = usePrefersReducedMotion()
  // Direction must be known on the *same* render as the new stationId.
  // useEffect runs too late — AnimatePresence would already have started
  // enter/exit with the previous direction (one-transition lag on reverse).
  const previousStationId = useRef<StationId | null>(stationId)
  const directionRef = useRef(1)

  if (stationId !== previousStationId.current) {
    if (stationId != null && previousStationId.current != null) {
      const delta = getStationIndex(stationId) - getStationIndex(previousStationId.current)
      if (delta !== 0) {
        directionRef.current = delta > 0 ? 1 : -1
      }
    }
    previousStationId.current = stationId
  }

  const direction = directionRef.current

  const station = stationId ? (getStation(stationId) as Station | undefined) : undefined
  const shouldShow = Boolean(station?.showStationHeader)
  const isOverview = stationId === 'sitemap'

  const prevStation = stationId && !isOverview ? getPrevStation(stationId) : undefined
  const nextStation = stationId && !isOverview ? getNextStation(stationId) : undefined

  const transition = reduceMotion ? instantTransition : slotTransition

  return (
    <AnimatePresence>
      {shouldShow && station && stationId && (
        <motion.div
          key="station-header-root"
          className="fixed top-0 left-0 right-0 z-30 flex justify-center pointer-events-none"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={reduceMotion ? instantTransition : { duration: 0.25 }}
        >
          {/*
            LAYOUT EXPANSION (example 1)
            `layout` tells Motion to animate size/position changes between renders.
            Overview (Sitemap): compact plaque, matching the old in-map title chip.
            Content stations: full-width bar with room for prev / title / next.
          */}
          <motion.header
            layout
            className={`pointer-events-auto flex items-center overflow-hidden ${
              isOverview
                ? 'mt-4 h-14 w-50 justify-center rounded border-2 border-secondary bg-dominant px-3'
                : 'mt-0 h-24 w-full justify-between bg-secondary px-4'
            }`}
            transition={
              reduceMotion
                ? instantTransition
                : { type: 'spring', stiffness: 320, damping: 32 }
            }
          >
            {/* Left slot — only in expanded mode */}
            <div className={`relative flex h-15 w-22 shrink-0 items-center justify-start ${isOverview ? 'hidden' : ''}`}>
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                {prevStation && (
                  <motion.div
                    key={prevStation.id}
                    className="absolute"
                    custom={direction}
                    variants={slotVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <StationButton stationId={prevStation.id} direction="prev" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/*
              CENTER TITLE — SLOT CAROUSEL (example 2)
              `key={stationId}` forces AnimatePresence to treat each station as a
              new element so enter/exit variants run. `custom={direction}` is passed
              into the variant functions so forward/back slide the correct way.
            */}
            <div className={`relative flex min-w-0 flex-1 items-center justify-center ${isOverview ? '' : 'mx-2'}`}>
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.h1
                  key={stationId}
                  className={`font-normal text-center ${
                    isOverview ? 'text-2xl text-secondary' : 'text-4xl text-dominant'
                  }`}
                  custom={direction}
                  variants={reduceMotion || isOverview ? undefined : slotVariants}
                  initial={reduceMotion || isOverview ? false : 'enter'}
                  animate="center"
                  exit={reduceMotion || isOverview ? undefined : 'exit'}
                  transition={transition}
                  layout="position"
                >
                  {station.label}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Right slot — only in expanded mode */}
            <div className={`relative flex h-15 w-22 shrink-0 items-center justify-end ${isOverview ? 'hidden' : ''}`}>
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                {nextStation && (
                  <motion.div
                    key={nextStation.id}
                    className="absolute"
                    custom={direction}
                    variants={slotVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <StationButton stationId={nextStation.id} direction="next" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.header>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StationHeader
