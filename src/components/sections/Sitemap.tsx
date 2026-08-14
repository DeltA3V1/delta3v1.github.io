import TransitMap from "../map/TransitMap";

export function Sitemap() {
  return (
    <section id="sitemap" className="bg-gradient-to-b from-secondary from-[0%] to-dominant to-[5%] flex flex-col items-center justify-between transition-colors duration-300">
      <TransitMap />
    </section>
  )
}