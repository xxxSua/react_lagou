import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppOther from './AppOther.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppOther />, document.getElementById('root'));
registerServiceWorker();
