import LandingButton from "../ui/LandingButton";
import scrollToStation from "../../lib/scrollToStation";

export function Landing() {
  return (
    <section id="landing" className="mt-39 gap-18 font-inter flex flex-col items-center justify-between bg-dominant transition-colors duration-300">
      <div className="gap-24 flex flex-col items-center justify-center">
        <div className="gap-22 flex flex-col items-center justify-center">
          <h1 className="text-8xl">[hello]</h1>
          <div className="gap-6 flex flex-col items-center justify-center">
            <h2 className="text-5xl">I'm Dylan,</h2>
            <p className="w-76 text-2xl/[1.4] text-center">an upcoming CS student @ the University of Washington.</p>
          </div>
          <div className="gap-4 w-full flex flex-col items-center justify-center">
            <LandingButton bg="bg-accent" text="Portfolio" textColor="text-surface" onClick={() => scrollToStation("portfolio")} />
            <LandingButton bg="bg-surface" text="Contact Me" textColor="text-accent" onClick={() => scrollToStation("contact")} />
          </div>
        </div>

      </div>
      <p>end</p>
    </section>
  )
}