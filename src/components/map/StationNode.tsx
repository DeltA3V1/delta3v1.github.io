import { type Station, type StationId } from "../../content/stations";
import scrollToStation from "../../lib/scrollToStation";

export function StationNode({ station } : { station : Station }) {
  return (
    <button className="w-full flex flex-col py-2 items-center z-10" onClick={() => scrollToStation(station.id as StationId)}>
      <div className="w-full flex justify-end">
        <h3 className="text-secondary text-lg text-right mr-29">{station.label}</h3>
      </div>
      <div className="bg-dominant w-5 h-5 rounded-full border-2"></div>
    </button>
  )
}

export default StationNode