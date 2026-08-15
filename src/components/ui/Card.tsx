import { Chip, ChipGroup } from "../ui/Chip";
import rightArrow from '../../assets/rightarrow.svg'
// button stubbed for full menu open later

export function PortfolioCard({ header, date, text, chips, link } : { header: string, date: string, text: string, chips: { text: string; proficiency?: 'beginner' | 'intermediate' | 'advanced'; }[], link?: string }) {
  return (
    <button className="max-w-100 bg-surface flex flex-col w-full p-4 gap-8 border-2 border-secondary rounded">
      <div className="flex flex-col gap-2 border-b-2 pb-4">
        <h2 className="text-4xl text-secondary font-medium">{header}</h2>
        <span className="text-xl text-supporting">{date}</span>
      </div>
      <span className="whitespace-pre-line text-lg text-supporting">{text}</span>
      <ChipGroup chips={chips} px={4} py={1.5} gap={2} />
      <div className="flex justify-end text-green">
        <span className="text-xl text-right style-ligatures">{"Projects ->"}</span>
      </div>
    </button>
  )
}

export function FuturePortfolioCard({ date, text } : { date: string, text: string }) {
  return (
    <button className="max-w-100 bg-surface flex flex-col w-full p-4 gap-4 border-2 border-secondary rounded">
      <div className="flex flex-col">
        <h2 className="text-4xl text-secondary font-medium">{date}</h2>
      </div>
      <span className="whitespace-pre-line text-xl text-supporting">{text}</span>
      <div className="flex justify-end text-red">
        <span className="text-xl text-right style-ligatures">{"Roadmap ->"}</span>
      </div>
    </button>
  )
}

export function Card({ header, text } : { header: string, text: string }) {
  return (
    <div className="bg-surface w-full flex flex-col py-4 pl-4 pr-2 gap-4">
      <h2 className="text-4xl text-secondary font-medium">{header}</h2>
      <p className="whitespace-pre-line text-lg text-supporting">{text}</p>
    </div>
  );
}

export default Card