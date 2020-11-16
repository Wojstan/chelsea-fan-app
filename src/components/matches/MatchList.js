import React from "react";
import Match from "./Match";

export default function MatchList({ data, type, competition, search }) {
  return (
    <div className="match-list">
      {type === "FIXTURE" && <h1>NEXT 10 MATCHES</h1>}
      {type === "RESULTS" && <h1>LAST 10 MATCHES</h1>}
      <ul>
        {data
          .filter(
            (row, i) =>
              i < 10 &&
              (competition === ""
                ? true
                : row.competition.name === competition) &&
              (row.awayTeam.name.toLowerCase().includes(search.toLowerCase()) ||
                row.homeTeam.name.toLowerCase().includes(search.toLowerCase()))
          )
          .map((row) => (
            <Match
              key={row.id}
              id={row.id}
              home={row.homeTeam.name}
              away={row.awayTeam.name}
              homeLogo={`https://crests.football-data.org/${row.homeTeam.id}.svg`}
              awayLogo={`https://crests.football-data.org/${row.awayTeam.id}.svg`}
              date={new Date(row.utcDate)}
              homeScore={row.score.fullTime.homeTeam}
              awayScore={row.score.fullTime.awayTeam}
              competition={row.competition.name}
            />
          ))}
      </ul>
    </div>
  );
}
