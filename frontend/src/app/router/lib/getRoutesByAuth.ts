import { RouteObject } from 'react-router-dom';
import { auth, users, shared } from '../router';

export const getRoutesByAuth = (isAuthenticated: boolean | undefined): RouteObject[] => {
  const allRouter = [...shared];

  if (!isAuthenticated) {
    allRouter.push(...auth);
  }

  if (isAuthenticated || typeof isAuthenticated === 'undefined') {
    allRouter.push(...users);
  }

  return allRouter;
};
