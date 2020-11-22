import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { modifyRatings } from "../../actions/matches";
import { connect } from "react-redux";
import SingleRating from "./SingleRating";
import { BlueButton } from "../styled/Button";

export const Ratings = ({ matchId, lineup, propRatings, modifyRatings }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const addRate = lineup.map((row, i) => ({
      ...row,
      rating: i < propRatings.length ? propRatings[i].rating : 0,
    }));
    setRatings(addRate);
  }, [lineup, propRatings]);

  const onSubmit = (e) => {
    e.preventDefault();
    modifyRatings(matchId, ratings);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row">
          {ratings.map((row, i) => (
            <SingleRating
              key={row.number}
              data={ratings}
              setData={setRatings}
              index={i}
            />
          ))}
        </div>
        <BlueButton type="submit">Submit</BlueButton>
      </form>
    </div>
  );
};

Ratings.propTypes = {
  lineup: PropTypes.array.isRequired,
  matchId: PropTypes.string.isRequired,
  modifyRatings: PropTypes.func.isRequired,
};

export default connect(null, { modifyRatings })(Ratings);
