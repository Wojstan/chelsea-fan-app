import React, { useEffect, useState } from "react";

import Menu from "./layout/Menu";
import Counter from "./home/Counter";
import MatchBlock from "./home/MatchBlock";
import Table from "./home/Table";

import { BigTitle, StyledParagraph } from "./styled/Titles";
import {
  MainInfo,
  Matches,
  AboutInfo,
  Header,
  StyledCounter,
  Statistics,
} from "./styled/HomeStyled";
import { WhiteButton } from "./styled/Button";

import plLogo from "../static/img/plLogo.png";
import clLogo from "../static/img/CLLogo.png";

export const Home = () => {
  const [matches, setMatches] = useState({
    last: {
      homeTeam: { id: 66, name: "Chelsea FC" },
      awayTeam: { id: 66, name: "" },
      score: { fullTime: { homeTeam: 0, awayTeam: 0 } },
      competition: { name: "" },
      utcDate: "",
    },
    next: {
      homeTeam: { id: 66, name: "Chelsea FC" },
      awayTeam: { id: 66, name: "" },
      competition: { name: "" },
      utcDate: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://api.football-data.org/v2/teams/61/matches/", {
        method: "GET",
        headers: { "X-Auth-Token": "452a01d58d644408bb47bf5abfdbf109" },
      })
        .then((res) => res.json())
        .then((data) => {
          const finished = data.matches.filter(
            (row) => row.status === "FINISHED"
          );
          const scheudled = data.matches.filter(
            (row) => row.status === "SCHEDULED"
          );

          setMatches({
            last: finished[finished.length - 1],

            next: scheudled[0],
          });
        });
    };
    fetchData();
  }, []);

  return (
    <main>
      <Header>
        <Menu color="white" />

        <MainInfo column vertical="center">
          <BigTitle>Chelsea Fc Fan App</BigTitle>
          <StyledParagraph color="white" center>
            One of Chelsea's most iconic players made history with the Blues
            twice in 1997 as Ruud Gullit led the Blues to their first trophy win
            in 26 years and in doing so became the first black manager to win a
            major British football trophy. This is Gullit's phenomenal story...
          </StyledParagraph>
          <a
            href="https://www.chelseafc.com/en"
            target="_blank"
            rel="noreferrer"
          >
            <WhiteButton>Official Website</WhiteButton>
          </a>
          <a
            href="https://www.premierleague.com/"
            target="_blank"
            rel="noreferrer"
          >
            <WhiteButton>PL Website</WhiteButton>
          </a>
        </MainInfo>
      </Header>

      <AboutInfo>
        <BigTitle blue>Add your ratings after every match</BigTitle>
        <StyledParagraph color="#898989" center>
          One of Chelsea's most iconic players made history with the Blues twice
          in 1997 as Ruud Gullit led the Blues to their first trophy win in 26
          years and in doing so became the first black manager to win a major
          British football trophy. This is Gullit's phenomenal story...
        </StyledParagraph>
      </AboutInfo>

      <Matches>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <MatchBlock
                title="LAST"
                home={matches.last.homeTeam.name}
                guest={matches.last.awayTeam.name}
                logoHome={`https://crests.football-data.org/${matches.last.homeTeam.id}.svg`}
                logoGuest={`https://crests.football-data.org/${matches.last.awayTeam.id}.svg`}
                type={
                  matches.last.competition.name === "Premier League"
                    ? plLogo
                    : clLogo
                }
                time={new Date(matches.last.utcDate)}
                scoreHome={matches.last.score.fullTime.homeTeam}
                scoreGuest={matches.last.score.fullTime.awayTeam}
              />
            </div>
            <div className="col-xl-6">
              <MatchBlock
                title="NEXT"
                home={matches.next.homeTeam.name}
                guest={matches.next.awayTeam.name}
                logoHome={`https://crests.football-data.org/${matches.next.homeTeam.id}.svg`}
                logoGuest={`https://crests.football-data.org/${matches.next.awayTeam.id}.svg`}
                type={
                  matches.next.competition.name === "Premier League"
                    ? plLogo
                    : clLogo
                }
                time={new Date(matches.next.utcDate)}
              />
            </div>
          </div>
        </div>
      </Matches>

      <Statistics>
        <Table />
      </Statistics>

      <StyledCounter>
        <Counter
          home={matches.next.homeTeam.name}
          away={matches.next.awayTeam.name}
          nextMatch={new Date(matches.next.utcDate)}
        />
      </StyledCounter>
    </main>
  );
};

export default Home;
