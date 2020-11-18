import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { modifyGoals } from "../../actions/matches";

import football from "../../static/img/footballBlue.png";

export const Scorers = ({ scorers, matchId, modifyGoals }) => {
  const deleteGoal = (number) => {
    const remove = scorers.filter((row) => row.number !== number);
    modifyGoals(matchId, remove);
  };

  return (
    <div>
      <h2>Goals</h2>
      <p>Click the ball at the lineup section to add scorer</p>
      {scorers.length === 0 && <h3>NO GOALS</h3>}
      <ul>
        {scorers.map((row, i) => (
          <li key={i} onClick={() => deleteGoal(row.number)}>
            <div className="img">
              <img src={football} alt="" />
            </div>
            <h5>{row.last}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};
Scorers.propTypes = {
  scorers: PropTypes.array.isRequired,
  modifyGoals: PropTypes.func.isRequired,
  matchId: PropTypes.string.isRequired
}

export default connect(null, { modifyGoals })(Scorers);
