import { RouteObject } from 'react-router-dom';
import { ROUTE_AUTH_LOGIN, ROUTE_AUTH_LOGIN_ELK_REDIRECT, ROUTE_AUTH_REGISTER } from 'shared/router';
import { lazyLoadPage } from '../lib';
import { RegisterPage } from 'pages/auth/register';

const LoginElkRedirectPage = lazyLoadPage('LoginElkRedirectPage');
const LoginPage = lazyLoadPage('LoginPage');

export const auth: RouteObject[] = [
  {
    path: ROUTE_AUTH_LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_AUTH_LOGIN_ELK_REDIRECT,
    element: <LoginElkRedirectPage />,
  },
  {
    path: ROUTE_AUTH_REGISTER,
    element: <RegisterPage />,
  },
];
