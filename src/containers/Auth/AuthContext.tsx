import * as React from 'react';
import { ITokenEncodedData } from '../../services/auth-service';

export interface ILoginPayload {
  loginData: { username: string; password: string };
  onSuccess: () => void;
  onError?: (error: string) => void;
}

export interface IAuthContextProps {
  isAuthenticated: boolean;
  userData: ITokenEncodedData | null;
  onLogin: (payload: ILoginPayload) => void;
  onLogout: () => void;
}

export const AuthContext = React.createContext<IAuthContextProps>({
  isAuthenticated: false,
  userData: null,
  onLogin: _payload => {},
  onLogout: () => {}
});
