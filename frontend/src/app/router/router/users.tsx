import { RouteObject } from 'react-router-dom';
import {
  ROUTE_USERS,
  ROUTE_USERS_ITEM,
  ROUTE_USERS_ITEM_COURSES,
  ROUTE_USERS_ITEM_PROFILE,
  ROUTE_USERS_ITEM_PURCHASES,
  ROUTE_USERS_ME,
} from 'shared/router';
import { lazyLoadPage } from '../lib';

const UsersPage = lazyLoadPage('UsersPage');
const UsersDetailPage = lazyLoadPage('UsersDetailPage');
const UsersProfilePage = lazyLoadPage('UsersProfilePage');
const UsersProfileMePage = lazyLoadPage('UsersProfileMePage');
const UsersPurchasesPage = lazyLoadPage('UsersPurchasesPage');
const UsersCoursesPage = lazyLoadPage('UsersCoursesPage');

export const users: RouteObject[] = [
  {
    path: ROUTE_USERS,
    element: <UsersPage />,
  },
  {
    path: ROUTE_USERS_ME,
    element: <UsersProfileMePage />,
  },
  {
    path: ROUTE_USERS_ITEM(),
    element: <UsersDetailPage />,
  },
  {
    path: ROUTE_USERS_ITEM_PROFILE(),
    element: <UsersProfilePage />,
  },
  {
    path: ROUTE_USERS_ITEM_COURSES(),
    element: <UsersCoursesPage />,
  },
  {
    path: ROUTE_USERS_ITEM_PURCHASES(),
    element: <UsersPurchasesPage />,
  },
];
