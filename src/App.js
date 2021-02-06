import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import Store from "./services/store";
import HomePage from "./pages/homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} /> // invalid url redirect
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <Store>
      <HomePage />
    </Store>
  );
}
