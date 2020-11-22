import styled from "styled-components";

export const BigTitle = styled.h1`
  color: ${(props) => (props.blue ? "#001489" : "white")};
  font-size: 3.4rem;
  font-weight: 500;
  text-align: ${(props) => (props.start ? "start" : "center")};
  font-family: "Montserrat", sans-serif;
  margin-bottom: 3vh;
`;

export const LargeTitle = styled.h2`
  color: ${(props) => (props.blue ? "#001489" : "white")};
  font-size: 2.5rem;
  font-weight: 500;
  text-align: ${(props) => (props.start ? "start" : "center")};
  font-family: "Montserrat", sans-serif;
  margin-bottom: 3vh;
`;

export const PageTitle = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 1vh;
  margin-top: 4vh;
`;

export const MidTitle = styled.h3`
  color: ${(props) => props.color};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
`;

export const Important = styled.strong`
  color: ${(props) => (props.dark ? "#242424" : "#001489")};
  font-weight: 600;
  margin-right: ${(props) => props.mr};
`;

export const ScoreLabel = styled.h3`
  color: #242424;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  padding: ${props => (props.nopd ? "0" : "2rem")};
`;

export const StyledParagraph = styled.p`
  color: ${(props) => (props.dark ? "#242424" : "#898989")};
  color: ${(props) => (props.white ? "#efefef" : "#898989")};
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: ${(props) => (props.center ? "center" : "start")};
  margin-bottom: ${(props) => (props.mb ? "2vh" : "0vh")};
`;


