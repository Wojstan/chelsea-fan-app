import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { modifyLineup, modifyGoals } from "../../actions/matches";

import football from "../../static/img/footballWhite.png";
import lion from "../../static/img/lion.png";

import { Flex } from "../styled/Common"
import { LineupBlock, LineupList, LineupName, LineupNumber, PlayerLineup, Lion } from "../styled/StyledCentre"
import { MidTitle } from "../styled/Titles";
import { BallButton } from "../styled/Button"

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
    <LineupBlock>
      <Lion>
        <img src={lion} alt="" />
      </Lion>
      <MidTitle color="white">Lineup</MidTitle>
      <LineupList>
        {lineup.map((row) => (
          <li key={row.number}>
            <Flex horizontal="center" vertical="space-between">
              <PlayerLineup horizontal="center" onClick={() => deletePlayer(row.number)}>
                <LineupNumber>{row.number}</LineupNumber>
                <LineupName>{row.last}</LineupName>
              </PlayerLineup>
              <div>
                <BallButton onClick={() => addGoal(row)}>
                  <img src={football} alt="" />
                </BallButton>
              </div>
            </Flex>
          </li>
        ))}
      </LineupList>

    </LineupBlock>
  );
};

Lineup.propTypes = {
  lineup: PropTypes.array.isRequired,
  modifyLineup: PropTypes.func.isRequired,
  matchId: PropTypes.string.isRequired,
};

export default connect(null, { modifyLineup, modifyGoals })(Lineup);
