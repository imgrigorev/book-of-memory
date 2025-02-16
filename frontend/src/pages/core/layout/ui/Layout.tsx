import { FC, PropsWithChildren } from 'react';
import classes from './Layout.module.scss';
import { WidgetAside } from 'widgets/main';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        <WidgetAside />
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};
