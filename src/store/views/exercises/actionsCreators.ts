import { createAction } from 'typesafe-actions';
import * as actions from './actions';
import { IExerciesFilters } from './reducer';

export const fetchData = createAction(actions.FETCH_DATA);

export const updateFilters = createAction(actions.UPDATE_FILTERS, action => {
  return (filters: Partial<IExerciesFilters>) => action({ filters });
})
