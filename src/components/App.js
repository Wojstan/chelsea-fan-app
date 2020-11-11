import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "../static/main.css";

import Home from "./Home";
import Match from "./Match";
import Players from "./Players";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match" component={Match} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
