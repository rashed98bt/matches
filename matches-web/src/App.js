import PremerLeag from "./pages/PremerLeag";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LaLiga from "./pages/LaLiga";
import Bundesliga from "./pages/Bundesliga";
import SeriaA from "./pages/SeriaA";
import LeagOne from "./pages/LeagOne";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/premerLeag" element={<PremerLeag />} />
          <Route path="/Laliga" element={<LaLiga />} />
          <Route path="/Bundesliga" element={<Bundesliga />} />
          <Route path="/Seria_A" element={<SeriaA />} />
          <Route path="/Ligue_1" element={<LeagOne />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
