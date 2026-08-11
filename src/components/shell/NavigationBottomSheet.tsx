import { useEffect } from 'react'
import x from "../../assets/x.svg"
import { type Station, stations } from '../../content/stations'

function NavStation({ station, onClose }: { station: Station, onClose: () => void }) {
  return (
    <button 
      className="w-50 h-12 flex items-center justify-center"
      onClick={() => {
        onClose()
        const element = document.getElementById(station.id)
        if (element) {
          element.scrollIntoView({ block: 'start' })
        }
      }}
    >
      <span className="text-lg">{station.label}</span>
    </button>
  )
}

export function CloseButton({onClose}: {onClose?: () => void}) {
  return (
    <button className="absolute top-2 right-2 w-11 h-11" onClick={onClose}>
      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
        <img
          src={x}
          alt="x"
          className="w-3 h-3"
        />
      </div>
    </button>
  )
}

export function BottomSheet({ open=false, onClose }: {open: boolean, onClose: () => void}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div className="fixed w-screen h-screen bg-dominant/50 z-50 flex justify-center items-end" onClick={onClose}>
      <dialog
        id="bottom-sheet" 
        className="fixed bottom-0 w-full flex flex-col bg-dominant rounded-3xl shadow-l border"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="h-22 flex flex-col justify-center items-center">
          <div className="w-24 h-1 my-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-full h-16 flex justify-center items-center">
            <h2 className="text-4xl">Navigation</h2>
          </div>
          <CloseButton onClose={onClose} />
        </header>
        <main className="flex flex-col">

          <div className="w-full h-96 flex flex-col justify-center items-center">
            {stations.map((station) => (
              <NavStation key={station.id} station={station} onClose={onClose} />
            ))}
          </div>
        </main>
      </dialog>
    </div>
  )
}

export default BottomSheet