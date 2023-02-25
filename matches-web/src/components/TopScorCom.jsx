import React from "react";
import { players } from "../data/scoores.js";

function LeftBar() {
  const playersTable = players[0].scorers;
  console.log(playersTable);
  let counter = 1;
  return (
    <div className=" w-[35%] ">
      <h5>Top scoores</h5>
      <h5>asdasd</h5>
      <div>
        <div
          className="  flex rounded-lg py-1 text-white font-medium text-center"
          style={{ backgroundColor: "#340040" }}
        >
          <span className="w-[5%] mr-1"></span>
          <span className="w-[45%] text-left">Name</span>
          <span className="w-[12%] ">Club</span>
          <span className="w-[12%] ">G</span>
          <span className="w-[12%] ">A</span>
          <span className="w-[12%] ">P</span>
        </div>

        {playersTable.map((player) => (
          <>
            <div className="flex  pl-0  my-1 py-1  border-none items-center text-center">
              <span
                className="w-[5%] mr-1 rounded-l-lg border-none"
                style={
                  counter < 4
                    ? { backgroundColor: "#22c55e" }
                    : {
                        backgroundColor: "transparent",
                      }
                }
              >
                {counter++}
              </span>
              <span className="w-[45%] text-left">{player.player.name}</span>
              <span className="w-[12%] ">{player.team.tla}</span>
              <span className="w-[12%] ">{player.goals}</span>
              <span className="w-[12%] ">{player.assists}</span>
              <span className="w-[12%] ">{player.penalties}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
