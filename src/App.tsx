import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Component/home'
import BabyCareLanding from './Component/baby-care-landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<BabyCareLanding />} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  )
}

export default App
