import React from "react";
import { MatchBlock as Block, Flex } from "../styled/Common";
import { MidTitle, StyledParagraph, Important, ScoreLabel } from "../styled/Titles";
import { CrestPlace, Crest, MatchResult } from "../styled/HomeStyled";

export default function MatchBlock({
  home,
  guest,
  time,
  title,
  type,
  scoreHome,
  scoreGuest,
  logoHome,
  logoGuest,
}) {
  return (
    <Block>
      <Flex vertical="space-between" horizontal="center">
        <div>
          {home === "Chelsea FC" && (
            <MidTitle>
              <Important>{home}</Important> - {guest}
            </MidTitle>
          )}
          {guest === "Chelsea FC" && (
            <MidTitle>
              {home} - <Important>{guest}</Important>
            </MidTitle>
          )}

          <Flex>
            {home === "Chelsea FC" && (
              <StyledParagraph>
                <Important mr="10px">HOME</Important>
              </StyledParagraph>
            )}
            {guest === "Chelsea FC" && (
              <StyledParagraph>
                <Important mr="10px">AWAY</Important>
              </StyledParagraph>
            )}

            <StyledParagraph>{time.toLocaleString()}</StyledParagraph>
          </Flex>

        </div>
        <MidTitle blue>{title}</MidTitle>
      </Flex >

      <MatchResult vertical="center" horizontal="center" >

        <CrestPlace>
          <Crest src={logoHome} alt="" />
        </CrestPlace>
        <ScoreLabel>
          {scoreHome} - {scoreGuest}
        </ScoreLabel>
        <CrestPlace>
          <Crest src={logoGuest} alt="" />
        </CrestPlace>

      </MatchResult>

      <Flex vertical="center" horizontal="center">
        <img src={type} alt="" />
      </Flex>
    </Block>
  );
}
