import React from "react";

function TopScorCom({ TopScore }) {
  const playersTable = TopScore.scorers;

  let counter = 1;
  return (
    <div className="col-4">
      <table class="table">
        <thead>
          <tr className="text-center">
            <th scope="col">Player Name</th>
            <th scope="col">Club</th>
            <th scope="col">G</th>
            <th scope="col">A</th>
            <th scope="col">P</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {playersTable.map((player) => (
            <tr key={player.position} className="text-center">
              <td>{player.player.name}</td>
              <td>
                <img
                  src={player.team.crest}
                  alt="..."
                  style={{ width: "30px", height: "30px" }}
                />
                {player.team.tla}
              </td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.penalties}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopScorCom;
