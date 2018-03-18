import {shallow} from 'enzyme';
import * as React from 'react';

import StoreComponent from './Store.component';

const Shallow = () => shallow(<StoreComponent/>);

describe('StoreComponent', () => {
  it('renders the heading', () => {
    const result = Shallow().contains(<div>StoreComponent</div>);
    expect(result).toBeTruthy();
  });
});
