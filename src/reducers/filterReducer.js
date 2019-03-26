import { FilterOptions } from '../actions/types'

const filterReducer = (state = FilterOptions.SHOW_ALL_ITEMS, action) => {
	switch (action.type) {
	case 'SET_RENDERING_FILTER':
		return action.filter;
	default:
		return state;
	}
};

export default filterReducer