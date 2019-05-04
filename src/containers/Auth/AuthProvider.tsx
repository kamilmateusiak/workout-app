import * as React from 'react';
import { AuthContext, ILoginPayload } from './AuthContext';
import { connect, MapDispatchToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import decode from 'jwt-decode';
import memoizeOne from 'memoize-one';

import * as actionsCreators from '../../store/features/auth/actionsCreators';
import { IKeyMap } from '../../interfaces';
import AuthService from '../../services/auth-service/auth-service';

const USER_TOKEN_KEY = 'user_token';

interface IDispatchProps {
  onLogin: (payload: ILoginPayload) => void;
}

interface IProps extends IDispatchProps, RouteComponentProps {}

interface IState {
  isAuthenticated: boolean;
}

class AuthProviderContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.authService = new AuthService();

    this.state = {
      isAuthenticated: false
    };
  }

  authService: AuthService;

  handleLogin = (payload: ILoginPayload) => {
    const onLoginSuccess = () => {
      payload.onSuccess();
      this.props.history.replace('/dashboard');
    };
    this.props.onLogin({ ...payload, onSuccess: onLoginSuccess });
  };

  handleLogout = () => {
    localStorage.removeItem(USER_TOKEN_KEY);
    this.props.history.replace('/login')
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.authService.isLoggedIn(),
          userData: this.authService.getTokenEncodedData(),
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = dispatch => ({
  onLogin: ({ loginData, onSuccess, onError }) => {
    dispatch(actionsCreators.login(loginData, onSuccess));
  }
});

export const AuthProvider = connect(
  null,
  mapDispatchToProps
)(withRouter(AuthProviderContainer));
