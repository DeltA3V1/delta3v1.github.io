import { useState, useEffect } from 'react'
import map from '../../assets/map.svg'

export function MapFab({ onClick, visible }: { onClick?: () => void, visible?: boolean }) {
  const [shouldRender, setShouldRender] = useState(visible)
  const [opacity, setOpacity] = useState(visible ? 'opacity-100' : 'opacity-0')

  useEffect(() => {
    if (visible) {
      setShouldRender(true)
      const timer = setTimeout(() => setOpacity('opacity-100'), 20)
      return () => clearTimeout(timer)
    } else {
      setOpacity('opacity-0')
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [visible])

  if (!shouldRender) return null

  return (
    <button 
      className={`fixed group bg-accent hover:bg-accent/80 bottom-8 right-8 w-16 h-16 rounded-2xl flex items-center justify-center z-40 transition-opacity duration-300 ${opacity}`} 
      onClick={onClick}
    >
      <img
        src={map}
        alt="Map"
        className="group-hover:w-13 group-hover:h-13 w-12 h-12"
      />
    </button>
  )
}

export default MapFab