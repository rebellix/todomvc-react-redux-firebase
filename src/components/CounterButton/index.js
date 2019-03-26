import CounterButton from './CounterButton';
import { connect } from 'react-redux';

import _ from 'lodash';

const mapStateToProps = (state) => {
  const counter = _.reduce(state.dataReducer, (result, value) => (!value.completed ? result + 1 : result), 0)
  return {
    counter: counter
  }
}

export default connect(mapStateToProps)(CounterButton)