import React from "react";
function StandingsCom({ LeagStandings }) {
  const standing = LeagStandings;
  const tableTeam = standing.standings[0].table;
  console.log(tableTeam);
  return (
    <div className="overflow-x-auto col-7">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Club</th>
            <th scope="col">MP</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
            <th scope="col"> PTs </th>
            <th scope="col">Last 5 </th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {tableTeam.map((team) => (
            <tr key={team.position}>
              <th
                scope="col"
                className={`${
                  team.position < 5 && team.position
                    ? "bg-success"
                    : "" || (team.position > 17 && team.position)
                    ? "bg-danger"
                    : ""
                } text-center`}
              >
                {team.position}
              </th>
              <td>
                <img
                  src={team.team.crest}
                  alt="..."
                  style={{ width: "30px", height: "30px" }}
                />
              </td>
              <td>{team.team.shortName}</td>
              <td>{team.playedGames}</td>
              <td>{team.won}</td>
              <td>{team.draw}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
              <td>
                {team.form.split(",").map((m) => (
                  <td
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "3px",
                    }}
                    className={`${
                      m.valueOf() === "W"
                        ? "bg-success"
                        : "bg-white" && m.valueOf() === "L"
                        ? "bg-danger"
                        : "bg-secondary"
                    } rounded-circle p-1 text-center`}
                  >
                    {m.valueOf()}
                  </td>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandingsCom;
