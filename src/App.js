import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// ** components
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:query?" component={Home} />
          <Route exact path="/details/:name?" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
