import React from "react";

export default function MatchBlock({
  home,
  guest,
  time,
  title,
  type,
  scoreHome,
  scoreGuest,
  logoHome,
  logoGuest,
}) {
  return (
    <div className="match-block">
      <header>
        <div>
          {home === "Chelsea FC" && (
            <h3>
              <strong>{home}</strong> - {guest}
            </h3>
          )}
          {guest === "Chelsea FC" && (
            <h3>
              {home} - <strong>{guest}</strong>
            </h3>
          )}

          <div className="match-sm-data">
            {home === "Chelsea FC" && (
              <p>
                <strong>HOME</strong>
              </p>
            )}
            {guest === "Chelsea FC" && (
              <p>
                <strong>AWAY</strong>
              </p>
            )}

            <p>{time.toLocaleString()}</p>
          </div>
        </div>
        <h2>{title}</h2>
      </header>
      <main>
        <div className="logoImg">
          <img src={logoHome} alt="" />
        </div>
        <h5>
          {scoreHome} - {scoreGuest}
        </h5>
        <div className="logoImg">
          <img src={logoGuest} alt="" />
        </div>
      </main>
      <footer>
        <img src={type} alt="" />
      </footer>
    </div>
  );
}
