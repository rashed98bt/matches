import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-[10vh] bg-violet-700 text-white  top-0 left-0 w-full sticky">
      <div className="w-[75%] h-full m-auto items-center flex justify-between">
        <Link to="/">Home</Link>
        <ul className="flex items-center justify-between">
          <Link to="/premerLeag" className="mx-1 cursor-pointer">
            PremerLeag
          </Link>
          <Link to="/LaLiga" className="mx-1 cursor-pointer">
            LaLiga
          </Link>
          <Link to="/Bundesliga" className="mx-1 cursor-pointer">
            Bundesliga
          </Link>
          <Link to="/Seria_A" className="mx-1 cursor-pointer">
            Seria A
          </Link>
          <Link to="/Ligue_1" className="mx-1 cursor-pointer">
            Ligue 1
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
