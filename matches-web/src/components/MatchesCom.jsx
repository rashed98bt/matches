import { useEffect, useState } from "react";

function MatchesCom({ Matches }) {
  //   var [plData, setPlData] = useState({});
  var [competition, setCompetition] = useState({});
  var [matches, setMatches] = useState([]);
  useEffect(() => {
    const plData = Matches;
    async function fetchData() {
      try {
        console.log("ssssssssss");
        const response = Matches;
        setCompetition(response.competition);
        setMatches(response.matches);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* <img src={competition.emblem} alt="asdasd" className="h-[100px]" />
      {matches.map((match) => (
        <div
          key={match.id}
          className="border p-4 my-2 rounded-md	 text-black bg-white "
        >
          <div className="flex justify-between ">
            <img
              src={match.homeTeam.crest}
              alt="asdads"
              className="h-[50px] w-[50px]"
            />
            <div className="w-1/4 flex items-center justify-around ">
              <div className="text-center">
                <h6 className="font-semibold">Home</h6>
                <p className="font-light">{match.homeTeam.shortName}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-8 w-1/3 justify-between">
              <div className="text-3xl font-bold">
                {match.score.fullTime.home}
              </div>
              <div className="text-xs font-light text-center">
                <div className="">Round {match.matchday}</div>
                <div className="">{match.utcDate.slice(0, 10)}</div>
                <div className="">{match.referees.name}</div>
                {match.score.fullTime.home > match.score.fullTime.away && (
                  <div>Winner is {match.homeTeam.shortName}</div>
                )}
                {match.score.fullTime.home < match.score.fullTime.away && (
                  <div>Winner is {match.awayTeam.shortName} </div>
                )}
                {match.score.fullTime.home === match.score.fullTime.away && (
                  <div>Draw </div>
                )}
              </div>
              <div className="text-3xl font-bold">
                {match.score.fullTime.away}
              </div>
            </div>
            <div className="w-1/4 flex items-center justify-around ">
              <div className="text-center">
                <h3 className="font-semibold">Away</h3>
                <p className="font-light">{match.awayTeam.shortName}</p>
              </div>
            </div>
            <img
              src={match.awayTeam.crest}
              alt="asdads"
              className="h-[50px] w-[50px]"
            />
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default MatchesCom;
