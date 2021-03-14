import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Start from "./Pages/Start";
import Start2 from "./Pages/Start2";
import Sign from "./Pages/Sign";
import Login from "./Pages/Login";
import Dash from "./Pages/Dash";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/start" exact render={() => <Start />} />
        <Route path="/signup" exact render={() => <Sign />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/dash" exact render={() => <Dash />} />
        <Route path="/start2" exact render={() => <Start2 />} />
      </Switch>
    </Router>
  );
}

export default App;
