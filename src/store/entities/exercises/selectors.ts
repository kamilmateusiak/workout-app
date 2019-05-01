import { IEntityExercisesState } from "./reducer";
import { IKeyMap } from "../../../interfaces";
import { IExercise } from "../../../services/api/exercise-api";

export interface IWithExercisesState {
  entities: {
    exercises: IEntityExercisesState;
  }
}

export function getExercisesIds(state: IWithExercisesState): number[] {
  return state.entities.exercises.ids;
}

export function getExercise(state: IWithExercisesState, id: string): IExercise {
  return state.entities.exercises.byIds[id];
}

export function getExercises(state: IWithExercisesState): IKeyMap<IExercise> {
  return state.entities.exercises.byIds;
}
