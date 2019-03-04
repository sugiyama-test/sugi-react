import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Top from './Top';
import Activities from './Activities';
import Profile from './Profile';
import Hobby from './Hobby';
import Skill from './Skill';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>

          <div className="header d-flex flex-column flex-md-row align-items-center sticky-top p-3 px-md-4 mb-3">
            <h5 className="my-0 mr-md-auto font-weight-normal">杉山　ポートフォリオ</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 trans-green" to="/my-portfolio">Top</Link>
              <Link className="p-2 trans-red" to="/activities">Activities</Link>
              <Link className="p-2 trans-yellow" to="/profile">Profile</Link>
              <Link className="p-2 trans-lightblue" to="/skill">Skill</Link>
              <Link className="p-2 trans-blue" to="/hobby">Hobby</Link>
              <Link className="p-2 trans-purple" to="/contact">Contact</Link>
            </nav>
          </div>

          <Container>
            <div className="row">

              <Switch>
                <Route exact path="/my-portfolio" component={Top} />
                <Route path="/activities" component={Activities} />
                <Route path="/profile" component={Profile} />
                <Route path="/skill" component={Skill} />
                <Route path="/hobby" component={Hobby} />
                <Route path="/contact" component={Contact} />
              </Switch>

            </div>
          </Container>

        </React.Fragment>
      </Router>
    );
  }
}
