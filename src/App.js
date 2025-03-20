import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./skeleton/main";
import ScrollbarCarousel from "./parts/ScrolbarCarousel";
import Drone from "./parts/Drone";  

import Sharktank from './pages/Sharktank';
import Techtreasurehunt from "./pages/techtreasurehunt";
import TheBroCode from "./pages/TheBroCode";
import Hireorfire from "./pages/Hireorfire";
import FastnFurious from "./pages/fastnfurious";
import TechSangam from "./pages/TechSangam";
import CatiaWars from "./pages/catiawars";
import Mun from "./pages/Mun";
import BgmiValo from "./pages/BgmiValo";
import Ipl from "./pages/IplAuction";

function App() {
  return (
    <BrowserRouter>
      {/* Render the Drone animation globally */}
      <Drone />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/sharktank" element={<Sharktank />} />
        <Route exact path="/techtreasurehunt" element={<Techtreasurehunt />} />
        <Route exact path="/thebrocode" element={<TheBroCode />} />
        <Route exact path="/hireorfire" element={<Hireorfire />} />
        <Route exact path="/fastnfurious" element={<FastnFurious />} />
        <Route exact path="/techsangam" element={<TechSangam />} />
        <Route exact path="/catiawars" element={<CatiaWars />} />
        <Route exact path="/mun" element={<Mun />} />
        <Route exact path="/bgmivalo" element={<BgmiValo />} />
        <Route exact path="/iplauction" element={<Ipl />} />
        <Route exact path="/scroll" element={<ScrollbarCarousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
