import { useEffect } from 'react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import x from "../../assets/x.svg"
import { type Station, type StationId, stations } from '../../content/stations'
import scrollToStation from '../../lib/scrollToStation'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import ThemeToggle from './ThemeToggle'

function NavStation({ station, onClose }: { station: Station, onClose: () => void }) {
  return (
    <button 
      className="w-50 h-12 flex items-center justify-center"
      onClick={() => {
        onClose()
        scrollToStation(station.id as StationId)
      }}
    >
      <span className="text-lg">{station.label}</span>
    </button>
  )
}

export function CloseButton({onClose}: {onClose?: () => void}) {
  return (
    <button className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center" onClick={onClose}>
      <div className="group w-6 h-6 bg-accent hover:bg-accent/80 rounded-full flex items-center justify-center">
        <img
          src={x}
          alt="x"
          draggable={false}
          className="group-hover:w-3.25 group-hover:h-3.25 w-3 h-3 select-none"
        />
      </div>
    </button>
  )
}

export function BottomSheet({ open = false, onClose }: { open: boolean, onClose: () => void }) {
  const dragControls = useDragControls()
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const handleDragEnd = (_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="fixed inset-0 bg-dominant/50 z-50 flex justify-center items-end select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={
              reduceMotion 
                ? { duration: 0 } 
                : { type: "spring", damping: 25, stiffness: 300 }
            }
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.7 }}
            dragSnapToOrigin={true}
            onDragEnd={handleDragEnd}
            id="bottom-sheet" 
            className="fixed bottom-0 w-full flex flex-col bg-dominant rounded-3xl shadow-l touch-none"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
          >
            <header className="h-16 flex flex-col justify-center items-center">
              <div 
                className="cursor-grab active:cursor-grabbing w-full flex justify-center items-center py-4 select-none"
                draggable={false}
                onPointerDown={(e) => {
                  e.preventDefault();
                  dragControls.start(e);
                }}
              >
                <div className="w-24 h-1 bg-gray-400 rounded-full pointer-events-none" />
              </div>
              <ThemeToggle />
              <CloseButton onClose={onClose} />
            </header>
            <main className="flex flex-col">
              <div className="w-full h-96 flex flex-col justify-center items-center">
                {stations.map((station) => (
                  <NavStation key={station.id} station={station} onClose={onClose} />
                ))}
              </div>
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BottomSheet