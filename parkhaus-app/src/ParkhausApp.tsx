import React from "react";
import Statistics from "./components//pages/Statistics";
import MainMenu from "./components/pages/MainMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";

const ParkhausApp = () => {
  return (
    <Router>
      <Route path="/" exact render={() => <MainMenu />} />
      <Route path="/statistik" exact render={() => <Statistics />}></Route>
    </Router>
  );
};

export default ParkhausApp;
