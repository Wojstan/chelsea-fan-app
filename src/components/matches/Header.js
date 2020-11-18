import React from 'react'

import Menu from "../layout/Menu"

export default function Header({ home, away, type }) {
  return (
    <header className="matches-header">
      <Menu color="white" />
      <div className="header-info container">
        <span>
          <p>LAST MATCH:</p>
          <h4>{home} - {away}</h4>
          <button className="white">Match Centre</button>
        </span>
        <h1>{type}</h1>
      </div>
    </header>
  )
}
