import { type ThemePreference, useTheme } from '../hooks/useTheme'
import StationHeader from '../components/ui/StationHeader'
import useActiveStation from '../hooks/useActiveStation'
import { stationIds } from '../content/stations'
import { Landing } from '../components/sections/Landing'
import { Sitemap } from '../components/sections/Sitemap'
import { About } from '../components/sections/About'
import { UW } from '../components/sections/UW'

const themeModes: ThemePreference[] = ['system', 'light', 'dark']

function HomePage() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const activeStation = useActiveStation(stationIds)

  return (
    <div className="bg-dominant min-h-screen flex flex-col h-dvh overflow-hidden">
      <StationHeader stationId={activeStation} />
      <main id="home-scroll-container" className="flex-1 overflow-y-auto scroll-smooth border">
        <Landing />
        <Sitemap />
        <About />
        <UW />
        <section className="">
          <h1 className="text-4xl text-center">Theme and token foundation, nothing else yet.</h1>
          <p className="">
            This page is only here to prove the token layer works. Switch your OS theme or use the controls below,
            and the document root will resolve <strong>system</strong>, <strong>light</strong>, or <strong>dark</strong>{' '}
            onto <code>html data-theme</code>.
          </p>

          <div className="flex flex-wrap justify-center gap-4" role="group" aria-label="Theme preference">
            {themeModes.map((mode) => (
              <button
                key={mode}
                type="button"
                className="grow px-4 py-2 m-2 border"
                data-active={theme === mode}
                onClick={() => setTheme(mode)}
              >
                {mode}
              </button>
            ))}
          </div>

          <button type="button" className="text-accent border px-4 py-2 m-2" onClick={() => alert('Accent button clicked!')}>
            Accent button
          </button>

          <p className="text-accent">Accent text is alive. Resolved theme: {resolvedTheme}</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;