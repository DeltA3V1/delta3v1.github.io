import { type StationId } from '../content/stations'

export function scrollToStation(id: StationId): void {
  const element = document.getElementById(id)
  
  if (element) {
    element.scrollIntoView({ block: 'start' })
  }
}