import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Sign from "./Pages/Sign";
import Login from "./Pages/Login";
import Summary from "./Components/Summary";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home />} />

        <Route path="/summary" exact render={() => <Summary />} />
        <Route path="/signup" exact render={() => <Sign />} />
        <Route path="/login" exact render={() => <Login />} />
    
      </Switch>
    </Router>
  );
}

export default App;
