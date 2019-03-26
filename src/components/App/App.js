import React from 'react';

import InputForm from '../InputForm';
import TodoList from '../TodoList';
import Footer from '../Footer';

import './App.css';

const App = () => (
	<div className="container">
		<InputForm />
		<TodoList />
		<Footer />
	</div>
);

export default App;