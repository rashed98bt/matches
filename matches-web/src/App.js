import { useEffect, useState } from "react";
import "./App.css";
import PremerLeag from "./pages/PremerLeag";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <Header />
      <div
        className=" w-[100%] flex	h-[82vh] gap-[10%]"
        style={{
          backgroundImage: "linear-gradient(137deg, rgb(5, 242, 108), #07F2F2)",
        }}
      >
        <RightBar />
        <div className="  w-[70%]  overflow-y-auto	scrollbar-hide">
          <PremerLeag />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
