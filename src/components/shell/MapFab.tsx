import map from '../../assets/map.svg'

export function MapFab({ onClick, visible }: { onClick?: () => void, visible?: boolean }) {
  if (!visible) {
    return null
  }

  return (
    <button className="fixed bg-accent bottom-8 right-8 w-16 h-16 rounded-2xl flex items-center justify-center z-50" onClick={onClick}>
      <img
        src={map}
        alt="Map"
        className="w-12 h-12"
      />
    </button>
  )
}

export default MapFab