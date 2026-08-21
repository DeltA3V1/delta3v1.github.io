import { type Station, stations } from "../../content/stations";
import StationNode from "./StationNode";

export function TransitMap() {
  return (
    <section id="transit-map" className="relative h-220 mb-48 flex flex-col items-center transition-colors duration-300">
      <svg
        className="absolute top-0 w-1 h-216 text-secondary"
        viewBox="0 0 4 1000"
      >
        <path d="M2 0 L2 1000" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
      <div className="bg-dominant w-50 h-14 mb-24 border-2 rounded flex justify-center items-center z-10">
        <h2 className="text-2xl">Sitemap</h2>
      </div>
      <div className="w-full flex flex-col grow items-center justify-between">
        {stations.map((station) => (
          <StationNode key={station.id} station={station} />
        ))}
      </div>
    </section>
  )
}

export default TransitMap