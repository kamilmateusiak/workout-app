import { IFeatureAuthState } from "./reducer";
import { IUserData } from "../../../services/api/auth-api";

export interface IWithFeatureAuthState {
  features: {
    auth: IFeatureAuthState;
  }
}

export function getUser(state: IWithFeatureAuthState): IUserData | null {
  return state.features.auth.user;
}

export function isLoggedIn(state: IWithFeatureAuthState): boolean {
  return Boolean(state.features.auth.user);
}
