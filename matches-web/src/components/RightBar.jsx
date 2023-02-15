import React from "react";
import playerImg from "../images/pLeagPlayer.png";

function RightBar() {
  return (
    <div className="bottom-0 right-[0] h-[100vh] w-[20%] fixed">
      <img
        src={playerImg}
        alt="asdasd"
        className="absolute bottom-0 h-[75%] right-0"
      />
    </div>
  );
}

export default RightBar;
