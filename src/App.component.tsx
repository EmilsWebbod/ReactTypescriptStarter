import * as React from 'react';
import Hello from './shared/Hello.stateless';

const initialState = {};
type State = typeof initialState;

export default class AppComponent extends React.Component<object, State> {
    state: State = initialState;

    render() {
        const {} = this.props;
        return (
            <div>
                <h1>AppComponent</h1>
                <Hello header="Header" text="text" />
            </div>
        )
    }
}