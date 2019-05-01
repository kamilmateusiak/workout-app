import { IViewExercisesState, IExerciesFilters } from "./reducer";

export interface IWithViewExercisesState {
  views: {
    exercises: IViewExercisesState;
  }
}

export function isInitialled(state: IWithViewExercisesState): boolean {
  return state.views.exercises.initialled;
}

export function getFilters(state: IWithViewExercisesState): IExerciesFilters {
  return state.views.exercises.filters;
}
