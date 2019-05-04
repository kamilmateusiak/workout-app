import { combineReducers } from 'redux';
import { authReducer, IFeatureAuthState } from './auth';

export interface IFeaturesState {
  auth: IFeatureAuthState;
}

export const featuresReducer = combineReducers<IFeaturesState>({
  auth: authReducer
});
