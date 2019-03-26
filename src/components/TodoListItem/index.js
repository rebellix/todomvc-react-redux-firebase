import TodoListItem from './TodoListItem'
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: id => dispatch(actions.removeItem(id)),
    toggleItem: id => dispatch(actions.toggleItem(id))
  }
}

export default connect(null, mapDispatchToProps)(TodoListItem)