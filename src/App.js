import React from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route  exact path="/" component={Home}>
          {/* <Home /> */}
          </Route>
          <Route path="/user1">
          </Route>
          <Route path="/user2">
          </Route>
          <Route path="/user3">
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;


// 