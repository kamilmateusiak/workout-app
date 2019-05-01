import { all, fork } from 'redux-saga/effects';
import { exercisesSagas } from './exercises';

export function* viewsSagas() {
  yield all([
    fork(exercisesSagas)
  ]);
}
