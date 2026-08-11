import HomePage from '../pages/HomePage'
import { ThemeProvider } from '../hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App;