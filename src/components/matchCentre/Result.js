import React from "react";
import { CentreBlock, Flex } from "../styled/Common";
import { CrestPlace, Crest } from "../styled/HomeStyled";
import { ResultRow } from "../styled/StyledCentre";
import { MidTitle, ScoreLabel, StyledParagraph } from "../styled/Titles";

export default function Result({
  homeLogo,
  awayLogo,
  home,
  away,
  homeScore,
  awayScore,
}) {
  return (
    <CentreBlock>
      <MidTitle color="#001489">Match Result</MidTitle>
      <ResultRow horizontal="center" vertical="space-between">
        <Flex horizontal="center">
          <CrestPlace mr>
            <Crest src={homeLogo} alt="" />
          </CrestPlace>
          <StyledParagraph>{home}</StyledParagraph>
        </Flex>
        <ScoreLabel nopd>{homeScore}</ScoreLabel>
      </ResultRow>
      <ResultRow horizontal="center" vertical="space-between">
        <Flex horizontal="center">
          <CrestPlace mr>
            <Crest src={awayLogo} alt="" />
          </CrestPlace>
          <StyledParagraph>{away}</StyledParagraph>
        </Flex>
        <ScoreLabel nopd>{awayScore}</ScoreLabel>
      </ResultRow>
    </CentreBlock>
  );
}
