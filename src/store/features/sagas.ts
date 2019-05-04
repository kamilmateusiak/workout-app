import { all, fork } from 'redux-saga/effects';
import { authSagas } from './auth';

export function* featuresSagas() {
  yield all([
    fork(authSagas)
  ]);
}
