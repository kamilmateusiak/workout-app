import { IEntityExerciseCategoriesState } from "./reducer";
import { IKeyMap } from "../../../interfaces";
import { IExerciseCategory } from "../../../services/api/exercise-category-api";

export interface IWithExerciseCategoriesState {
  entities: {
    exerciseCategories: IEntityExerciseCategoriesState;
  }
}

export function getExerciseCategoriesIds(state: IWithExerciseCategoriesState): number[] {
  return state.entities.exerciseCategories.ids;
}

export function getExerciseCategory(state: IWithExerciseCategoriesState, id: string): IExerciseCategory {
  return state.entities.exerciseCategories.byIds[id];
}

export function getExerciseCategories(state: IWithExerciseCategoriesState): IKeyMap<IExerciseCategory> {
  return state.entities.exerciseCategories.byIds;
}
