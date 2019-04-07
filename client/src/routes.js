import React, { useContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import PageNotFound from "./components/PageNotFound";
import Blog from "./components/Blog";

import ProtectedRoute from "./ProtectedRoute";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Context from "./context";
import reducer from "./reducer";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export default () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <ApolloProvider client={client}>
        <Context.Provider value={{ state, dispatch }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/blog" component={Blog} />
            <Route path="/signin" component={Signin} />
            <Route path="/signout" component={Signout} />
            <Route component={PageNotFound} />
          </Switch>
        </Context.Provider>
      </ApolloProvider>
    </Router>
  );
};
