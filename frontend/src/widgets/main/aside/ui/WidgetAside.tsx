import { FC, memo } from 'react';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ROUTE_AUTH_LOGIN,
  ROUTE_AUTH_LOGIN_ELK_REDIRECT,
  ROUTE_AUTH_REGISTER,
  ROUTE_HERO_LIST,
  ROUTE_MAP,
} from 'shared/router';
import { Avatar, Button, Typography } from 'shared/ui';
import classes from './WidgetAside.module.scss';
import 'ol/ol.css';
import {
  getIsAdminSessionSelector,
  getIsAuthenticatedSessionSelector,
  sessionActions,
  useAppDispatch,
  useAppSelector,
} from 'app/store';

export const WidgetAside: FC = memo(() => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isAuth = useAppSelector(getIsAuthenticatedSessionSelector);
  const isAdmin = useAppSelector(getIsAdminSessionSelector);

  const handleClick = () => {
    window.localStorage.clear();
    dispatch(sessionActions.setIsAuthenticated(false));
    dispatch(sessionActions.setIsAdmin(false));
  };

  if (
    location.pathname === ROUTE_AUTH_LOGIN ||
    location.pathname === ROUTE_AUTH_LOGIN_ELK_REDIRECT ||
    location.pathname === ROUTE_AUTH_REGISTER
  ) {
    return null;
  }

  return (
    <aside className={classes.aside}>
      {isAuth && (
        <div className={classes.user_box}>
          <Avatar initials="И" /> <span className={classes.text}>Игорь Григорьев</span>
        </div>
      )}

      <nav className={classes.nav}>
        <ul className={classes.list}>
          <NavLink
            to={ROUTE_HERO_LIST}
            className={({ isActive }) =>
              classNames(classes.bookmark, classes.link, { [classes.link_active]: isActive })
            }
          >
            <span className={classes.text}>Герои Оренбуржья</span>
            <span className={classes.arrow}></span>
          </NavLink>

          <NavLink
            to={ROUTE_MAP}
            className={({ isActive }) =>
              classNames(classes.bookmark, classes.bookmark_2, classes.link, {
                [classes.link_active]: isActive,
              })
            }
          >
            <span className={classes.text}>Карта</span>
            <span className={classes.arrow}></span>
          </NavLink>
        </ul>
      </nav>

      <div className={classes.footer}>
        {isAuth ? (
          <Button text="Выйти" containerClassName={classes.button} onClick={handleClick} />
        ) : (
          <Button as={NavLink} text="Войти" containerClassName={classes.button} to={ROUTE_AUTH_LOGIN} />
        )}

        {/*<Button text="Добавить героя" containerClassName={classes.button} />*/}
        <Typography.Link className={classes.text} href="#">
          Сообщить о проблеме
        </Typography.Link>

        {isAuth && isAdmin && (
          <NavLink to={'/admin'} className={classes.text}>
            Войти в админ панель
          </NavLink>
        )}
      </div>
    </aside>
  );
});
