export type TRouteId = string | number | undefined;

export const ROUTE_MAIN = '/';
export const ROUTE_TEMP = '/temp';
export const ROUTE_ANY = '*';
export const ROUTE_MAP = '/map';
export const ROUTE_HERO_LIST = '/hero-list';
export const ROUTE_PRINT_HERO = '/print-hero';
export const ROUTE_BOOK = '/book';

export const ROUTE_CATEGORIES = '/categories';
export const ROUTE_CATEGORIES_ITEM = (categoryId: TRouteId = ':categoryId') => `${ROUTE_CATEGORIES}/${categoryId}`;
export const ROUTE_CATEGORIES_ITEM_EDIT = (categoryId: TRouteId = ':categoryId') =>
  `${ROUTE_CATEGORIES_ITEM(categoryId)}/edit`;

export const ROUTE_COURSES = '/courses';
export const ROUTE_COURSES_ITEM = (courseId: TRouteId = ':courseId') => `${ROUTE_COURSES}/${courseId}`;
export const ROUTE_COURSES_ITEM_EDIT = (courseId: TRouteId = ':courseId') => `${ROUTE_COURSES_ITEM(courseId)}/edit`;
export const ROUTE_COURSES_ITEM_READ = (courseId: TRouteId = ':courseId') => `${ROUTE_COURSES_ITEM(courseId)}/read`;

export const ROUTE_ARTICLES = '/articles';
export const ROUTE_ARTICLES_ITEM = (articleId: TRouteId = ':articleId') => `${ROUTE_ARTICLES}/${articleId}`;
export const ROUTE_ARTICLES_ITEM_EDIT = (articleId: TRouteId = ':articleId') =>
  `${ROUTE_ARTICLES_ITEM(articleId)}/edit`;
export const ROUTE_ARTICLES_ITEM_READ = (articleId: TRouteId = ':articleId') =>
  `${ROUTE_ARTICLES_ITEM(articleId)}/read`;

export const ROUTE_USERS = '/users';
export const ROUTE_USERS_ME = '/users/me';
export const ROUTE_USERS_ITEM = (userId: TRouteId = ':userId') => `${ROUTE_USERS}/${userId}`;
export const ROUTE_USERS_ITEM_PROFILE = (userId: TRouteId = ':userId') => `${ROUTE_USERS_ITEM(userId)}/profile`;
export const ROUTE_USERS_ITEM_COURSES = (userId: TRouteId = ':userId') => `${ROUTE_USERS_ITEM(userId)}/courses`;
export const ROUTE_USERS_ITEM_PURCHASES = (userId: TRouteId = ':userId') => `${ROUTE_USERS_ITEM(userId)}/purchases`;

export const ROUTE_AUTH = '/auth';
export const ROUTE_AUTH_LOGIN = `/login`;
export const ROUTE_AUTH_LOGIN_ELK_REDIRECT = `/login-elk-redirect`;
export const ROUTE_AUTH_REGISTER = `/register`;

export const ROUTE_PURCHASES = '/purchases';

export const ROUTE_CART = '/cart';
export const ROUTE_CART_CHECKOUT = `${ROUTE_CART}/checkout`;
export const ROUTE_CART_COMPLETED = `${ROUTE_CART}/completed`;

export const ROUTE_ADMIN = '/admin';
export const ROUTE_ADMIN_DASHBOARD = '/admin/dashboard';
export const ROUTE_ADMIN_PEOPLE = '/admin/people';
