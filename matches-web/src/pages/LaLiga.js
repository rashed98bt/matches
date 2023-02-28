import React, { useEffect, useState } from "react";
import StandingsCom from "../components/StandingsCom";
import TopScorCom from "../components/TopScorCom";
import MatchesCom from "../components/MatchesCom";

function LaLiga() {
  const [data, setData] = useState([]);
  const [standings, setStandings] = useState([]);
  const [topScore, setTopScore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStandings, setLoadingStandings] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch(
        "http://localhost:8080/laLigaAPI/matchbyday",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
          body: "22",
          method: "POST",
        }
      );
      const json = await response.json();
      setData(json);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchTopSocer() {
    try {
      const response = await fetch(
        "http://localhost:8080/laLigaAPI/topscooreleague",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
          method: "POST",
        }
      );
      const json = await response.json();
      setTopScore(json);
      setLoadingStandings(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTopSocer();
    fetchData();
  }, []);

  return (
    <>
      {loading && loadingStandings ? (
        <>
          <div className="flex justify-between">
            {/* <StandingsCom LeagStandings={standings} /> */}
            <TopScorCom TopScore={topScore} />
          </div>
          <MatchesCom Matches={data} />
        </>
      ) : (
        <div>No data</div>
      )}
    </>
  );
}

export default LaLiga;
