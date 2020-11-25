import React from 'react'

import Menu from "../layout/Menu"

import { SmWhiteButton } from "../styled/Button"
import { Header as StyledHeader, HeaderInfo } from "../styled/StyledMatches";
import { MidTitle, PageTitle, StyledParagraph } from '../styled/Titles';

export default function Header({ home, away, type }) {
  return (
    <StyledHeader>
      <Menu color="white" />
      <div className="container">
        <HeaderInfo>
          <StyledParagraph color="white" mb>LAST MATCH:</StyledParagraph>
          <MidTitle color="white">{home} - {away}</MidTitle>
          <SmWhiteButton>MATCH CENTRE</SmWhiteButton>
          <PageTitle>{type}</PageTitle>
        </HeaderInfo>
      </div>
    </StyledHeader>
  )
}
