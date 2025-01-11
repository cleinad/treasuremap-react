import './css/Styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed, for example: */}
        {/* <Route path="/topics" element={<Topics />} /> */}
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App