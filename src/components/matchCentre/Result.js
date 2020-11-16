import React from "react";

export default function Result({
  homeLogo,
  awayLogo,
  home,
  away,
  homeScore,
  awayScore,
}) {
  return (
    <div>
      <h2>Match result</h2>
      <div className="team-row">
        <span>
          <div className="img-result">
            <img src={homeLogo} alt="" />
          </div>
          <p>{home}</p>
        </span>
        <h5>{homeScore}</h5>
      </div>
      <div className="team-row">
        <span>
          <div className="img-result">
            <img src={awayLogo} alt="" />
          </div>
          <p>{away}</p>
        </span>
        <h5>{awayScore}</h5>
      </div>
    </div>
  );
}
