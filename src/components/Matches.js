import React, { useEffect, useState } from "react";

import Header from "./matches/Header";
import MatchList from "./matches/MatchList";
import MatchForms from "./matches/MatchForms";

import { StyledMatches, ResultsFixture } from "./styled/StyledMatches"

export default function Matches() {
  const [matches, setMatches] = useState({
    results: [],
    fixture: [],
  });
  const [forms, setForms] = useState({
    search: "",
    type: "RESULTS",
    competition: "",
    amount: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://api.football-data.org/v2/teams/61/matches/", {
        method: "GET",
        headers: { "X-Auth-Token": "452a01d58d644408bb47bf5abfdbf109" },
      })
        .then((res) => res.json())
        .then((data) => {
          const finished = data.matches.filter(
            (row) => row.status === "FINISHED"
          );
          const scheudled = data.matches.filter(
            (row) => row.status === "SCHEDULED"
          );

          setMatches({
            results: finished.slice(0).reverse(),
            fixture: scheudled,
          });
        });
    };
    fetchData();
  }, []);

  return (
    <StyledMatches>
      {matches.results.length > 0 && (
        <Header
          type={forms.type}
          home={matches.results[0].homeTeam.name}
          away={matches.results[0].awayTeam.name}
        />
      )}
      <div className="container">
        <ResultsFixture>
          <div className="row">
            <div className="col-xl-9">
              <MatchList
                type={forms.type}
                data={
                  forms.type === "FIXTURE" ? matches.fixture : matches.results
                }
                competition={forms.competition}
                search={forms.search}
                amount={forms.amount}
              />
            </div>
            <div className="col-xl-3">
              <MatchForms formsData={forms} setFormsData={setForms} />
            </div>
          </div>
        </ResultsFixture>
      </div>
    </StyledMatches>
  );
}
