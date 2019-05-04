import * as actionsCreators from './actionsCreators';
import { getType, ActionType } from 'typesafe-actions';
import { IUserData } from '../../../services/api/auth-api';

export interface IFeatureAuthState {
  user: IUserData | null;
}

const initialState = {
  user: null
};


export type AuthAction = ActionType<typeof actionsCreators>;

export const authReducer = (
  state: IFeatureAuthState = initialState,
  action: AuthAction
): IFeatureAuthState => {
  switch (action.type) {
    case getType(actionsCreators.setUserData): {
      return {
        ...state,
        user: { ...action.payload.userData }
      }
    }

    default:
      return state;
  }
};
