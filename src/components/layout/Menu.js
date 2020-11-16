import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/logo.png";

export default function Menu({ color }) {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link className={`nav-link ${color}`} to="/matches">
            MATCHES
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${color}`} to="/">
            <div className="img-menu">
              <img src={logo} alt="" />
            </div>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${color}`} to="/players">
            PLAYERS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
