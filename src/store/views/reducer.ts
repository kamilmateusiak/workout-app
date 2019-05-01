import { combineReducers } from 'redux';
import { exercisesReducer, IViewExercisesState } from './exercises';

export interface IViewsState {
  exercises: IViewExercisesState;
}

export const viewsReducer = combineReducers<IViewsState>({
  exercises: exercisesReducer
});
