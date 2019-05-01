import { all, put, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actions from './actions';
import * as actionsCreators from './actionsCreators';
import { deserializeAll } from '../../../services/api/exercise-api';
import ExerciseCategoriesApi from '../../../services/api/exercise-category-api/exercise-category-api';

export function* fetchData(): SagaIterator {
  const api = ExerciseCategoriesApi.instance;

  const exerciseCategoriesResponse = yield call(api.fetchAll.bind(api));

  if (exerciseCategoriesResponse.result) {
    console.log('saga', exerciseCategoriesResponse.result)
    const data = deserializeAll(exerciseCategoriesResponse.result.results);

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
