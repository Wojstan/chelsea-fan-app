import React from "react";
import { TicketList, Info } from "../styled/StyledTickets";

import { Important, MidTitle, StyledParagraph } from "../styled/Titles";

export default function TicketInfo({ title, about, pricing }) {
  return (
    <Info>
      <MidTitle>
        <Important dark>{title}</Important>
      </MidTitle>
      <StyledParagraph color="#242424">{about}</StyledParagraph>
      <TicketList>
        {pricing.map((row, i) => (
          <li key={i}>
            <StyledParagraph color="#242424">{row}</StyledParagraph>
          </li>
        ))}
      </TicketList>
    </Info>
  );
}
