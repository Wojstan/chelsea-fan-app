import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Menu from "./layout/Menu";
import Lineup from "./matchCentre/Lineup";
import Result from "./matchCentre/Result";
import Team from "./matchCentre/Team";
import Scorers from "./matchCentre/Scorers";

import lion from "../static/img/lion.png";

import { getMatch } from "../actions/matches";

export const MatchCentre = ({ match, getMatch, game }) => {
  const [matchData, setMatchData] = useState({
    homeTeam: { id: 66, name: "Chelsea FC" },
    awayTeam: { id: 66, name: "" },
    score: { fullTime: { homeTeam: 0, awayTeam: 0 } },
  });
  const id = match.params.id;

  useEffect(() => {
    const fetchData = (id) => {
      fetch(`https://api.football-data.org/v2/matches/${id}`, {
        method: "GET",
        headers: { "X-Auth-Token": "452a01d58d644408bb47bf5abfdbf109" },
      })
        .then((res) => res.json())
        .then((data) => setMatchData(data.match));
    };
    fetchData(id);
  }, [id]);

  useEffect(() => {
    getMatch(id);
  }, [id, getMatch]);


  return (
    <main className="match-centre">
      <section className="centre">
        <Menu color="white" />
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="white-block result">
                <Result
                  homeLogo={`https://crests.football-data.org/${matchData.homeTeam.id}.svg`}
                  awayLogo={`https://crests.football-data.org/${matchData.awayTeam.id}.svg`}
                  home={matchData.homeTeam.name}
                  away={matchData.awayTeam.name}
                  homeScore={matchData.score.fullTime.homeTeam}
                  awayScore={matchData.score.fullTime.awayTeam}
                />
              </div>
              <div className="white-block scorers">
                <Scorers
                  matchId={id}
                  scorers={game.goals}
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="white-block team">
                <h2>Set lineup</h2>
                <Team
                  matchId={id}
                  team={game.lineup}
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="lineup">
                <Lineup matchId={id} lineup={game.lineup} scorers={game.goals} />
                <div className="img-lion">
                  <img src={lion} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

MatchCentre.propTypes = {
  match: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  getMatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.matches.game,
});

export default connect(mapStateToProps, { getMatch })(MatchCentre);
