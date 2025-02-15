import { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_AUTH_LOGIN, ROUTE_AUTH_REGISTER } from 'shared/router';
import { getIsAuthenticatedSessionSelector, useAppSelector } from 'app/store';
import { Button, Input, Avatar } from 'shared/ui';
import { Logo } from 'shared/ui/logo';
import classes from './WidgetHeader.module.scss';

export const WidgetHeader: FC = memo(() => {
  const location = useLocation();
  const isAuthenticated = useAppSelector(getIsAuthenticatedSessionSelector);

  if (location.pathname === ROUTE_AUTH_LOGIN) {
    return null;
  }

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Logo />

        <Input.Search />

        <div className={classes.actions}>
          {isAuthenticated ? (
            <Avatar />
          ) : (
            <>
              <Button
                as={Link}
                to={ROUTE_AUTH_LOGIN}
                containerClassName={classes.log_in__container}
                textClassName={classes.log_in__text}
                text="Вход"
              />
              <Button
                as={Link}
                to={ROUTE_AUTH_REGISTER}
                containerClassName={classes.sign_up__container}
                textClassName={classes.sign_up__text}
                text="Регистрация"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
});
