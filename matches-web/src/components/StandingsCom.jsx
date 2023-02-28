import React from "react";
function StandingsCom({ LeagStandings }) {
  const standing = LeagStandings;
  console.log(standing);
  const tableTeam = standing.standings[0].table;
  return (
    <div className=" w-[60%]">
      <h5>{standing.competition.name}</h5>
      <h5>{standing.season.currentMatchday}</h5>
      <div>
        <div
          className=" flex  rounded-lg py-1 text-white font-medium"
          style={{ backgroundColor: "#340040" }}
        >
          <span className="p-2 mr-2 w-[5%]"></span>
          <span className="mr-1 w-[20px]"></span>
          <span className="w-[20%] text-left">Club</span>
          <span className="w-[7.5%] text-center">MP</span>
          <span className="w-[5%] text-center">W</span>
          <span className="w-[5%] text-center">D</span>
          <span className="w-[5%] text-center">L</span>
          <span className="w-[7.5%] text-center">GF</span>
          <span className="w-[7.5%] text-center">GA</span>
          <span className="w-[7.5%] text-center">GD</span>
          <span className="w-[7.5%] text-center">PTs</span>
          <span className="w-[25%] text-center">Last 5</span>
        </div>

        {tableTeam.map((team) => (
          <div
            key={team.position}
            className="flex  pl-0 rounded-lg my-1  border-none items-center"
          >
            <span
              className="rounded-l-lg p-1 mr-2 w-[5%] text-center"
              style={
                team.position < 5
                  ? { backgroundColor: "#22c55e" }
                  : {
                      backgroundColor: "transparent ",
                    } && team.position > 17
                  ? { backgroundColor: "#ef4444" }
                  : {
                      backgroundColor: "transparent",
                    }
              }
            >
              {team.position}
            </span>
            <img
              src={team.team.crest}
              alt=""
              className="h-[20px] w-[20px] mr-1"
            />
            <span className="w-[20%] text-left">{team.team.shortName}</span>
            <span className="w-[7.5%] text-center">{team.playedGames}</span>
            <span className="w-[5%] text-center">{team.won}</span>
            <span className="w-[5%] text-center">{team.draw}</span>
            <span className="w-[5%] text-center">{team.lost}</span>
            <span className="w-[7.5%] text-center">{team.goalsFor}</span>
            <span className="w-[7.5%] text-center">{team.goalsAgainst}</span>
            <span className="w-[7.5%] text-center">{team.goalDifference}</span>
            <span className="w-[7.5%] text-center">{team.points}</span>
            <span className="w-[25%] text-center">{team.form}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StandingsCom;
