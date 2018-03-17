import * as React from 'react';
import Hello from './shared/HelloStateless/Hello.stateless';
const styles = require('./App.component.scss');

const initialState = {};
type State = typeof initialState;

export default class AppComponent extends React.Component<object, State> {
  public state: State = initialState;

  public render() {
    const {} = this.props;
    return (
      <div className={styles.App}>
        <h1>AppComponent</h1>
        <Hello header="Header" text="text" />
      </div>
    );
  }
}
