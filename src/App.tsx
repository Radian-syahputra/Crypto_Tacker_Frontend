// App.tsx
import { Toaster } from 'react-hot-toast'
import useAuth from './hooks/useAuth'

const App = () => {
  useAuth()
  return (
    <Toaster position="top-right" />
  )
}

export default App