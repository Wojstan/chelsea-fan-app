import styled from "styled-components";

import headerBg from "../../static/img/stamfordView.png";
import statisticBg from "../../static/img/playersView.png";

import { Block, Flex } from "./Common";
import { BigTitle } from "./Titles";

export const Header = styled.header`
  background-image: url(${headerBg});
  background-position: center;
  background-size: cover;
  height: 92vh;
`;

export const AboutInfo = styled.article`
  width: 60%;
  margin: 7vh auto 7vh auto;
  text-align: center;

  @media (max-width: 992px) {
    padding: 2vh;
    width: 100%;
  }
`;

export const MainInfo = styled(AboutInfo)`
  margin-top: 18vh;
  p {
    margin-bottom: 5vh;
  }
  button {
    margin: 1vh;
  }
  @media (max-width: 660px) {
    margin-top: 8vh;
  }
`;

export const Matches = styled.section`
  padding-top: 4vh;
  background: #efefef;
`;

export const MatchResult = styled(Flex)`
  height: 25vh;
`;

export const Crest = styled.img`
  height: 100%;
`;

export const CrestPlace = styled.div`
  height: 90px;
  margin-right: ${props => (props.mr ? "2vh" : "0")};
`;

export const Statistics = styled.section`
  background-image: url(${statisticBg});
  background-position: center;
  background-size: cover;
  height: 92vh;
  padding: 4vh;
  @media (max-width: 992px) {
    padding: 2vh;
  }
`;

export const TableContainer = styled(Block)`
  width: 50%;
  height: 100%;
  @media (max-width: 992px) {
    margin: 0;
    width: 100%;
  }
`;

export const StyledCounter = styled.section`
  margin: 7vh auto 7vh auto;
  background-color: white;
  text-align: center;
  width: 70%;
`;

export const Timer = styled(Flex)`
  span {
    width: 3vh;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TimeNumber = styled(BigTitle)`
  font-size: 5rem;
  color: #001489;
  margin-bottom: 5vh;
`;

export const SecondNumber = styled(TimeNumber)`
  min-width: 15vh;
`;

export const CompetitionLogo = styled(Flex)`
  height: 100px;
  img{
    height: 100%;
  }
`