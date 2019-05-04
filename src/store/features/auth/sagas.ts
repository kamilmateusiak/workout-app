import { all, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actions from './actions';
import AuthApi, { ILoginResponse } from '../../../services/api/auth-api/auth-api';
import { ILoginRequestBody } from '../../../services/api/auth-api';
import AuthService from '../../../services/auth-service/auth-service';

export function* login(action: {type: any, payload: { data: ILoginRequestBody, onSuccess: () => void}}): SagaIterator {
  console.log('sagas', action.payload)
  const api = AuthApi.instance;
  if (!action.payload || !action.payload.data) {
    return;
  }
  const { data, onSuccess } = action.payload;

  const loginResponse: ILoginResponse = yield call(api.login.bind(api), data);

  if (loginResponse.result) {
    const { token } = loginResponse.result;
    console.log('saga', loginResponse.result);
    const authService = new AuthService();

    authService.setToken(token);
    onSuccess();
  }
}

export default function* authSagas(): SagaIterator {
  yield all([
    takeEvery(actions.LOGIN, login)
  ]);
}
