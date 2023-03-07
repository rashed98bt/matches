import { useEffect, useState } from "react";
import MatchesCom from "../components/MatchesCom";
import StandingsCom from "../components/StandingsCom";
import TopScorCom from "../components/TopScorCom";
import { Triangle } from "react-loader-spinner";

function PremerLeag() {
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [topScore, setTopScore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStandings, setLoadingStandings] = useState(false);
  const [LoadingTopScore, setLoadingTopScore] = useState(false);
  async function fetchMatches() {
    try {
      const response = await fetch(
        "http://localhost:8080/laLigaAPI/matchbyday",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
          body: "25",
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
        "http://localhost:8080/laLigaAPI/topscooreleague",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
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
        "http://localhost:8080/laLigaAPI/standings",
        {
          headers: { "Content-Type": "application/json", auth: "rashed" },
          mode: "cors",
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
          <div className="flex justify-between">
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

export default PremerLeag;
