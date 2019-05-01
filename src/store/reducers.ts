import { combineReducers } from 'redux';
import { entitiesReducer, IEntitiesState } from './entities/reducer';
import { IViewsState, viewsReducer } from './views';

export interface IStoreState {
  entities: IEntitiesState;
  views: IViewsState;
}

export const reducers = combineReducers<IStoreState>({
  entities: entitiesReducer,
  views: viewsReducer
});
