import { combineReducers } from 'redux';
import rootsReducer from './rootsReducer';

const reducers = combineReducers({
	roots: rootsReducer,
});

export default reducers;
