import React from "react";
import './css/styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home' 
import FinancialFoundation from './pages/FinancialFoundation' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financial-foundation" element={<FinancialFoundation />} />
        {/* Add more routes as needed, for example: */}
        {/* <Route path="/topics" element={<Topics />} /> */}
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App