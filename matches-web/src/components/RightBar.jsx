import React from "react";
import { standings } from "../data/standings.js";
function RightBar() {
  const standing = standings[0];
  console.log(standing.standings[0]);
  return (
    <div className="relative w-[14%]">
      <h5>{standing.competition.name}</h5>
      <h5>{standing.season.currentMatchday}</h5>
      <table></table>
      <table>
        <tbody>
          <tr>
            <td>Club</td>
            <td>MP</td>

            <td>W</td>
            <thead>D</thead>

            <thead>L</thead>
            <thead>GF</thead>

            <thead>GA</thead>
            <thead>GD</thead>

            <thead>PTs</thead>
            <thead>Last 5</thead>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RightBar;
