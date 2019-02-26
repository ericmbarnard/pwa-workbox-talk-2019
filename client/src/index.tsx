import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'

import 'jquery.easing/jquery.easing.js'
import 'chart.js/dist/Chart.js'
import 'datatables.net-bs4/js/dataTables.bootstrap4.js'

import * as chartAreaDemo from './demo/chart-area-demo'
import * as datatablesDemo from './demo/datatables-demo'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

chartAreaDemo.setup();
datatablesDemo.setup();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

