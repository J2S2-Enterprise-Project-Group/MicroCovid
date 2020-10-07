import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AppContainer } from './container/app-container/app-container';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <AppContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
