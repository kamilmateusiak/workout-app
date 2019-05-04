import { combineReducers } from 'redux';
import { entitiesReducer, IEntitiesState } from './entities/reducer';
import { IViewsState, viewsReducer } from './views';
import { IFeaturesState, featuresReducer } from './features';

export interface IStoreState {
  entities: IEntitiesState;
  views: IViewsState;
  features: IFeaturesState;
}

export const reducers = combineReducers<IStoreState>({
  entities: entitiesReducer,
  views: viewsReducer,
  features: featuresReducer
});
