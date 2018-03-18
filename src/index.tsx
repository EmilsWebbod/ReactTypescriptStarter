
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Router, ConnectedRouter } from 'react-router-dom';

import AppComponent from './App.component';
import store, {history} from './store';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(AppComponent);
