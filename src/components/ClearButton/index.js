import ClearButton from './ClearButton'
import { connect } from 'react-redux';
import * as actions from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    clearCompleted: () => dispatch(actions.clearCompleted())
  }
}

export default connect(null, mapDispatchToProps)(ClearButton)