import StandingsCom from "../components/StandingsCom";
import TopScorCom from "../components/TopScorCom";
import MatchesCom from "../components/MatchesCom";
import { data } from "../data/data";
import { standings } from "../data/standings";
function PremerLeag() {
  return (
    <>
      <div className="flex justify-between">
        <StandingsCom LeagStandings={standings} />
        <TopScorCom />
      </div>
      <MatchesCom Matches={data} />
    </>
  );
}

export default PremerLeag;
