import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {storeRoutes} from './Store.router';

const styles = require('./Store.component.scss');

const initialState = {};
type State = typeof initialState;

export default class StoreComponent extends React.Component<object, State> {
  public state: State = initialState;

  public render() {
    return (
      <Router>
        <div className={styles.Store}>
          StoreComponent

          {storeRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}
