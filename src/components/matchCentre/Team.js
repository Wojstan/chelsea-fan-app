import React, { useEffect } from "react";
import { getPlayers } from "../../actions/players";
import { modifyLineup } from "../../actions/matches";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  TeamBlock,
  TeamList,
  TeamNumber,
  PositionList,
  StyledPlayer,
  PositionName,
} from "../styled/StyledCentre";
import { Important, MidTitle, StyledParagraph } from "../styled/Titles";
import { Flex } from "../styled/Common";

export const Team = ({ players, getPlayers, team, matchId, modifyLineup }) => {
  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  const addPlayer = (player) => {
    const contains = team.filter((row) => row.number === player.number);
    if (team.length < 11 && contains.length === 0) {
      modifyLineup(matchId, [
        ...team,
        { number: player.number, last: player.last, img: player.img },
      ]);
    }
  };

  return (
    <TeamBlock>
      <MidTitle color="#001489">Set Lineup</MidTitle>
      <TeamList>
        {players.map((row, i) => (
          <li key={i}>
            <PositionName>{row.name}</PositionName>
            <PositionList>
              {row.players.map((player) => (
                <StyledPlayer
                  key={player.number}
                  onClick={() => addPlayer(player)}
                >
                  <Flex>
                    <TeamNumber>{player.number}</TeamNumber>
                    <StyledParagraph>
                      {player.name} <Important dark>{player.last}</Important>
                    </StyledParagraph>
                  </Flex>
                </StyledPlayer>
              ))}
            </PositionList>
          </li>
        ))}
      </TeamList>
    </TeamBlock>
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
