import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actions from './actions';
import * as exercisesEntityActionsCreatores from '../../entities/exercises/actionsCreators'
import { getFilters } from './selectors';
import { IExerciesFilters } from './reducer';

export function* updateFilters() {
  const filters: IExerciesFilters = yield select(getFilters);

  yield put(
    exercisesEntityActionsCreatores.fetchData(filters)
  );
}

export default function* exercisesSagas(): SagaIterator {
  yield all([
    takeEvery(actions.UPDATE_FILTERS, updateFilters)
  ]);
}
