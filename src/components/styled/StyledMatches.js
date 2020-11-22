import { Link } from "react-router-dom";
import { Block, Flex } from "../styled/Common";
import styled from "styled-components";
import matchesBg from "../../static/img/matchesView.png";
import { MidTitle, ScoreLabel, StyledParagraph } from "./Titles";

export const StyledMatches = styled.main`
background-color: #efefef;
`
export const ResultsFixture = styled.section`
  padding-top: 4vh;
`
export const Header = styled.header`
  background-image: url(${matchesBg});
  background-position: center;
  background-size: cover;

  button {
    margin: 2vh 0 4vh 0;
  }
`;

export const HeaderInfo = styled.div`
  padding-top: 4vh;
`;

export const StyledMatchList = styled.ul`
  list-style: none;
`;

export const MatchElement = styled.li`
  margin-bottom: 4vh;
`;

export const MatchInfo = styled(Flex)`
  padding: 1vh 3vh 1vh 3vh;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(185, 185, 185, 0.2),
    0 3px 10px 0 rgba(206, 206, 206, 0.19);
`;

export const StyledCompetition = styled(StyledParagraph)`
  width: 20%;
`;

export const MainScore = styled(Flex)`
  width: 60%;
`;

export const ScoreCrest = styled.div`
  height: 50px;
  img {
    height: 100%;
  }
`;
export const ScoreResult = styled(ScoreLabel)`
  width: 10%;
  font-size: 1.4rem;
  margin: 0 0.5vh 0 0.5vh;
  padding: 0;
  text-align: center;
`;

export const TeamName = styled(MidTitle)`
  font-size: 1.2rem;
  width: 35%;
  text-align: ${(props) => (props.right ? "right" : "start")};
  margin: 0;
`;

export const StyledCentre = styled(StyledParagraph)`
  width: 20%;
  text-align: right;
`;

export const MatchLink = styled(Link)`
  &:hover {
    text-decoration: none;
    strong {
      text-decoration: underline;
    }
  }
`;
