import './css/Styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import FinancialFoundation from './pages/financialFoundation'

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