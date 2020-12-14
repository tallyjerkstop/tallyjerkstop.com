import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Construction from './Construction'

//the router below reads the path that the user is on and throws a React component at it depending on the path.
const routing = (
  <Router>
    <Switch>
      <Route exact path="/*" component={Construction} />
    </Switch>
  </Router>
)

//the code below reads the path and renders component on a conditional basis. i.e. /home throws two different components at different places...
ReactDOM.render(routing, document.getElementById("root"));
