import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTE_ANY, ROUTE_MAIN, ROUTE_MAP } from 'shared/router';
import { lazyLoadPage } from '../lib';

const HomePage = lazyLoadPage('HomePage');
const NextGISMapPages = lazyLoadPage('NextGISMapPages');

export const shared: RouteObject[] = [
  {
    path: ROUTE_MAIN,
    element: <HomePage />,
  },
  {
    path: ROUTE_ANY,
    element: <Navigate to={ROUTE_MAIN} />,
  },
  {
    path: ROUTE_MAP,
    element: <NextGISMapPages />,
  },
];
