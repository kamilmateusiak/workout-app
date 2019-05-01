import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { createAsyncAction } from 'typesafe-actions';
import { SagaIterator } from 'redux-saga';
import * as actions from './actions';
import * as actionsCreators from './actionsCreators';
import ExercisesApi from '../../../services/api/exercise-api/exercises-api';
import { deserializeAll } from '../../../services/api/exercise-api';
import { IKeyMap } from '../../../interfaces';

export function* fetchData(action: {type: any, payload: { params: actionsCreators.IFetchDataParams}}): SagaIterator {
  const api = ExercisesApi.instance;
  const params = action.payload ? (action.payload.params || {}) : {};

  const exercisesResponse = yield call(api.fetchAll.bind(api), {limit: 50, page: 1, ...params});

  if (exercisesResponse.result) {
    console.log('saga', exercisesResponse.result)
    const data = deserializeAll(exercisesResponse.result.results);

    yield put(
      actionsCreators.setData(data)
    );
  }
}

export default function* exercisesSagas(): SagaIterator {
  yield all([
    takeEvery(actions.FETCH_DATA, fetchData)
  ]);
}
