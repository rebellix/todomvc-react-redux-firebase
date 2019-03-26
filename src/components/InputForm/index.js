import InputForm from './InputForm'
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: text => dispatch(actions.addItem(text)),
    toggleAll: () => dispatch(actions.toggleAll())
  }
}

export default connect(null, mapDispatchToProps)(InputForm);