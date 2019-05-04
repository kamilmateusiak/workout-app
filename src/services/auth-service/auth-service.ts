import decode from 'jwt-decode';
import memoizeOne from 'memoize-one';
import { UserRole } from '../api/auth-api';

const USER_TOKEN_KEY = 'user_token';

export interface ITokenEncodedData {
  username: string;
  role: UserRole;
  exp: number;
}

export default class AuthService {
  isLoggedIn = (): boolean => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired();
  };

  isTokenExpired = (): boolean => {
    try {
      const tokenData = this.getTokenEncodedData();

      if (tokenData === null || tokenData.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (err) {
      console.log("expired check failed! Line 42: auth-service.js");
      return false;
    }
  };

  setToken = (token: string): void => {
    localStorage.setItem(USER_TOKEN_KEY, token);
  };

  getToken = (): string | null => {
    return localStorage.getItem(USER_TOKEN_KEY);
  };

  removeToken = () => {
    localStorage.removeItem(USER_TOKEN_KEY);
  };

  getTokenEncodedData = (): ITokenEncodedData | null => {
    const token = this.getToken();
    if (token === null) {
      return null;
    }
    let decodedData = decode(token) as ITokenEncodedData;
    return decodedData;
  };
}

