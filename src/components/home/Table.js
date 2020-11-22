import React, { useEffect, useState } from "react";

import { TableContainer } from "../styled/HomeStyled";
import {
  StyledTable,
  TableParagraph,
  TablePoints,
  TableTeam,
} from "../styled/StyledTable";
import { Important, MidTitle } from "../styled/Titles";
export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://api.football-data.org/v2/competitions/PL/standings", {
        method: "GET",
        headers: { "X-Auth-Token": "452a01d58d644408bb47bf5abfdbf109" },
      })
        .then((res) => res.json())
        .then((json) =>
          setData(json.standings[0].table.filter((row) => row.position <= 10))
        );
    };
    fetchData();
  }, []);

  return (
    <TableContainer>
      <MidTitle color="#001489" mb="4vh">
        PREMIER LEAGUE 2020/21
      </MidTitle>
      <StyledTable>
        <thead>
          <tr>
            <th>POS.</th>
            <th>TEAM</th>
            <th>M</th>
            <th>B</th>
            <th>P</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.position}>
              <td>
                {row.team.name === "Chelsea FC" && (
                  <TableParagraph>
                    <Important>{row.position}</Important>
                  </TableParagraph>
                )}
                {row.team.name !== "Chelsea FC" && (
                  <TableParagraph>{row.position}</TableParagraph>
                )}
              </td>
              <td>
                <TableTeam horizontal="center">
                  <div className="img-table">
                    <img src={row.team.crestUrl} alt="" />
                  </div>
                  {row.team.name === "Chelsea FC" && (
                    <TableParagraph>
                      <Important>{row.team.name}</Important>
                    </TableParagraph>
                  )}
                  {row.team.name !== "Chelsea FC" && (
                    <TableParagraph>{row.team.name}</TableParagraph>
                  )}
                </TableTeam>
              </td>
              <td>
                <TableParagraph>{row.playedGames}</TableParagraph>
              </td>
              <td>
                <TableParagraph>
                  {row.goalsFor}:{row.goalsAgainst}
                </TableParagraph>
              </td>
              <td>
                <TablePoints>{row.points}</TablePoints>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
