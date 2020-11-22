import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;

  &:hover {
    color: #dbdbdb;
    text-decoration: none;
  }
`;

export const NavList = styled.ul`
  padding-top: 2vh;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.li`
  min-width: 18vh;
  display: flex;
  justify-content: center;
`;

export const NavBrand = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;
