import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import "./App.scss";
import Store from "./services/store";
import HomePage from "./pages/homepage";

export default function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </Switch>
    </Router>
  );
}


function Home(){
  return (
      <Store>
         <HomePage />
      </Store>
  )
}