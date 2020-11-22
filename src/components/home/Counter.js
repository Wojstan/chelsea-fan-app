import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledParagraph, Important } from "../styled/Titles";
import { Timer, TimeNumber, SecondNumber } from "../styled/HomeStyled"
import { BlueButton } from "../styled/Button"
import { Separator } from "../styled/Common";

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
    <div>
      {home === "Chelsea FC" && (
        <StyledParagraph center>
          Till the next game with <strong>{away}</strong>
        </StyledParagraph>
      )}
      {away === "Chelsea FC" && (
        <StyledParagraph center>
          Till the next game with <Important dark>{home}</Important>
        </StyledParagraph>
      )}
      <Separator center width="40%" />
      <Timer vertical="center" horizontal="center">
        <TimeNumber>{time.days} d</TimeNumber>
        <span></span>
        <TimeNumber>{time.hours} h</TimeNumber>
        <span></span>
        <TimeNumber>{time.minutes} m</TimeNumber>
        <span></span>
        <SecondNumber>{time.seconds} s</SecondNumber>
      </Timer>

      <Link to="/matches">
        <BlueButton>FIXTURE</BlueButton>
      </Link>
    </div>
  );
}
