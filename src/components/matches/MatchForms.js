import React from "react";
import { Block } from "../styled/Common";

import { Label, Select, Input } from "../styled/Forms"
import { LargeTitle } from "../styled/Titles";

export default function MatchForms({ formsData, setFormsData }) {
  const onChange = (e) => {
    setFormsData({ ...formsData, [e.target.name]: e.target.value });
  };

  return (
    <Block>
      <LargeTitle blue start>FILTERS</LargeTitle>
      <form action="" autoComplete="off">
        <div>
          <Label htmlFor="matches-type">Type</Label>
          <Select
            onChange={onChange}
            value={formsData.type}
            id="matches-type"
            name="type"
          >
            <option value="RESULTS">RESULTS</option>
            <option value="FIXTURE">FIXTURE</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="competition">Competition</Label>
          <Select
            onChange={onChange}
            value={formsData.competition}
            id="competition"
            name="competition"
          >
            <option value="">ALL</option>
            <option value="Premier League">PREMIER LEAGUE</option>
            <option value="UEFA Champions League">CHAMPIONS LEAGUE</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="amount">Show</Label>
          <Select
            onChange={onChange}
            value={formsData.amount}
            id="amount"
            name="amount"
          >
            <option value={10}>10 MATCHES</option>
            <option value={20}>20 MATCHES</option>
            <option value={100}>ALL MATCHES</option>
          </Select>
        </div>
        <div>
          <Label value={formsData.search} htmlFor="search">
            Search
          </Label>
          <Input
            placeholder="By club name..."
            onChange={onChange}
            id="search"
            name="search"
          />
        </div>
      </form>
    </Block>
  );
}
