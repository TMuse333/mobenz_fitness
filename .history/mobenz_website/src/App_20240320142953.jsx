import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuroraHero from './components/aurorahero/auroraHero'
import Herobanner from './components/herobanner/herobanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Herobanner/>
    </>
  )
}

export default App
