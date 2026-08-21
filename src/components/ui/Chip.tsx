// Proficiency is a half stubbed system that will have more design impact in future drafts

type ChipSize = 'default' | 'compact';

type ChipProps = {
  text: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced';
  size?: ChipSize;
};

const sizes = {
  default: { chip: 'px-6 py-2.5', group: 'gap-4' },
  compact: { chip: 'px-4 py-1.5', group: 'gap-2' },
} as const;

export function ChipGroup({ chips, size = 'default' }: { chips: ChipProps[]; size?: ChipSize }) {
  return (
    <div className={`flex w-full max-w-96 ${sizes[size].group} flex-wrap justify-center px-10`}>
      {chips.map((chip, index) => (
        <Chip key={index} text={chip.text} proficiency={chip.proficiency} size={size} />
      ))}
    </div>
  );
}

export function Chip({ text, proficiency, size = 'default' }: ChipProps) {
  const bgColor = proficiency === 'beginner' ? 'bg-surface' : proficiency === 'intermediate' ? 'bg-secondary' : proficiency === 'advanced' ? 'bg-accent' : 'bg-dominant';
  const textColor = proficiency === 'beginner' ? 'text-secondary' : proficiency === 'intermediate' ? 'text-dominant' : proficiency === 'advanced' ? 'text-surface' : 'text-supporting';
  const border = proficiency === 'beginner' ? 'border-2 border-secondary' : proficiency === 'intermediate' ? '' : proficiency === 'advanced' ? '' : 'border-2 border-supporting';

  return (
    <div className={`${bgColor} w-fit max-w-max flex flex-grow ${sizes[size].chip} items-center justify-center rounded ${border}`}>
      <p className={`text-lg ${textColor}`}>{text}</p>
    </div>
  );
}

export default Chip
