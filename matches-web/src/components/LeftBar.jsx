import React from "react";
import mangerImg from "../images/pLeagMangers.png";

function LeftBar() {
  return (
    <div className="bottom-0 left-[0] h-[100vh] w-[20%] fixed">
      <img
        src={mangerImg}
        alt="asdasd"
        className="absolute bottom-0 h-[75%] left-0"
      />
    </div>
  );
}

export default LeftBar;
