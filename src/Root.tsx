import * as React from 'react';
import { withRouter } from 'react-router';
import { connect, push } from 'react-redux';

import AppComponent from './App.component';
import DevTools from './development/DevTools';

class Root extends React.Component<object, object> {
  render() {
    return (
      <div>
        <AppComponent />
        <DevTools />
      </div>
    );
  }
}

export default withRouter(connect(null, {push})(Root));
