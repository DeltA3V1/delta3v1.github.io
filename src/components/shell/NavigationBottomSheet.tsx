import { stationIds } from '../../content/stations'

function NavStation({ id }: { id: string }) {
  return (
    <button 
      className="w-50 h-12 flex items-center justify-center"
      onClick={() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ block: 'start' })
        }
      }}
    >
      <span className="text-lg">{id}</span>
    </button>
  )
}

export function BottomSheet({ open=false }: {open: boolean}) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed w-screen h-screen bg-dominant/50 z-50 flex justify-center items-end">
      <dialog id="bottom-sheet" className="fixed bottom-0 w-full flex flex-col bg-dominant rounded-3xl shadow-l border">
        <header className="h-22 flex flex-col justify-center items-center">
          <div className="w-24 h-1 my-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-full h-16 flex justify-center items-center">
            <h2 className="text-4xl">Navigation</h2>
          </div>
        </header>
        <main className="flex flex-col">

          <div className="w-full h-96 flex flex-col justify-center items-center">
            {stationIds.map((id) => (
              <NavStation key={id} id={id} />
            ))}
          </div>
        </main>
      </dialog>
    </div>
  )
}

export default BottomSheet