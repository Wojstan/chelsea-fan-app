import React from "react";

export default function Lineup({ lineup }) {
  return (
    <div>
      <h2>Lineup</h2>
      <ul>
        {lineup.map((row) => (
          <li key={row.number}>
            <h4>{row.number}</h4>
            <h3>{row.last}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
