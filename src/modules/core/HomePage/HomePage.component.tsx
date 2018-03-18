import * as React from 'react';
import { Component } from 'react';

const styles = require('./HomePage.component.scss');

const initialState = {};
type State = typeof initialState;

export default class HomePageComponent extends Component<object, State> {
  public state: State = initialState;

  public render() {
    const {} = this.props;
    return (
      <div className={styles.HomePage}>
        HomePageComponent
      </div>
    );
  }
}
