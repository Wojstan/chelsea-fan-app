import React from "react";
import Menu from "./layout/Menu";

import { Header, AboutTickets } from "./styled/StyledTickets";
import { PageTitle } from "./styled/Titles";
import BuyTickets from "./tickets/BuyTickets";
import TicketInfo from "./tickets/TicketInfo";

const data = [
  {
    title: "HOME LEAGUE MATCHES",
    about:
      " Tickets for home Premier League matches go on sale 42 days before the match. Tickets can be applied for in 4 diffrent Areas:",
    pricing: [
      "AREA A - 60$ general / 55$ member",
      "AREA B - 50$ general / 45$ member",
      "AREA C - 40$ general / 35$ member",
      "AREA D - 30$ general / 25$ member",
    ],
  },
  {
    title: "DOMESTIC CUP/EUROPEAN HOME GAMES",
    about:
      " Tickets for home UCL matches go on sale 22 days before the match. Tickets can be applied for in 4 diffrent Areas:",
    pricing: [
      "AREA A - 60$ general / 55$ member",
      "AREA B - 50$ general / 45$ member",
      "AREA C - 40$ general / 35$ member",
      "AREA D - 30$ general / 25$ member",
    ],
  },
];

export default function Tickets() {
  return (
    <main>
      <Header>
        <Menu />
        <div className="container">
          <PageTitle>TICKETS</PageTitle>
        </div>
      </Header>

      <AboutTickets>
        <div className="container">
          {data.map((row, i) => (
            <TicketInfo
              key={i}
              title={row.title}
              about={row.about}
              pricing={row.pricing}
            />
          ))}
        </div>
      </AboutTickets>

      <div className="container">
        <BuyTickets />
      </div>
    </main>
  );
}
