import { root } from './initialState';
import { FETCH_ROOT, FETCH_ROOT_FAILURE, FETCH_ROOT_SUCCESS, RootAction, RootState } from '../../models';

const rootReducer = (state: RootState = root, action: RootAction) => {
	switch (action.type) {
		case FETCH_ROOT:
			return {
				...state,
				isLoading: true,
				payload: null,
				error: null,
			};

		case FETCH_ROOT_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case FETCH_ROOT_SUCCESS:
			return {
				...state,
				isLoading: false,
				payload: action.payload,
			};

		default:
			return state;
	}
};

export default rootReducer;
