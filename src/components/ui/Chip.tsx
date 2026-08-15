// Proficiency is a half stubbed system that will have more design impact in future drafts

type ChipProps = {
  text: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced';
  px?: number;
  py?:number;
  gap?: number;
};

export function ChipGroup({ chips, px=6, py=2.5, gap=4 }: { chips: ChipProps[]; px?: number; py?: number; gap?: number }) {
  return (
    <div className={`flex w-full max-w-96 gap-${gap} flex-wrap justify-center px-10`}>
      {chips.map((chip, index) => (
        <Chip key={index} text={chip.text} proficiency={chip.proficiency} px={px} py={py}/>
      ))}
    </div>
  );
}

export function Chip({ text, proficiency, px=6, py=2.5 }: ChipProps) {
  const bgColor = proficiency === 'beginner' ? 'bg-surface' : proficiency === 'intermediate' ? 'bg-secondary' : proficiency === 'advanced' ? 'bg-accent' : 'bg-dominant';
  const textColor = proficiency === 'beginner' ? 'text-secondary' : proficiency === 'intermediate' ? 'text-dominant' : proficiency === 'advanced' ? 'text-surface' : 'text-supporting';
  const border = proficiency === 'beginner' ? 'border-2 border-secondary' : proficiency === 'intermediate' ? '' : proficiency === 'advanced' ? '' : 'border-2 border-supporting';

  return (
    <div className={`${bgColor} w-fit max-w-max flex flex-grow py-${py} px-${px} items-center justify-center rounded ${border}`}>
      <p className={`text-lg ${textColor}`}>{text}</p>
    </div>
  );
}

export default Chip