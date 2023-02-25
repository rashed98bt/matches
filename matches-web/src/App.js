import "./App.css";
import PremerLeag from "./pages/PremerLeag";
import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <div className=" w-[100%] ">
        <div className="  w-[75%]  overflow-y-auto 	h-[90vh] 	scrollbar-hide m-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/premerLeag" element={<PremerLeag />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
