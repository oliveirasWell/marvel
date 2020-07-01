import { lazy } from 'react';
import NotFound from '../pages/NotFound/NotFound';

const List = lazy(() => import('../pages/List/List'));
const Home = lazy(() => import('../pages/Home/Home'));
const Details = lazy(() => import('../pages/Details/Details'));
const AdvancedSearch = lazy(() =>
  import('../pages/AdvancedSearch/AdvancedSearch')
);

export const routes = {
  HOME: {
    path: '/home',
    title: 'Home',
    menu: true,
    component: Home,
    redirect(history) {
      return history.push(this.path);
    },
  },
  LIST: {
    path: '/list',
    title: 'List',
    menu: true,
    exact: true,
    component: List,
    redirect(history) {
      return history.push(this.path);
    },
  },
  ADVANCED_SEARCH: {
    path: '/search',
    title: 'Character Search',
    menu: true,
    exact: true,
    component: AdvancedSearch,
    redirect(history) {
      return history.push(this.path);
    },
  },
  DETAILS: {
    path: '/details/:id',
    title: 'Details',
    menu: false,
    exact: true,
    component: Details,
    redirect(history, id) {
      return history.push(this.path.replace(':id', id));
    },
  },
  NOT_FOUND: {
    path: '/not-found',
    title: 'Not Fund',
    menu: false,
    exact: true,
    component: NotFound,
    redirect(history) {
      return history.push(this.path);
    },
  },
};
