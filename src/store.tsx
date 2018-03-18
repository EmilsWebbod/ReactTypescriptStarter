import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
import reducers from './reducers';
import DevTools from './development/DevTools';

const initialState = {};

const enhancer = compose(
  applyMiddleware(thunkMiddleware, middleware),
  DevTools.instrument()
);

const store = createStore(
  combineReducers({
    router: routerReducer,
    ...reducers
  }),
  initialState,
  enhancer
);

export {history};
export default store;
