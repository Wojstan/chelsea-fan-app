import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { modifyLineup, modifyGoals } from "../../actions/matches";

import football from "../../static/img/footballWhite.png";

export const Lineup = ({
  matchId,
  lineup,
  modifyLineup,
  modifyGoals,
  scorers,
}) => {
  const deletePlayer = (number) => {
    const remove = lineup.filter((row) => row.number !== number);
    modifyLineup(matchId, remove);
  };

  const addGoal = (player) => {
    modifyGoals(matchId, [...scorers, player]);
  };

  return (
    <div>
      <h2>Lineup</h2>
      <ul>
        {lineup.map((row) => (
          <li key={row.number}>
            <div className="player" onClick={() => deletePlayer(row.number)}>
              <h4>{row.number}</h4>
              <h3>{row.last}</h3>
            </div>
            <div className="goals">
              <button onClick={() => addGoal(row)}>
                <img src={football} alt="" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Lineup.propTypes = {
  lineup: PropTypes.array.isRequired,
  modifyLineup: PropTypes.func.isRequired,
  matchId: PropTypes.string.isRequired,
};

export default connect(null, { modifyLineup, modifyGoals })(Lineup);
