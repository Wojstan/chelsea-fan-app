import React, { useEffect } from "react";
import { getPlayers } from "../../actions/players";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Team = ({ selectPlayer, players, getPlayers }) => {
  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

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
                    selectPlayer({
                      number: player.number,
                      last: player.last,
                    })
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
  selectPlayer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  players: state.players.players,
});

export default connect(mapStateToProps, { getPlayers })(Team);
