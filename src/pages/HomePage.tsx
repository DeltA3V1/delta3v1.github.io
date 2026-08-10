import { useState } from 'react'
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
import { BottomSheet } from '../components/shell/NavigationBottomSheet'

const themeModes: ThemePreference[] = ['system', 'light', 'dark']

function HomePage() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const activeStation = useActiveStation(stationIds)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true)

  return (
    <div className="bg-dominant min-h-screen flex flex-col h-dvh overflow-hidden">
      <StationHeader stationId={activeStation} />
      <main className="flex-1 overflow-y-auto scroll-smooth">
        <Landing />
        <Sitemap />
        <About />
        <UW />        
        <Toolbox />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      {isBottomSheetOpen && <BottomSheet open={isBottomSheetOpen} />}
    </div>
  );
}

export default HomePage;