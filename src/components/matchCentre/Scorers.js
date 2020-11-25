import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { modifyGoals } from "../../actions/matches";

import football from "../../static/img/footballBlue.png";
import { Important, MidTitle, StyledParagraph } from "../styled/Titles";
import { GoalsList, ScorersBlock, ScoreBall } from "../styled/StyledCentre";
import { Flex } from "../styled/Common";
export const Scorers = ({ scorers, matchId, modifyGoals }) => {
  const deleteGoal = (number) => {
    const remove = scorers.filter((row) => row.number !== number);
    modifyGoals(matchId, remove);
  };

  return (
    <ScorersBlock>
      <MidTitle color="#001489">Goals</MidTitle>
      <StyledParagraph mb color="#898989">
        Click the ball at the lineup section to add scorer
      </StyledParagraph>
      {scorers.length === 0 && (
        <MidTitle center color="#242424">
          NO GOALS
        </MidTitle>
      )}
      <GoalsList>
        {scorers.map((row, i) => (
          <li key={i} onClick={() => deleteGoal(row.number)}>
            <Flex horizontal="center">
              <ScoreBall>
                <img src={football} alt="" />
              </ScoreBall>
              <StyledParagraph>
                <Important>{row.last}</Important>
              </StyledParagraph>
            </Flex>
          </li>
        ))}
      </GoalsList>
    </ScorersBlock>
  );
};
Scorers.propTypes = {
  scorers: PropTypes.array.isRequired,
  modifyGoals: PropTypes.func.isRequired,
  matchId: PropTypes.string.isRequired,
};

export default connect(null, { modifyGoals })(Scorers);
