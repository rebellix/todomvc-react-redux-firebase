import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filterReducer from './filterReducer';

export default combineReducers({
	dataReducer,
	filterReducer
});