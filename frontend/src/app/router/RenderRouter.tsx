import { Suspense, useMemo } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useAppSelector, getIsAuthenticatedSessionSelector } from 'app/store';
import { Layout } from 'pages/core';
import { Loader } from 'shared/ui';
import { getRoutesByAuth, options } from './lib';
import { AdminLayout } from '../../pages/admin/AdminLayout.tsx';
import { getAdminRoutes } from './lib/getAdminRoutes.ts';

export const RenderRouter = () => {
  const isAuthenticated = useAppSelector(getIsAuthenticatedSessionSelector);

  const routesByAuth = useMemo(() => getRoutesByAuth(isAuthenticated), [isAuthenticated]);
  const routesForAdminPanel = useMemo(() => getAdminRoutes(), []);

  const routes = [
    {
      element: (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [...routesByAuth],
    },
    {
      element: (
        <AdminLayout>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </AdminLayout>
      ),
      children: [...routesForAdminPanel],
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes, options)} />;
};
