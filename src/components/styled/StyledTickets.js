import styled from "styled-components";
import centreBg from "../../static/img/ticketsView.png";

import { Flex } from "./Common";

export const Header = styled.header`
  background-image: url(${centreBg});
  background-position: center;
  background-size: cover;
  height: 48vh;
  h2 {
    padding-top: 23vh;
  }
`;

export const AboutTickets = styled.article`
  background-color: #efefef;
`;

export const TicketList = styled.ul`
  padding: 2vh 0vh 2vh 5vh;

  li {
    margin-bottom: 1vh;
  }
`;

export const Info = styled.div`
  padding-top: 3vh;
`;

export const BuyTickets = styled.section`
  padding-top: 2vh;
  p {
    margin-bottom: 5vh;
  }
`;

export const SeatFree = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #dedede;
  border-radius: 5px;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #898989;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

export const SeatReserved = styled(SeatFree)`
  background-color: #dedede;
`;

export const SeatRow = styled(Flex)``;

export const AreaTitle = styled(Flex)`
  margin-bottom: 4vh;
`;

export const BuySection = styled.div`
  text-align: center;
  margin: 4vh 0 6vh 0;
  button {
    margin-bottom: 5vh;
  }
`;
