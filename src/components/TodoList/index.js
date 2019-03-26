import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as actions from '../../actions';
import { FilterOptions } from '../../actions/types';

import _ from 'lodash';

const visibleItems = (items, filter) => {
	switch (filter) {
  case FilterOptions.SHOW_ALL_ITEMS:
		return items;
  case FilterOptions.SHOW_COMPLETED_ITEMS:
    return _.filter(items, item => item.completed);
	case FilterOptions.SHOW_ACTIVE_ITEMS:
    return _.filter(items, item => !item.completed);
	default:
    return items;
	}
};

const mapStateToProps = state => ({
	data: visibleItems(state.dataReducer, state.filterReducer)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actions.fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);