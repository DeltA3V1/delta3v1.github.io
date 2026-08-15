import { useState, useEffect } from 'react'
import { type Station, type StationId, getStation, getPrevStation, getNextStation } from '../../content/stations'
import { scrollToStation } from '../../lib/scrollToStation'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'
import { useTheme } from '../../hooks/useTheme'

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
      className="bg-secondary hover:bg-secondary/20 transition-colors duration-500 w-22 h-15 text-lg flex flex-col items-center justify-center border-2 border-dominant rounded-lg"
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

function StationHeader({ stationId }: { stationId: StationId | null }) {
  if (!stationId) { return null };

  const station = getStation(stationId) as Station;
  const prevStation = getPrevStation(stationId);
  const nextStation = getNextStation(stationId);
  const [opacity, setOpacity] = useState('opacity-100');
  const [shouldRender, setShouldRender] = useState(true);

  // TODO Refactor fade in / out: starts at a fixed station at the bottom of the Sitemap line. Expands out into the header (or shrinks into the station node).

  useEffect(() => {
    if (station && station.showStationHeader) {
      setShouldRender(true);
      const timer = setTimeout(() => setOpacity('opacity-100'), 20);
      return () => clearTimeout(timer);
    } else {
      setOpacity('opacity-0');
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [station]);

  if (!shouldRender) {
    return null;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 bg-secondary transition-all duration-300 grid grid-cols-4 items-center px-4 h-24 z-30 ${opacity}`}>
      <div className="flex justify-start">
        {prevStation && (
          <StationButton stationId={prevStation.id} direction="prev" />
        )}
      </div>
      <div className="col-span-2 flex items-center justify-center h-full">
        <h1 className="text-4xl font-normal text-dominant">{station.label}</h1>
      </div>
      <div className="flex justify-end">
        {nextStation && (
          <StationButton stationId={nextStation.id} direction="next" />
        )}
      </div>
    </header>
  )
}

export default StationHeader