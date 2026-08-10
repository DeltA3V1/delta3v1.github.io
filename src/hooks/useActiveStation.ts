import { useEffect, useState } from 'react'
import { type StationId } from '../content/stations'

export function useActiveStation(sectionIds: readonly StationId[]): StationId | null {
  const [activeStation, setActiveStation] = useState<StationId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStation(entry.target.id as StationId)
          }
        })
      },
      {
        rootMargin: '-30% 0px -69% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeStation
}

export default useActiveStation