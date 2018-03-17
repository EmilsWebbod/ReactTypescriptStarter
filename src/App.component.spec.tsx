import { shallow } from 'enzyme';
import * as React from 'react';

import AppComponent from './App.component';

const Shallow = () => shallow(<AppComponent />);

describe('AppComponent', () => {
    it('renders the heading', () => {
        const result = Shallow().contains(<h1>AppComponent</h1>);
        expect(result).toBeTruthy();
    });
});
