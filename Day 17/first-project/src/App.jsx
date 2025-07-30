import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';
import Parent from './components/Parent/Parent';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        {
          path: '/gallery', element: <Gallery />, children: [
            { path: 'cats', element: <Cats /> },
            { path: 'dogs', element: <Dogs /> },
          ]
        },
        { path: '/send', element: <Send /> },
        { path: '/hero', element: <Hero /> },
        { path: '/parent', element: <Parent /> },
        { path: '*', element: <NotFound /> },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App