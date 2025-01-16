import React from "react";
import "./css/styles.css";

import {
  BrowserRouter,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";

import Home from "./pages/Home";
import FinancialFoundation from "./pages/financialFoundation";
import Wealth from "./pages/Wealth";
import HowMoneyWorks from "./pages/HowMoneyWorks";
import HighCostOfWaiting from "./pages/HighCostOfWaiting";
import RuleOf72 from "./pages/RuleOf72";
import DollarCostAveraging from "./pages/DollarCostAveraging";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/financial-foundation"
            element={<FinancialFoundation />}
          />
          <Route path="/Wealth" element={<Wealth />} />
          <Route path="/HowMoneyWorks" element={<HowMoneyWorks />} />
          <Route path="/HighCostOfWaiting" element={<HighCostOfWaiting />} />
          <Route path="/RuleOf72" element={<RuleOf72 />} />
          <Route
            path="/DollarCostAveraging"
            element={<DollarCostAveraging />}
          />

          {/* Add more routes as needed, for example: */}
          {/* <Route path="/topics" element={<Topics />} /> */}
          {/* <Route path="/map" element={<Map />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
