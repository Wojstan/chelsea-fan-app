import React from "react";

export default function MatchForms({ formsData, setFormsData }) {

  const onChange = (e) => {
    setFormsData({ ...formsData, [e.target.name]: e.target.value });
  };

  return (
    <div className="settings">
      <h3>FILTERS</h3>
      <form action="" autoComplete="off">
        <div className="form-group">
          <label htmlFor="matches-type">Type</label>
          <select
            onChange={onChange}
            value={formsData.type}
            id="matches-type"
            name="type"
          >
            <option value="RESULTS">RESULTS</option>
            <option value="FIXTURE">FIXTURE</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="competition">Competition</label>
          <select
            onChange={onChange}
            value={formsData.competition}
            id="competition"
            name="competition"
          >
            <option value="">ALL</option>
            <option value="Premier League">PREMIER LEAGUE</option>
            <option value="UEFA Champions League">CHAMPIONS LEAGUE</option>
          </select>
        </div>
        <div className="form-group">
          <label value={formsData.search} htmlFor="search">
            Search
          </label>
          <input placeholder="By club name..." onChange={onChange} id="search" name="search" />
        </div>
      </form>
    </div>
  );
}
