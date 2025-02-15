import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTE_ADMIN, ROUTE_ADMIN_DASHBOARD, ROUTE_ADMIN_PEOPLE, ROUTE_ANY } from 'shared/router';
import { AdminDashboard } from 'pages/admin/components/AdminDashboard.tsx';
import { AdminPeople } from 'pages/admin/components/AdminPeople/AdminPeople.tsx';

export const admin: RouteObject[] = [
  {
    path: ROUTE_ADMIN_DASHBOARD,
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: ROUTE_ADMIN_PEOPLE,
    element: <AdminPeople></AdminPeople>,
  },
  {
    path: ROUTE_ADMIN,
    element: <Navigate to={ROUTE_ADMIN_DASHBOARD} />,
  },
  {
    path: ROUTE_ANY,
    element: <Navigate to={ROUTE_ADMIN_DASHBOARD} />,
  },
];
