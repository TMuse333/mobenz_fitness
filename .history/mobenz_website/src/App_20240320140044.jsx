import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuroraHero from './components/aurorahero/auroraHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuroraHero/>
    </>
  )
}

export default App
