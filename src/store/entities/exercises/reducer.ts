
import { IKeyMap } from '../../../interfaces';
import { IExercise } from '../../../services/api/exercise-api';
import * as actionsCreators from './actionsCreators';
import { getType, ActionType } from 'typesafe-actions';

export interface IEntityExercisesState {
  byIds: IKeyMap<IExercise>,
  ids: number[]
}

const initialState = {
  byIds: {},
  ids: []
};


export type ExerciseAction = ActionType<typeof actionsCreators>;

export const exercisesReducer = (
  state: IEntityExercisesState = initialState,
  action: ExerciseAction
): IEntityExercisesState => {
  switch (action.type) {
    case getType(actionsCreators.setData): {
      const { data } = action.payload;
      const exercises = data.reduce((acc, exercise) => ({
        ...acc,
        [exercise.id]: exercise
      }), {});

      const exercisesIds = data.map(exercise => exercise.id);

      return {
        ...state,
        byIds: exercises,
        ids: exercisesIds
      }
    }

    default:
      return state;
  }
};
