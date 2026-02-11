import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import P1 from './components/P1'
import P2 from './components/P2'  
import P3 from './components/P3'  
import P4 from './components/P4'  
import P5 from './components/P5'  

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/p1" element={<P1 />} />
        <Route path="/p2" element={<P2 />} />
        <Route path="/p3" element={<P3 />} />
        <Route path="/p4" element={<P4 />} />
        <Route path="/p5" element={<P5 />} />
      </Routes>
    </>
  )
}

export default App
