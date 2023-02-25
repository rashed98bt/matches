import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-[10vh] bg-violet-700 text-white  top-0 left-0 w-full sticky">
      <div className="w-[75%] h-full m-auto items-center flex justify-between">
        <p>Home</p>
        <ul className="flex items-center justify-between">
          <Link to="/premerLeag" className="mx-1 cursor-pointer">
            PremerLeag
          </Link>
          <li className="mx-1 cursor-pointer">Laliga</li>
          <li className="mx-1 cursor-pointer">BondesLiga</li>
          <li className="mx-1 cursor-pointer">Caltchio</li>
          <li className="mx-1 cursor-pointer">Leagou</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
