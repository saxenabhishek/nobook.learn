import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Sign from "./Pages/Sign";


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/signup" exact render={() => <Sign />} />

      </Switch>
    </Router>
  );
}

export default App;
