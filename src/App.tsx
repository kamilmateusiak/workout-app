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
import { Register } from './routes/Register';
import { Login } from './routes/Login';
import { ProtectedRoute } from './containers/Routes';
import { AuthProvider } from './containers/Auth';
import { BeforeAuthRoute } from './containers/Routes/BeforeAuthRoute';
import { Dashboard } from './routes/Dashboard';

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
          <AuthProvider>
            <div css={appWrapper}>
              <Navigation />
              <div css={contentWrapper}>
                <BeforeAuthRoute exact path="/" component={Home} />
                <BeforeAuthRoute path="/login" component={Login} />
                <BeforeAuthRoute path="/register" component={Register} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/exercises" component={Exercises} />
                <ProtectedRoute path="/exercise/:id" component={Exercise}/>
              </div>
            </div>
          </AuthProvider>
        </Provider>
      </Router>
    );
  }
}

export default App;
