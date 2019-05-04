import * as React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router';

import { withAuth, IWithAuthProps } from '../Auth';

interface IProps extends RouteProps, IWithAuthProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

const BeforeAuthRouteContainer: React.FC<IProps> = ({ component: Component, isAuthenticated, ...restProps }) => {
  return (
    <Route {...restProps} render={props => (
      !isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} /> 
    )} />
  );
}

export const BeforeAuthRoute = withAuth(BeforeAuthRouteContainer);
