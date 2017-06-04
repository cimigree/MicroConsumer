import './styles/styles.scss';
import './babelHelpers';


// require('./favicon.ico'); // Tell webpack to load favicon.icoimport React from 'react';

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './components/app.js';


render(
  <App>
    <Router history={browserHistory} routes={routes} />
  </App>, document.getElementById('app')
);
