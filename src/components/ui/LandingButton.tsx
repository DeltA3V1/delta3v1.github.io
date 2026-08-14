export function LandingButton({ bg, text, textColor, onClick }: { bg: string; text: string; textColor: string; onClick?: () => void }) {
    return(
        <button className={`${bg} ${textColor} w-full flex items-center justify-center px-3 py-2 border-2 border-accent rounded`} onClick={onClick}>
            <span className="text-lg">{text}</span>
        </button>
    )
}

export default LandingButton