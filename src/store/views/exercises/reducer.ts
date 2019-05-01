import * as actionsCreators from './actionsCreators';
import { getType, ActionType } from 'typesafe-actions';

export interface IExerciesFilters {
  category: string | null;
}

export interface IViewExercisesState {
  filters: IExerciesFilters,
  initialled: boolean
}

const initialState = {
  filters: {
    category: null
  },
  initialled: false
};


export type ExerciseAction = ActionType<typeof actionsCreators>;

export const exercisesReducer = (
  state: IViewExercisesState = initialState,
  action: ExerciseAction
): IViewExercisesState => {
  switch (action.type) {
    case getType(actionsCreators.fetchData): {
      return {
        ...state,
        initialled: true
      }
    }

    case getType(actionsCreators.updateFilters): {
      const { filters } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          ...filters
        }
      }
    }

    default:
      return state;
  }
};
