import LandingButton from "../ui/LandingButton";
import scrollToStation from "../../lib/scrollToStation";
import wideArrow from "../../assets/widearrow.svg";
import { useTheme } from '../../hooks/useTheme';

export function Landing() {
  const { resolvedTheme } = useTheme();
  return (
    <section 
      id="landing" 
      className="min-h-[100dvh] mb-32 font-inter flex flex-col bg-dominant transition-colors duration-300"
    >
      <div className="flex-1 flex flex-col items-center justify-evenly gap-8 px-4 mt-[5dvh]">
        <h1 className="text-6xl">[hello]</h1>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl">I'm Dylan,</h2>
          <p className="max-w-xs text-lg md:text-2xl/[1.4] text-center px-4">
            an upcoming CS student @ the University of Washington.
          </p>
        </div>
        
        <div className="w-full max-w-xs flex flex-col items-center justify-center gap-4">
          <LandingButton bg="bg-accent" text="Portfolio" textColor="text-surface" onClick={() => scrollToStation("portfolio")} />
          <LandingButton bg="bg-surface" text="Contact Me" textColor="text-accent" onClick={() => scrollToStation("contact")} />
        </div>
      </div>

      <button 
      className="flex flex-col items-center justify-end w-full h-[8vh] py-6" 
      onClick={() => { scrollToStation("sitemap") }}
      >
        <img 
          src={ wideArrow } 
          className={ `${ resolvedTheme === 'light' ? 'invert' : '' }` }
        />
      </button>
    </section>
  )
}