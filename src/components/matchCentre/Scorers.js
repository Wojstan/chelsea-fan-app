import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Scorers = ({ goals, lineup }) => {
  return (
    <div>
      <h2>Goals & Assists</h2>
      {[...Array(parseInt(goals))].map((i, j) => (
        <select key={j} name="" id="">
          {lineup.map((row) => (
            <option key={row.number} value={row.number}>{row.last}</option>
          ))}
        </select>
      ))}
    </div>
  );
};

Scorers.propTypes = {

};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Scorers);
