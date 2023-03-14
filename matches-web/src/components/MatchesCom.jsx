import { useEffect, useState } from "react";

function MatchesCom({ Matches }) {
  const [matches, setMatches] = useState([]);
  const numberOfMatches = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  ];
  const [matchDay, setMatchDay] = useState();
  async function fetchData() {
    try {
      const response = Matches;
      setMatches(response.matches);
      console.log(matches);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const changeMatchDay = (number) => {
    setMatchDay(number);
  };
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {matchDay}
        </button>
        <ul
          className="dropdown-menu overflow-auto"
          style={{ maxHeight: "200px" }}
        >
          {numberOfMatches.map((number) => (
            <li>
              <p
                className="dropdown-item"
                onClick={() => changeMatchDay(number)}
              >
                {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {matches.map((match) => (
        <div key={match.id} className="border p-4 my-2 rounded	  ">
          <div className="row ">
            <img
              src={match.homeTeam.crest}
              alt="asdads"
              className="col-1 rounded"
              style={{ width: "65px", height: "65px" }}
            />
            <div className="col-3 ">
              <div className="text-center">
                <h6 className="font-semibold">Home</h6>
                <p className="font-light">{match.homeTeam.shortName}</p>
              </div>
            </div>
            <div className="col-4 row align-items-center">
              <div className="text-3xl font-bold col-2">
                {match.score.fullTime.home}
              </div>
              <div className="text-xs font-light text-center col-8">
                <div>Round {match.matchday}</div>
                <div>{match.utcDate.slice(0, 10)}</div>
                <div>{match.referees.name}</div>

                {match.status === "FINISHED"
                  ? (match.score.fullTime.home > match.score.fullTime.away && (
                      <div>Winner is {match.homeTeam.shortName}</div>
                    )) ||
                    (match.score.fullTime.home < match.score.fullTime.away && (
                      <div>Winner is {match.awayTeam.shortName} </div>
                    )) || <div>Draw </div>
                  : "Not Played Yet"}
              </div>
              <div className="text-3xl font-bold col-2">
                {match.score.fullTime.away}
              </div>
            </div>
            <div className="col-3 ">
              <div className="text-center">
                <h6 className="font-semibold">Away</h6>
                <p className="font-light">{match.awayTeam.shortName}</p>
              </div>
            </div>
            <img
              src={match.awayTeam.crest}
              alt="asdads"
              className="col-1 rounded"
              style={{ width: "65px", height: "65px" }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default MatchesCom;
