import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Menu from "./layout/Menu";
import Counter from "./home/Counter";
import MatchBlock from "./home/MatchBlock";

import plLogo from "../static/img/plLogo.png";
import Important from "./home/Important";

export const Home = () => {
  const [matches, setMatches] = useState({
    last: {
      homeTeamID: 0,
      awayTeamID: 0,
      home: "",
      guest: "",
      homeScore: 0,
      awayScore: 0,
      logoHome: "",
      logoAway: "",
      competition: "",
      date: "",
    },
    next: {
      homeTeamID: 0,
      awayTeamID: 0,
      home: "",
      guest: "",
      logoHome: "",
      logoAway: "",
      competition: "",
      date: new Date(),
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
            last: {
              homeTeamID: finished[finished.length - 1].homeTeam.id,
              awayTeamID: finished[finished.length - 1].awayTeam.id,
              home: finished[finished.length - 1].homeTeam.name,
              guest: finished[finished.length - 1].awayTeam.name,
              homeScore: finished[finished.length - 1].score.fullTime.homeTeam,
              awayScore: finished[finished.length - 1].score.fullTime.awayTeam,
              logoHome: `https://crests.football-data.org/${
                finished[finished.length - 1].homeTeam.id
              }.svg`,
              logoAway: `https://crests.football-data.org/${
                finished[finished.length - 1].awayTeam.id
              }.svg`,
              competition: finished[finished.length - 1].competition.name,
              date: finished[finished.length - 1].utcDate,
            },
            next: {
              homeTeamID: scheudled[0].homeTeam.id,
              awayTeamID: scheudled[0].awayTeam.id,
              home: scheudled[0].homeTeam.name,
              guest: scheudled[0].awayTeam.name,
              logoHome: `https://crests.football-data.org/${scheudled[0].homeTeam.id}.svg`,
              logoAway: `https://crests.football-data.org/${scheudled[0].awayTeam.id}.svg`,
              competition: scheudled[0].competition.name,
              date: scheudled[0].utcDate,
            },
          });
        });
    };
    fetchData();
  }, []);

  console.log(matches);

  return (
    <main className="home">
      <header className="main-header">
        <Menu />
        <section className="counter">
          <Counter nextMatch={new Date(matches.next.date)} />
        </section>
      </header>
      <article className="main-info">
        <h2>Chelsea FC Fan App</h2>
        <p>
          One of Chelsea's most iconic players made history with the Blues twice
          in 1997 as Ruud Gullit led the Blues to their first trophy win in 26
          years and in doing so became the first black manager to win a major
          British football trophy. This is Gullit's phenomenal story...
        </p>
      </article>

      <section className="matches">
        <MatchBlock
          title="LAST"
          home={matches.last.home}
          guest={matches.last.guest}
          logoHome={matches.last.logoHome}
          logoGuest={matches.last.logoAway}
          type={plLogo}
          time={new Date(matches.last.date)}
          scoreHome={matches.last.homeScore}
          scoreGuest={matches.last.awayScore}
        />
        <MatchBlock
          title="NEXT"
          home={matches.next.home}
          guest={matches.next.guest}
          logoHome={matches.next.logoHome}
          logoGuest={matches.next.logoAway}
          type={plLogo}
          time={new Date(matches.next.date)}
          scoreHome=""
          scoreGuest=""
        />
      </section>

      <section className="important-numbers">
        <h2>Players By Numbers</h2>
        <div className="separator-sm"></div>
        <ul>
          <li>
            <Important />
            <Important />
          </li>
          <li>
            <Important />
            <Important />
          </li>
          <li>
            <Important />
            <Important />
          </li>
        </ul>
      </section>
    </main>
  );
};

Home.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
