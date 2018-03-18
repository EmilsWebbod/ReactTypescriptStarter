import * as React from 'react';

import StoreComponent from './modules/+store/Store.component';
import HomePageComponent from './modules/core/HomePage/HomePage.component';

interface Path {
  path?: string;
  exact?: boolean;
  main?: any;
}

const routes: Path[] = [
  {
    path: '/',
    exact: true,
    main: HomePageComponent
  },
  {
    path: '/store',
    main: StoreComponent
  }
];

export default routes;
