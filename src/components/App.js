import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "../styles/main.css";

import Home from "./Home";
import Matches from "./Matches";
import Tickets from "./Tickets";
import store from "../store";
import MatchCentre from "./MatchCentre";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/matches/:id" component={MatchCentre} />
          <Route exact path="/tickets" component={Tickets} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
