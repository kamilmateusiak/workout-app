import { createAction } from 'typesafe-actions';
import * as actions from './actions';
import { IExerciseCategory } from '../../../services/api/exercise-category-api';

export const setData = createAction(actions.SET_DATA, action => {
  return (data: IExerciseCategory[]) => action({ data });
});

export const fetchData = createAction(actions.FETCH_DATA);
