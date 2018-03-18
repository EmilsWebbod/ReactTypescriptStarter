import {shallow} from 'enzyme';
import * as React from 'react';

import StoreHomeComponent from './StoreHome.component';

const Shallow = () => shallow(<StoreHomeComponent/>);

describe('StoreHomeComponent', () => {
  it('renders the heading', () => {
    const result = Shallow().contains(<div>StoreHomeComponent</div>);
    expect(result).toBeTruthy();
  });
});
