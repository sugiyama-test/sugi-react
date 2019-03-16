import React, { Component , Fragment } from 'react';
import {ButtonToolbar}  from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Top from './Top';
import Production from './Production';
import Profile from './Profile';
import Skill from './Skill';
import './style.css';
import Stopwatch from './Hobby';
import FaceBook from './FaceBook';
import GenelalButton from './GeneralButton';
import Clock from './Clock';

export default class App extends Component {

  styles() {
    return {


      footer: {
        width:"100%",
        height:"200px",
      }
    };
  }

  render() {

    const styles = this.styles();
    return (
      <Router>
        <Fragment>

          <div>
            <div className="header">
              <div className="info">
                <div className="text-center cover-text">sugiyama portfolio</div>
              </div>
              <div className="text-center">
                <ButtonToolbar>
                  <Link className="logo" to="/Top"><GenelalButton icon="fas fa-dove" title="Top"/></Link>
                  <Link className="logo" to="/Production"><GenelalButton icon="fas fa-code" title="production"/></Link>
                  <Link className="logo" to="/hobby"><GenelalButton icon="fas fa-gamepad" title="hobby"/></Link>
                  <Link className="logo" to="/skill"><GenelalButton icon="fas fa-desktop" title="skill"/></Link>
                  <Link className="logo" to="/profile"><GenelalButton icon="fas fa-user" title="profile"/></Link>
                </ButtonToolbar>
              </div>
            </div>

            <div className="row width100">
              <Switch>
                <Route exact path="/Top" component={Top} />
                <Route path="/Production" component={Production} />
                <Route path="/profile" component={Profile} />
                <Route path="/skill" component={Skill} />
                <Route path="/hobby" component={Stopwatch} />
              </Switch>
            </div>


            <div className="footer" style={styles.footer}>
                <div className="info">
                  <FaceBook/>
                  <Clock/>
                </div>
            </div>
          </div>


        </Fragment>
      </Router>
    );
  }
}
