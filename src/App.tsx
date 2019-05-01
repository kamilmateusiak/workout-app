/** @jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from "react-router-dom";
import { jsx, css } from '@emotion/core'
import 'antd/dist/antd.css';
import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';
import { Exercises } from './routes/Exercises';
import { Provider } from 'react-redux';
import { store } from './store';
import { Exercise, IExerciseRouteParams } from './routes/Exercise';

const appWrapper = css`
  display: flex;
  flex-wrap: nowrap;
`;

const contentWrapper = css`
  flex: 1;
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div css={appWrapper}>
            <Navigation />
            <div css={contentWrapper}>
              <Route exact path="/" component={Home} />
              <Route path="/exercises" component={Exercises} />
              <Route path="/exercise/:id" render={routeProps => <Exercise {...routeProps} />}/>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
