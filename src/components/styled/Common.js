import styled from "styled-components";

export const Block = styled.div`
  background-color: white;
  padding: 2vh;
  box-shadow: 0 2px 4px 0 rgba(185, 185, 185, 0.2),
    0 3px 10px 0 rgba(206, 206, 206, 0.19);
`;

export const MatchBlock = styled(Block)`
  margin-bottom: 4vh;
`;

export const CentreBlock = styled(Block)`
  margin-bottom: 3vh;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.horizontal};
  justify-content: ${(props) => props.vertical};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

export const Separator = styled.div`
  background-color: #d9d9d9;
  width: ${(props) => props.width};
  height: 1px;
  margin: ${props => (props.center ? "2vh auto 2vh auto" : "2vh 0 2vh 0")} ;
`

export const WhiteSeparator = styled(Separator)`
background-color: white;
  height: 2px;
`