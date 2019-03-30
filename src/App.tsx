/** @jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { jsx, css } from '@emotion/core'
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';

const appWrapper = css`
  display: flex;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div css={appWrapper}>
          <Navigation />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
