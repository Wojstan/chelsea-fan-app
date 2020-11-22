import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/logo.png";

import { NavItem, NavLink, NavList, NavBrand } from "../styled/Nav";

export default function Menu() {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLink to="/matches">MATCHES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <NavBrand>
              <img src={logo} alt="" />
            </NavBrand>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/players">PLAYERS</NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
