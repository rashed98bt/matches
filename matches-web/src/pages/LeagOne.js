import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import MatchesCom from "../components/MatchesCom";
import StandingsCom from "../components/StandingsCom";
import TopScorCom from "../components/TopScorCom";

function LeagOne() {
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [topScore, setTopScore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStandings, setLoadingStandings] = useState(false);
  const [LoadingTopScore, setLoadingTopScore] = useState(false);

  async function fetchMatches() {
    try {
      const response = await fetch(
        "http://localhost:8080/apiController/leageweekmatches",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
          body: "FL1",
          method: "POST",
        }
      );
      const json = await response.json();

      setMatches(json);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchTopSocer() {
    try {
      const response = await fetch(
        "http://localhost:8080/apiController/leagetopscore",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          body: "FL1",
          mode: "cors",
          method: "POST",
        }
      );
      const json = await response.json();
      setTopScore(json);
      setLoadingTopScore(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchStandings() {
    try {
      const response = await fetch(
        "http://localhost:8080/apiController/leagestandings",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
          body: "FL1",
          method: "POST",
        }
      );
      const json = await response.json();
      setStandings(json);
      setLoadingStandings(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchStandings();
    fetchTopSocer();
    fetchMatches();
  }, []);

  return (
    <>
      {loading && loadingStandings && LoadingTopScore ? (
        <>
          <img
            src={matches.competition.emblem}
            alt="asdasd"
            className="h-[150px]"
          />
          <div className="row">
            <StandingsCom LeagStandings={standings} />
            <TopScorCom TopScore={topScore} />
          </div>
          <MatchesCom Matches={matches} />
        </>
      ) : (
        <div className="fixed flex justify-center items-center top-0 left-0 -50% h-screen w-screen">
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default LeagOne;
