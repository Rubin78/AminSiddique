import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Second from './components/Second';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/second" component={Second} />

          <Route exact path="/First" component={First} />

          <Route render={() => <h2>welcome to portfolio </h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
