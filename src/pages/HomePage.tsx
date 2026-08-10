import { type ThemePreference, useTheme } from '../hooks/useTheme'
import StationHeader from '../components/ui/StationHeader'
import useActiveStation from '../hooks/useActiveStation'
import { stationIds } from '../content/stations'
import { Landing } from '../components/sections/Landing'
import { Sitemap } from '../components/sections/Sitemap'
import { About } from '../components/sections/About'
import { UW } from '../components/sections/UW'
import { Toolbox } from '../components/sections/Toolbox'
import { Portfolio } from '../components/sections/Portfolio'
import { Blog } from '../components/sections/Blog'
import { Contact } from '../components/sections/Contact'

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
        <Toolbox />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default HomePage;