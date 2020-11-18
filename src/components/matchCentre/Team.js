import React, { useEffect } from "react";
import { getPlayers } from "../../actions/players";
import { modifyLineup } from "../../actions/matches";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Team = ({ players, getPlayers, team, matchId, modifyLineup }) => {

  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  const addPlayer = (player) => {
    const contains = team.filter(row => row.number === player.number);
    if (team.length < 11 && contains.length === 0) {
      modifyLineup(matchId, [...team, { number: player.number, last: player.last }]);
    }
  }

  return (
    <div className="team-list">
      <ul>
        {players.map((row, i) => (
          <li key={i}>
            <h4>{row.name}</h4>
            <ul>
              {row.players.map((player) => (
                <li
                  key={player.number}
                  className="player-row"
                  onClick={() =>
                    addPlayer(player)
                  }
                >
                  <h5>{player.number}</h5>
                  <p>
                    {player.name} <strong>{player.last}</strong>
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

Team.propTypes = {
  players: PropTypes.array.isRequired,
  getPlayers: PropTypes.func.isRequired,
  modifyLineup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  players: state.players.players,
});

export default connect(mapStateToProps, { getPlayers, modifyLineup })(Team);
