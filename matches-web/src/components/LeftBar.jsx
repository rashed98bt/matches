import React from "react";
import { players } from "../data/scoores.js";

function LeftBar() {
  const playersTable = players[0].scorers;
  return (
    <div className=" w-[30%] ">
      <h5>asdasdasd</h5>
      <h5>asdasd</h5>
      <div>
        <div
          className="  flex rounded-lg py-1 text-white font-medium"
          style={{ backgroundColor: "#340040" }}
        >
          <span className="w-[50%] text-left">Name</span>
          <span className="w-[12%] text-center">Club</span>
          <span className="w-[12%] text-center">G</span>
          <span className="w-[12%] text-center">A</span>
          <span className="w-[12%] text-center">P</span>
        </div>

        {playersTable.map((player) => (
          <>
            <div className="flex  pl-0 rounded-lg my-1  border-none items-center">
              <span className="w-[50%] text-left">{player.player.name}</span>
              <span className="w-[12%] text-center">{player.team.tla}</span>
              <span className="w-[12%] text-center">{player.goals}</span>
              <span className="w-[12%] text-center">{player.assists}</span>
              <span className="w-[12%] text-center">{player.penalties}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
