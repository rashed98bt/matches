import React, { useEffect, useState } from "react";
import MatchesCom from "../components/MatchesCom";
import { Triangle } from "react-loader-spinner";

function Home() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchMatches() {
    try {
      const response = await fetch("http://localhost:8080/homeAPI/allMatches", {
        headers: { "Content-Type": "application/json", auth: "rashed" },
        mode: "cors",
        method: "POST",
      });
      const json = await response.json();

      setMatches(json);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMatches();
  }, []);
  return (
    <>
      {loading ? (
        <MatchesCom Matches={matches} />
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

export default Home;
