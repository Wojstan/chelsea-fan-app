import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Counter({ nextMatch, home, away }) {
  const [now, setNow] = useState(new Date().getTime());
  const [distance, setDistance] = useState(nextMatch - now);

  const [time, setTime] = useState({
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  });

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setNow(new Date().getTime());

    setDistance(nextMatch - now);

    setTime({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  }

  return (
    <div className="counter-block">
      {home === "Chelsea FC" && (
        <p>
          Till the next game with <strong>{away}</strong>
        </p>
      )}
      {away === "Chelsea FC" && (
        <p>
          Till the next game with <strong>{home}</strong>
        </p>
      )}
      <div className="separator"></div>
      <div className="timer">
        <h1>{time.days} d</h1>
        <span></span>
        <h1>{time.hours} h</h1>
        <span></span>
        <h1>{time.minutes} m</h1>
        <span></span>
        <h1 className="seconds">{time.seconds} s</h1>
      </div>

      <Link to="/matches">
        <button className="blue">See Fixture</button>
      </Link>
    </div>
  );
}
