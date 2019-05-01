import { combineReducers } from 'redux';
import { exercisesReducer, IEntityExercisesState } from './exercises';
import { IEntityExerciseCategoriesState, exerciseCategoriesReducer } from './exercise-categories';

export interface IEntitiesState {
  exercises: IEntityExercisesState;
  exerciseCategories: IEntityExerciseCategoriesState;
}

export const entitiesReducer = combineReducers<IEntitiesState>({
  exerciseCategories: exerciseCategoriesReducer,
  exercises: exercisesReducer
});
