import { useEffect, useState } from "react";
import "./App.css";
import PremerLeag from "./pages/PremerLeag";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App w-[65%] m-auto	relative">
      <Header />
      <div className="h-[82vh] absolute top-[10vh] z-[-1] w-full overflow-y-auto	scrollbar-hide">
        <PremerLeag />
      </div>
      <Footer />
    </div>
  );
}

export default App;
