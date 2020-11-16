import React from "react";
import { Link } from "react-router-dom";

export default function Match({
  id,
  competition,
  home,
  away,
  homeScore,
  awayScore,
  date,
  homeLogo,
  awayLogo,
}) {
  return (
    <Link className="no-underline" to={`/matches/${id}`}>
      <li>
        <header>
          <h5>{date.toLocaleString()}</h5>
          <p>HOME</p>
        </header>

        <div className="match-info">
          <p className="competition">{competition}</p>
          <div className="main">
            <h4 className="toright">{home}</h4>
            <div className="img">
              <img src={homeLogo} alt="" />
            </div>

            <h3>
              {homeScore} - {awayScore}
            </h3>

            <div className="img">
              <img src={awayLogo} alt="" />
            </div>

            <h4 className="toleft">{away}</h4>
          </div>
          <p className="center">Match centre {">"}</p>
        </div>
      </li>
    </Link>
  );
}
