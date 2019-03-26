import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();