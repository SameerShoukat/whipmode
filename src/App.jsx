import React from "react";
import Index from "./pages/index.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HowitsWorkpage from "./pages/HowitsWorkpage.jsx";
import Pricing from "./pages/Pricing.jsx";
import Helping from "./pages/Helping.jsx";
import Header from "./components/Header.jsx";
const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/HowitsWorkpage" element={<HowitsWorkpage/>} />
          <Route exact path="/Pricing" element={<Pricing/>} />
          <Route exact path="/Helping" element={<Helping/>} />
          <Route exact path="/Sign" element={<div>This Page Is Not Define</div>} />
          <Route exact path="/Join" element={<div>This Page Is Not Define</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
