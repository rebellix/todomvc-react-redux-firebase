import React from 'react';
import CounterButton from '../CounterButton';
import FilterLink from '../FilterLink';
import ClearButton from '../ClearButton';
import { FilterOptions } from '../../actions/types';

import './Footer.css';

const Footer = () => (
	<div className="btn-group" role="group">
		<CounterButton className="btn btn-light"></CounterButton>
		<div className="filter-section">
			<FilterLink filter={FilterOptions.SHOW_ALL_ITEMS}>All</FilterLink>
			<FilterLink filter={FilterOptions.SHOW_ACTIVE_ITEMS}>Active</FilterLink>
			<FilterLink filter={FilterOptions.SHOW_COMPLETED_ITEMS}>Completed</FilterLink>
		</div>
		<ClearButton className="btn btn-light"></ClearButton>
	</div>
);

export default Footer