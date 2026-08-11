import { useTheme } from '../../hooks/useTheme'
import sunrays from '../../assets/sunrays.svg'


export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()



  return (
    <button
      className="absolute top-2 left-2 w-11 h-11 flex items-center justify-center"
      onClick={() => {
        if (resolvedTheme === 'light') {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }}
    >
      <div>
        <div className="w-11 h-6 rounded-full bg-secondary/20">
          <div className={`transition-translate duration-500 bg-accent w-5 h-5 absolute top-1/2 left-0.5 ${resolvedTheme === 'light' ? 'translate-x-0' : 'translate-x-5'} -translate-y-1/2 rounded-full`}></div>
          <img className={`absolute transition-all duration-500 top-1/2 left-1.25 ${resolvedTheme === 'light' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'} -translate-y-1/2`} src={sunrays}/>
          <div className={`transition-all duration-500 ${resolvedTheme === 'light' ? 'w-2 h-2 bg-[#F8B61C] translate-x-0' : 'w-3 h-3 bg-secondary translate-x-4.5'} absolute top-1/2 left-2 -translate-y-1/2 rounded-full`}></div>
          <div className={`transition-all duration-400 bg-accent ${resolvedTheme === 'light' ? 'w-0 h-0 opacity-0 translate-x-0' : 'w-2 h-2 opacity-100 translate-x-5.5'} absolute top-1/2 left-2 -translate-y-1/2 rounded-full`}></div>
        </div>
        
      </div>
    </button>
  )
}

export default ThemeToggle