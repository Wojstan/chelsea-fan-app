import React, { useEffect, useState } from "react";

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
    <div className="table-container">
      <h2>PREMIER LEAGUE 2020/21</h2>
      <table>
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
                {row.team.name === "Chelsea FC" && <p>{row.position}</p>}
                {row.team.name !== "Chelsea FC" && row.position}
              </td>
              <td className="team">
                <div className="img-table">
                  <img src={row.team.crestUrl} alt="" />
                </div>
                {row.team.name === "Chelsea FC" && <p>{row.team.name}</p>}
                {row.team.name !== "Chelsea FC" && row.team.name}
              </td>
              <td>{row.playedGames}</td>
              <td>
                {row.goalsFor}:{row.goalsAgainst}
              </td>
              <td className="points">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
