import React, { Component } from 'react';

import './App.css';
import Frame from './frame/frame.js';
import Home from './pages/home/home.js';
import Instruments from './pages/instruments/instruments.js';
import Musicians from './pages/musicians/musicians.js';
import loginsignup from './pages/loginsignup/loginsignup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from './components/Card/card.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame>
          <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/loginsignup" component={loginsignup} />
                <Route exact path="/instruments" component={Instruments} />
                <Route exact path="/musicians" component={Musicians} />
      </div>
            </Router>
        </Frame>
      </div>
    );
  }
}

export default App;