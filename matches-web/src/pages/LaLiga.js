import React, { useEffect, useState } from "react";
import StandingsCom from "../components/StandingsCom";
import TopScorCom from "../components/TopScorCom";
import MatchesCom from "../components/MatchesCom";
import { standings } from "../data/standingsLaliga";

function LaLiga() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/x/matchbyday", {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
          body: "10",
          method: "POST",
        });
        const json = await response.json();
        setData(json);
        console.log("fffffffffff");
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        {/* <StandingsCom LeagStandings={standings} />
        <TopScorCom /> */}
      </div>
      <MatchesCom Matches={data} />
    </>
  );
}

export default LaLiga;
