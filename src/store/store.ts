import { createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import { reducers } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { entitiesSagas } from './entities';
import { viewsSagas } from './views/sagas';
import { featuresSagas } from './features';

export const sagaMiddleware = createSagaMiddleware();

declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(entitiesSagas);
sagaMiddleware.run(viewsSagas);
sagaMiddleware.run(featuresSagas);
