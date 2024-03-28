import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import AuroraHero from './components/aurorahero/auroraHero'
import Herobanner from './components/herobanner/herobanner'
import Homepage from './components/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  <Homepage/>
    </>
  )
}

export default App
