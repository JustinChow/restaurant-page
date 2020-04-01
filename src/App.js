import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/Navigation"
import Home from "./containers/Home"
import Menu from "./containers/Menu"
import Contact from "./containers/Contact"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
