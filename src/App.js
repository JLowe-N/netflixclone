import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <p>I will be the sign-in page.</p>
        </Route>
        <Route path='/signup'>
          <p>I will be the sign up page</p>
        </Route>
        <Route path='/browse'>
          <p>I will be the browse page</p>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
