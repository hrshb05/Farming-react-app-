import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';


// main app
import App from './containers/App';
import Routes from './routes';	

ReactDOM.render(<Routes />, document.getElementById('app'))