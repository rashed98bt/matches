import "./App.css";
import PremerLeag from "./pages/PremerLeag";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";

function App() {
  return (
    <>
      <Header />
      <div className=" w-[100%] ">
        <div className="  w-[75%]  overflow-y-auto 	h-[82vh] 	scrollbar-hide m-auto">
          <div className="flex gap-x-[5%]">
            <RightBar />
            <LeftBar />
          </div>
          <PremerLeag />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
