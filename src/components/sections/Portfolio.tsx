import { PortfolioCard, FuturePortfolioCard } from "../ui/Card";

export function Portfolio() {
  return (
    <section id="portfolio" className="font-inter flex flex-col items-center justify-between bg-dominant transition-colors duration-300">
      <div className="w-full flex flex-col items-center justify-center gap-16 py-16 px-4">
        <PortfolioCard header="Mobile Website V1" date="August 2026" text="Mobile website draft built with React, Tailwind, and TypeScript." chips={[{ text: "React" }, { text: "Tailwind" }, { text: "TypeScript" }, { text: "Vite" }]} />
        <FuturePortfolioCard date="August 2026" text="Desktop Website" />
      </div>
    </section>
  )
}