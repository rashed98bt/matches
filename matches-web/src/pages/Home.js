import React from "react";
import MatchesCom from "../components/MatchesCom";
import { datMatches } from "../data/datMatches";

function Home() {
  return (
    <>
      <MatchesCom Matches={datMatches} />
    </>
  );
}

export default Home;
