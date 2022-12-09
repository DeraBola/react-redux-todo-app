import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { provider } from 'react-dom'

ReactDOM.render(
	<React.StrictMode>
		<provider store={store} >
			<App />
		</provider>
	</React.StrictMode>,
	document.getElementById('root')
);
