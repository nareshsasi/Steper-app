import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HomeFiles from './Home/HomeFiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomeFiles />
    </>
  )
}

export default App
