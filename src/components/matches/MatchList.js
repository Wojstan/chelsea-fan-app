import React from "react";
import { LargeTitle } from "../styled/Titles";
import { StyledMatchList } from "../styled/StyledMatches"
import Match from "./Match";

export default function MatchList({ data, type, competition, search, amount }) {
  return (
    <div>
      {type === "FIXTURE" && <LargeTitle blue start>NEXT 10 MATCHES</LargeTitle>}
      {type === "RESULTS" && <LargeTitle blue start>LAST 10 MATCHES</LargeTitle>}
      <StyledMatchList>
        {data
          .filter(
            (row, i) =>
              i < amount &&
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
      </StyledMatchList>
    </div>
  );
}
