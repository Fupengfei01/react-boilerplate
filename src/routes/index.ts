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
    path: '/',
    component: load('Home'),
    extract: true,
  },
];
