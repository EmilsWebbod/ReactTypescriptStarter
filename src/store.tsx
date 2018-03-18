import {applyMiddleware, combineReducers, createStore} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
import reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export {history};
export default store;
