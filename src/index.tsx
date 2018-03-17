
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import AppComponent from './App.component';

const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer>
           <Component />
        </AppContainer>,
        document.getElementById("root")
    )
};

render(AppComponent);

if (module.hot) {
    module.hot.accept('./App.component', () => { render(AppComponent) })
}