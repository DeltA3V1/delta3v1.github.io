import LandingButton from "../ui/LandingButton";
import scrollToStation from "../../lib/scrollToStation";

export function Landing() {
  return (
    <section 
      id="landing" 
      className="min-h-[100dvh] font-inter flex flex-col bg-dominant transition-colors duration-300"
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-12 px-4">
        <h1 className="text-8xl">[hello]</h1>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl">I'm Dylan,</h2>
          <p className="max-w-xs text-lg md:text-2xl/[1.4] text-center px-4">
            an upcoming CS student @ the University of Washington.
          </p>
        </div>
        
        <div className="w-full max-w-xs flex flex-col items-center justify-center gap-4 mt-4">
          <LandingButton bg="bg-accent" text="Portfolio" textColor="text-surface" onClick={() => scrollToStation("portfolio")} />
          <LandingButton bg="bg-surface" text="Contact Me" textColor="text-accent" onClick={() => scrollToStation("contact")} />
        </div>
      </div>

      <div className="bg-secondary w-full py-8">
      </div>
    </section>
  )
}