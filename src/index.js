import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));

serviceWorker.unregister();
