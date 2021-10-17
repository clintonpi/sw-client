import createSagaMiddleware from '@redux-saga/core';
import indexReducer from './reducers';
import indexSaga from './sagas';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	indexReducer,
	applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(indexSaga);

export default store;
