import { all, fork } from 'redux-saga/effects';
import { exercisesSagas } from './exercises';
import { exercisesCategoriesSagas } from './exercise-categories';

export function* entitiesSagas() {
  yield all([
    fork(exercisesSagas),
    fork(exercisesCategoriesSagas)
  ]);
}
