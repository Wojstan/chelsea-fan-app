import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/logo.png";

export default function Menu() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link className="nav-link" to="/match">
            last match
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/players">
            players
          </Link>
        </li>
      </ul>
    </nav>
  );
}
