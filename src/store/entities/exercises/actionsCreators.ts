import { createAction } from 'typesafe-actions';
import { IExercise } from '../../../services/api/exercise-api';
import * as actions from './actions';

export interface IFetchDataParams {
  category?: string | null
}

export const setData = createAction(actions.SET_DATA, action => {
  return (data: IExercise[]) => action({ data });
});

export const fetchData = createAction(actions.FETCH_DATA, action => {
  return (params: IFetchDataParams) => action({ params });
});

