
import { IKeyMap } from '../../../interfaces';
import * as actionsCreators from './actionsCreators';
import { getType, ActionType } from 'typesafe-actions';
import { IExerciseCategory } from '../../../services/api/exercise-category-api';

export interface IEntityExerciseCategoriesState {
  byIds: IKeyMap<IExerciseCategory>,
  ids: number[]
}

const initialState = {
  byIds: {},
  ids: []
};


export type ExerciseCategoriesAction = ActionType<typeof actionsCreators>;

export const exerciseCategoriesReducer = (
  state: IEntityExerciseCategoriesState = initialState,
  action: ExerciseCategoriesAction
): IEntityExerciseCategoriesState => {
  switch (action.type) {
    case getType(actionsCreators.setData): {
      const { data } = action.payload;
      const exerciseCategories = data.reduce((acc, category) => ({
        ...acc,
        [category.id]: category
      }), {});

      const exerciseCategoriesIds = data.map(category => category.id);

      return {
        ...state,
        byIds: {
          ...state.byIds,
          ...exerciseCategories
        },
        ids: [
          ...state.ids,
          ...exerciseCategoriesIds
        ]
      }
    }

    default:
      return state;
  }
};
