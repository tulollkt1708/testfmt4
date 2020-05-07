import React from "react";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Download from "./components/Download";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/edit/:fileID">
          <Edit />
        </Route>
        <Route path="/download/:fileID">
          <Download />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
