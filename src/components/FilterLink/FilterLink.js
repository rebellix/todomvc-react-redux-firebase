import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = ({ active, children, onClick }) => (
	<button
		onClick={ onClick }
		disabled={ active }
		className="btn btn-light"
  >
    { children }
	</button>
);

FilterLink.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default FilterLink