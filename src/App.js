import React from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User1 from './components/User1';
import User2 from './components/User2';
import User3 from './components/User3';

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
          <Route path="/user1" component={User1}>
          </Route>
          <Route path="/user2" component={User2}>
          </Route>
          <Route path="/user3" component={User3}>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;


// 