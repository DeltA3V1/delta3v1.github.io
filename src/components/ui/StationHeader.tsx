import { type StationId, getStation, getPrevStation, getNextStation } from '../../content/stations'
import { scrollToStation } from '../../lib/scrollToStation'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'

type StationButtonProps = {
  stationId: StationId
  direction?: 'prev' | 'next'
}

function StationButton({ stationId, direction }: StationButtonProps) {
  const station = getStation(stationId)

  return (
    <button
      type="button"
      className="bg-dominant hover:bg-secondary/20 w-23 h-17 text-lg flex flex-col items-center justify-center border-2 rounded-lg"
      onClick={() => scrollToStation(stationId)}
      aria-label={`Go to ${direction === 'prev' ? 'previous' : 'next'} station: ${station?.label}`}
    >
      <span>{station?.label}</span>
      <img
        src={direction === 'prev' ? leftArrow : rightArrow}
        alt=""
        className="mt-1 h-4 w-4"
      />
    </button>
  )
}

function StationHeader({ stationId }: { stationId: StationId | null }) {
  if (!stationId) { return null };

  const station = getStation(stationId);
  const prevStation = getPrevStation(stationId);
  const nextStation = getNextStation(stationId);

  if (!station || !station.showStationHeader) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-dominant grid grid-cols-4 items-center px-4 h-24">
      <div className="flex justify-start">
        {prevStation && (
          <StationButton stationId={prevStation.id} direction="prev" />
        )}
      </div>
      <div className="col-span-2 flex items-center justify-center h-full">
        <h1 className="text-4xl font-normal">{station.label}</h1>
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