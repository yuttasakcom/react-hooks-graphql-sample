import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import PageNotFound from "./components/PageNotFound";

const Root = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signout" component={Signout} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
