import { createAction } from 'typesafe-actions';
import * as actions from './actions';
import { ILoginRequestBody, IUserData } from '../../../services/api/auth-api';

export const login = createAction(actions.LOGIN, action => {
  return (data: ILoginRequestBody, onSuccess: () => void) => action({ data, onSuccess });
})

export const setUserData = createAction(actions.SET_USER_DATA, action => {
  return (userData: IUserData) => action({ userData });
})
