import loadable, { LoadableComponent } from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';

const load = (page: string): LoadableComponent<RouteComponentProps> =>
  loadable(() => import(`../pages/${page}`));

export interface Route {
  path: string;
  component: ReturnType<typeof load>;
  extract: boolean;
}

export default [
  {
    path: '/home',
    component: load('Home'),
    extract: true,
  },
  {
    path: '/login',
    component: load('Login'),
    extract: true,
  },
];
