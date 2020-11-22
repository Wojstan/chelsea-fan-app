import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid;
  background-color: transparent;
  min-width: 25vh;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;

export const WhiteButton = styled(Button)`
  border-color: white;
  color: white;

  &:hover {
    background-color: white;
    color: #001489;
    transition: 0.5s;
  }
`;

export const BlueButton = styled(Button)`
  border-color: #001489;
  color: #001489;
  &:hover {
    background-color: #001489;
    color: white;
    transition: 0.5s;
  }
`;

export const SmWhiteButton = styled(WhiteButton)`
  padding: 0.7rem;
  min-width: 18vh;
  font-size: 1rem;
`;

export const BallButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  img {
    width: 100%;
    height: 100%;
  }
  &:focus {
    outline: none;
  }
`;
