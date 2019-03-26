import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = ({ clearCompleted }) => (
  <button
    onClick={() => clearCompleted()}
		className="btn btn-light"
	>
        Clear completed
	</button>
);

ClearButton.propTypes = {
	clearCompleted: PropTypes.func.isRequired
};

export default ClearButton