import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  BuyTickets as StyledBuyTickets,
  AreaTitle,
  BuySection,
} from "../styled/StyledTickets";
import { Important, MidTitle, StyledParagraph } from "../styled/Titles";
import PayPal from "./PayPal";
import { BlueButton } from "../styled/Button";
import StadiumArena from "./StadiumArena";
import { getArena } from "../../actions/arena";

export const BuyTickets = ({ getArena,
  stadium }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selected, setSelected] = useState([]);
  const [matchData, setMatchData] = useState({
    id: 0,
    homeTeam: { id: 66, name: "Chelsea FC" },
    awayTeam: { id: 66, name: "" },
    score: { fullTime: { homeTeam: 0, awayTeam: 0 } },
    competition: { name: "" },
    venue: "",
    utcDate: "",
  });

  useEffect(() => {
    fetch(
      "https://api.football-data.org/v2/teams/61/matches?status=SCHEDULED",
      {
        method: "GET",
        headers: { "X-Auth-Token": "452a01d58d644408bb47bf5abfdbf109" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const homeMatches = data.matches.filter(
          (match) => match.homeTeam.id === 61
        );
        setMatchData(homeMatches[0]);
      });
  }, []);


  useEffect(() => {
    if (matchData.id !== 0) {
      getArena(matchData.id);
    }
  }, [matchData.id, getArena]);

  return (
    <StyledBuyTickets>
      <MidTitle>
        <Important dark>NEXT MATCH</Important>
      </MidTitle>
      <StyledParagraph mb color="#898989">
        <Important>{matchData.homeTeam.name}</Important> -{" "}
        <Important dark>{matchData.awayTeam.name}</Important>{" "}
        {new Date(matchData.utcDate).toLocaleString()}
      </StyledParagraph>

      <AreaTitle vertical="space-between" horizontal="center">
        <MidTitle>
          <Important dark>AREA A</Important>
        </MidTitle>
        <MidTitle color="#001489">{selected.length * 5}$</MidTitle>
      </AreaTitle>

      <StadiumArena
        arena={stadium.arena}
        selected={selected}
        setSelected={setSelected}
        setShowPayment={setShowPayment}
      />

      <BuySection>
        <BlueButton
          onClick={() =>
            setShowPayment(selected.length > 0 ? !showPayment : showPayment)
          }
        >
          Buy Now
        </BlueButton>
        {showPayment === true && <PayPal arena={stadium.arena} selected={selected} payment={selected.length * 5} />}
      </BuySection>
    </StyledBuyTickets>
  );
}


BuyTickets.propTypes = {
  getArena: PropTypes.func.isRequired,
  stadium: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  stadium: state.arena.stadium,
});

export default connect(mapStateToProps, { getArena })(BuyTickets);
