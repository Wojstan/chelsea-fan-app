import styled from "styled-components";
import centreBg from "../../static/img/centreView.png";
import { CentreBlock, Flex, Block } from "./Common";

export const StyledCentre = styled.section`
  background-color: #efefef;
  padding-top: 3vh;
`;

export const Header = styled.header`
  background-image: url(${centreBg});
  background-position: center;
  background-size: cover;
  height: 42vh;
`;

export const ResultRow = styled(Flex)`
  margin-top: 3vh;
`;

export const GoalsList = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1vh;
  }
`;

export const LineupBlock = styled(CentreBlock)`
  background-color: #182dab;
  height: 76vh;
  position: relative;
`;

export const TeamBlock = styled(CentreBlock)`
  height: 76vh;
  padding: 0;
  h3 {
    padding: 2vh;
    padding-bottom: 1vh;
  }
`;

export const TeamList = styled.ul`
  overflow-y: auto;
  height: 68.8vh;
  list-style: none;
  padding: 2vh 4vh 0vh 4vh;
`;

export const PositionList = styled.ul`
  list-style: none;
  li:last-child {
    margin-bottom: 4vh;
  }
`;

export const TeamNumber = styled.h5`
  font-family: "Arvo", sans-serif;
  color: #001489;
  font-size: 1.2rem;
  width: 5vh;
`;

export const PositionName = styled.h4`
  color: #242424;
  font-family: "Montserrat", sans-serif;
  margin-left: 5vh;
  margin-bottom: 2vh;
`;

export const StyledPlayer = styled.li`
  margin-bottom: 1vh;

  &:hover {
    cursor: pointer;
    p,
    strong {
      color: #001489;
    }
  }
`;

export const ScorersBlock = styled(CentreBlock)`
  height: 41vh;
`;

export const LineupList = styled.ul`
  list-style: none;
  padding-left: 3vh;
  padding-top: 2vh;
  li {
    margin-bottom: 0.5vh;
    div {
      z-index: 1;
    }
  }
`;

export const PlayerLineup = styled(Flex)`
  &:hover {
    cursor: pointer;
    h4,
    h3 {
      color: #d1d1d1;
    }
  }
`;
export const ScoreBall = styled.div`
  width: 40px;
  margin-right: 1vh;
  img {
    width: 100%;
  }
`;

export const LineupName = styled.h3`
  color: ${(props) => (props.dark ? "#242424" : "white")};
  z-index: 3;
  font-size: 2.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

export const LineupNumber = styled.h3`
  font-family: "Arvo", sans-serif;
  font-size: 2.2rem;
  width: 7vh;
  color: white;
`;

export const Lion = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 37vh;
  img {
    height: 100%;
  }
`;

export const StyledRatings = styled.section`
  padding-top: 3vh;
  padding-bottom: 5vh;
  background-color: #efefef;
  text-align: center;

  button {
    margin-top: 5vh;
  }
`;

export const RatingBlock = styled(Block)`
  padding: 0;
  margin-bottom: 3vh;
  display: flex;
`;

export const RatingCrest = styled.div`
  height: 240px;
  padding-top: 2vh;
  img {
    height: 100%;
  }
`;

export const RatingInfo = styled(Flex)`
  padding: 2vh;
  flex-direction: column;
  width: 100%;
`;
