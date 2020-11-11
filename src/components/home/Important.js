import React from "react";

export default function Important({ player, number, title }) {
  return (
    <div className="important-block">
      <div className="main">
        <h2>
          <strong>{number}</strong>
        </h2>
        <h2>{player}</h2>
      </div>

      <div className="separator"></div>
      <p>{title}</p>
    </div>
  );
}
