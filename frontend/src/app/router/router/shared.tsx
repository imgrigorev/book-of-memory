import { Navigate, RouteObject } from 'react-router-dom';
import {ROUTE_ANY, ROUTE_BOOK, ROUTE_HERO_LIST, ROUTE_MAIN, ROUTE_MAP, ROUTE_PRINT_HERO} from 'shared/router';
import { lazyLoadPage } from '../lib';
import {HeroList} from "pages/core/heroList/ui";
import {PrintHero} from "pages/printHero";
import {BookPage} from "pages/book/BookPage.tsx";

const HomePage = lazyLoadPage('HomePage');
const NextGISMapPages = lazyLoadPage('NextGISMapPages');

export const shared: RouteObject[] = [
  {
    path: ROUTE_MAIN,
    element: <HomePage />,
  },
  {
    path: ROUTE_HERO_LIST,
    element: <HeroList />,
  },
  {
    path: ROUTE_BOOK,
    element: <BookPage />
  },
  {
    path: ROUTE_MAP,
    element: <NextGISMapPages />,
  },
  {
    path: ROUTE_ANY,
    element: <Navigate to={ROUTE_MAIN} />,
  },
];
