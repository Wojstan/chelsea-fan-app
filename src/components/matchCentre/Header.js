import React from 'react'

import { MidTitle, PageTitle, StyledParagraph } from "../styled/Titles";
import { WhiteSeparator } from "../styled/Common";

import { Header as StyledHeader } from "../styled/StyledCentre"
import Menu from "../layout/Menu";

export default function Header({ competition, home, away, date, venue }) {
  return (
    <StyledHeader>
      <Menu color="white" />
      <div className="container">
        <MidTitle color="white" mt="4vh">
          {competition}
        </MidTitle>
        <WhiteSeparator width="5rem" />
        <MidTitle color="white">
          {home} - {away}
        </MidTitle>
        <StyledParagraph mb color="white">
          {venue}{" "}
          {new Date(date).toLocaleDateString()}
        </StyledParagraph>

        <PageTitle>MATCH CENTRE</PageTitle>
      </div>
    </StyledHeader>
  )
}
