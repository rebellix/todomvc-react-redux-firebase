import React from 'react';
import PropTypes from 'prop-types';

const CounterButton = ({ counter }) => (
	<button
		className="btn btn-light"
	>
		{ counter } items left
	</button>
);

CounterButton.propTypes = {
	counter: PropTypes.number.isRequired
};

export default CounterButton