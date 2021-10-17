import { AppState } from '../../models';
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import rootsReducer from './rootsReducer';

const reducers = combineReducers<AppState>({
	roots: rootsReducer,
	root: rootReducer,
});

export default reducers;
