import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';
import Parent from './components/Parent/Parent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home />
        <Parent/>
    </>
  )
}

export default App