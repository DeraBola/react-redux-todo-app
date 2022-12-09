import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-dom'

ReactDOM.render(
	<React.StrictMode>
		<Provider ></Provider>
		
	</React.StrictMode>,
	document.getElementById('root')
);
