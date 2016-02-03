import 'bootstrap/dist/css/bootstrap.css';
import '../styles/sticky-footer.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';

let store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('app')
);
