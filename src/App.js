import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes'
import './App.css';
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <p>I will be the sign-in page.</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
