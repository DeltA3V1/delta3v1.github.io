export function Card({ header, text } : { header: string, text: string }) {
  return (
    <div className="bg-surface w-full flex flex-col py-4 pl-4 pr-2 gap-4">
      <h2 className="text-4xl text-secondary font-medium">{header}</h2>
      <p className="whitespace-pre-line text-lg text-supporting">{text}</p>
    </div>
  );
}

export default Card