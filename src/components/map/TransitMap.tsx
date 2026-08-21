import { stations } from "../../content/stations";
import StationNode from "./StationNode";

export function TransitMap() {
  return (
    // pt-28 clears the fixed StationHeader plaque on Sitemap
    <section id="transit-map" className="relative h-220 mb-48 pt-28 flex flex-col items-center transition-colors duration-300">
      <svg
        className="absolute top-0 w-1 h-216 text-secondary"
        viewBox="0 0 4 1000"
      >
        <path d="M2 0 L2 1000" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
      <div className="w-full flex flex-col grow items-center justify-between">
        {stations.map((station) => (
          <StationNode key={station.id} station={station} />
        ))}
      </div>
    </section>
  )
}

export default TransitMap