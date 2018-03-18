
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, ConnectedRouter } from 'react-router-dom';

import store, {history} from './store';
import Root from './Root';

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

render(Root);
