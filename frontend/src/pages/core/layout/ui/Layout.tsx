import { FC, memo, PropsWithChildren } from 'react';
import { WidgetHeader, WidgetFooter } from 'widgets/main';
import classes from './Layout.module.scss';
import { useLocation } from 'react-router-dom';
import { ROUTE_AUTH_LOGIN } from 'shared/router';

export const Layout: FC<PropsWithChildren> = memo(({ children }) => {
  const location = useLocation();

  return (
    <div className={classes.layout} data-login={location.pathname === ROUTE_AUTH_LOGIN}>
      <WidgetHeader />
      <main className={classes.main} data-login={location.pathname === ROUTE_AUTH_LOGIN}>
        {children}
      </main>
      <WidgetFooter />
    </div>
  );
});
