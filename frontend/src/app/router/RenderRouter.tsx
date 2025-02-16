import { Suspense, useMemo } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useAppSelector, getIsAuthenticatedSessionSelector } from 'app/store';
import { Layout } from 'pages/core';
import { Loader } from 'shared/ui';
import { getRoutesByAuth, options } from './lib';
import { AdminLayout } from '../../pages/admin/AdminLayout.tsx';
import { getAdminRoutes } from './lib/getAdminRoutes.ts';
import {PrintHero} from "pages/printHero";
import {getPrintRoutes} from "app/router/lib/getPrintRoute.ts";

export const RenderRouter = () => {
  const isAuthenticated = useAppSelector(getIsAuthenticatedSessionSelector);

  const routesByAuth = useMemo(() => getRoutesByAuth(isAuthenticated), [isAuthenticated]);
  const routesForAdminPanel = useMemo(() => getAdminRoutes(), []);
  const printRoute = useMemo(() => getPrintRoutes(), []);

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
    {
      element: (
          <PrintHero></PrintHero>
      ),
      children: [...printRoute]
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes, options)} />;
};
