import * as React from 'react';
import { AuthContext, IAuthContextProps } from './AuthContext';
import { Subtract } from '../../interfaces';

export interface IWithAuthProps extends IAuthContextProps {};

export function withAuth<P extends IWithAuthProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<Subtract<P, IWithAuthProps>> {
  return class WrappedComponentWithAuth extends React.Component<Subtract<P, IWithAuthProps>> {
    render() {
      return (
        <AuthContext.Consumer>
          {({ isAuthenticated, onLogin, onLogout }) => (
            <WrappedComponent
              {...this.props as any}
              isAuthenticated={isAuthenticated}
              onLogin={onLogin}
              onLogout={onLogout}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}
