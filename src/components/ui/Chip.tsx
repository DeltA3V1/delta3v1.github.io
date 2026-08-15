// Proficiency is a half stubbed system that will have more design impact in future drafts

type ChipProps = {
  text: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced';
};

export function Chip({ text, proficiency }: ChipProps) {
  const bgColor = proficiency === 'beginner' ? 'bg-surface' : proficiency === 'intermediate' ? 'bg-secondary' : 'bg-accent';
  const textColor = proficiency === 'beginner' ? 'text-secondary' : proficiency === 'intermediate' ? 'text-dominant' : 'text-surface';
  const border = proficiency === 'beginner' ? 'border-2 border-secondary' : proficiency === 'intermediate' ? '' : '';

  return (
    <div className={`${bgColor} w-fit flex flex-row py-2.5 px-6 items-center justify-center rounded ${border}`}>
      <p className={`text-lg ${textColor}`}>{text}</p>
    </div>
  );
}

export default Chip