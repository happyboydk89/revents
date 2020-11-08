import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './../components/home'
import About from './../components/about'
import Contact from './../components/contact'

class routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    );
  }
}

export default routes;