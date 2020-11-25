import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Lineup from "./matchCentre/Lineup";
import Result from "./matchCentre/Result";
import Team from "./matchCentre/Team";
import Scorers from "./matchCentre/Scorers";

import { getMatch } from "../actions/matches";
import Ratings from "./matchCentre/Ratings";

import { StyledCentre, StyledRatings } from "./styled/StyledCentre";

import Header from "./matchCentre/Header";
import { BigTitle, StyledParagraph } from "./styled/Titles";
import { AboutInfo } from "./styled/HomeStyled";

export const MatchCentre = ({ match, getMatch, game }) => {
  const [matchData, setMatchData] = useState({
    homeTeam: { id: 66, name: "Chelsea FC" },
    awayTeam: { id: 66, name: "" },
    score: { fullTime: { homeTeam: 0, awayTeam: 0 } },
    competition: { name: "" },
    venue: "",
    utcDate: "",
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
    <main>
      <Header
        home={matchData.homeTeam.name}
        away={matchData.awayTeam.name}
        date={matchData.utcDate}
        competition={matchData.competition.name}
        venue={matchData.venue}
      />
      <StyledCentre>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <Result
                homeLogo={`https://crests.football-data.org/${matchData.homeTeam.id}.svg`}
                awayLogo={`https://crests.football-data.org/${matchData.awayTeam.id}.svg`}
                home={matchData.homeTeam.name}
                away={matchData.awayTeam.name}
                homeScore={matchData.score.fullTime.homeTeam}
                awayScore={matchData.score.fullTime.awayTeam}
              />
              <Scorers matchId={id} scorers={game.goals} />
            </div>
            <div className="col-xl-4">
              <Team matchId={id} team={game.lineup} />
            </div>
            <div className="col-xl-4">
              <Lineup matchId={id} lineup={game.lineup} scorers={game.goals} />
            </div>
          </div>
        </div>
      </StyledCentre>

      <AboutInfo>
        <BigTitle blue>Pick ratings here</BigTitle>
        <StyledParagraph center color="#898989">
          After setting match result and lineup, rate the players and save it in
          the datebase.
        </StyledParagraph>
      </AboutInfo>

      <StyledRatings>
        <div className="container">
          <Ratings
            matchId={id}
            lineup={game.lineup}
            propRatings={game.ratings}
          />
        </div>
      </StyledRatings>
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
