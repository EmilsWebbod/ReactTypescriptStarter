import * as React from 'react';

const styles = require('./StoreHome.component.scss');

const initialState = {};
type State = typeof initialState;

export default class StoreHomeComponent extends React.Component<object, State> {
  public state: State = initialState;

  public render() {
    const {} = this.props;
    return (
      <div className={styles.StoreHome}>
        StoreHomeComponent
      </div>
    );
  }
}
