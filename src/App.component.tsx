import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import routes from './App.router';
import Hello from './shared/HelloStateless/Hello.stateless';
const styles = require('./App.component.scss');

interface Props {
  router: any;
}

const initialState = {};
type State = typeof initialState;

class AppComponent extends React.Component<Props, State> {
  public state: State = initialState;

  public render() {
    const { router } = this.props;
    return (
      <div className={styles.App}>
        <h1>AppComponent</h1>
        <Hello header="Header" text="text" />
        <Link to="/store" >Store!</Link>
        <Link to="/" >Home!</Link>

        <div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router
});

export {AppComponent};

export default withRouter(connect(mapStateToProps)(AppComponent));
