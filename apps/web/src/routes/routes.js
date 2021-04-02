import { lazy } from 'react';

export const ROUTE_HOME = '/';

export default {
  [ROUTE_HOME]: lazy(() => import('../pages/home/Home')),
};
