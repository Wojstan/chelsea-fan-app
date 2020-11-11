import React from "react";
import Important from "./Important";

export default function Stats() {
  return (
    <div className="important-numbers">
      <h2>Players By Numbers</h2>
      <div className="separator-sm"></div>
      <ul>
        <li>
          <Important player="WERNER" number={8} title="most goals" />
        </li>
        <li>
          <Important player="ZIYECH" number={6} title="most assists" />
        </li>
        <li>
          <Important player="ZIYECH" number={3} title="most MVPs" />
        </li>
        <li>
          <Important player="HAVERTZ" number={13} title="most apps" />
        </li>
        <li>
          <Important player="JAMES" number={8.12} title="best rating" />
        </li>
      </ul>
    </div>
  );
}
