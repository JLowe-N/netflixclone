import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

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
          <p>I am going to be the cloned Netflix App.</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
