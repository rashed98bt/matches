import React from "react";
import MatchesCom from "../components/MatchesCom";
import { data } from "../data/data";

function Home() {
  return (
    <>
      <MatchesCom Matches={data} />
    </>
  );
}

export default Home;
