import React from "react";
import { Flex } from "../styled/Common";

import {
  MatchElement,
  MatchInfo,
  MatchLink,
  StyledCompetition,
  MainScore,
  ScoreCrest,
  ScoreResult,
  TeamName,
  StyledCentre,
} from "../styled/StyledMatches";
import { StyledParagraph, Important } from "../styled/Titles";

export default function Match({
  id,
  competition,
  home,
  away,
  homeScore,
  awayScore,
  date,
  homeLogo,
  awayLogo,
}) {
  return (
    <MatchElement>
      <Flex vertical="space-between" horizontal="center">
        <StyledParagraph mb>
          <Important dark>{date.toLocaleString()}</Important>
        </StyledParagraph>
        <StyledParagraph mb>
          <Important>HOME</Important>
        </StyledParagraph>
      </Flex>
      <MatchLink to={`/matches/${id}`}>
        <MatchInfo vertical="center" horizontal="center">
          <StyledCompetition>{competition}</StyledCompetition>
          <MainScore vertical="space-between" horizontal="center">
            <TeamName right color="#242424">
              {home}
            </TeamName>
            <ScoreCrest>
              <img src={homeLogo} alt="" />
            </ScoreCrest>

            <ScoreResult>
              {homeScore} - {awayScore}
            </ScoreResult>

            <ScoreCrest className="img">
              <img src={awayLogo} alt="" />
            </ScoreCrest>

            <TeamName color="#242424">{away}</TeamName>
          </MainScore>

          <StyledCentre>
            <Important blue>Match centre {">"}</Important>
          </StyledCentre>
        </MatchInfo>
      </MatchLink>
    </MatchElement>
  );
}
