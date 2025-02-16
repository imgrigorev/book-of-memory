import { FC, PropsWithChildren } from 'react';
import { AdminSideBar } from 'pages/admin/components/AdminSideBar.tsx';
import classes from './AdminLayout.module.scss';
import { AdminHeader } from 'pages/admin/components/AdminHeader.tsx';

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <AdminSideBar></AdminSideBar>
      <div className={classes.layout__body}>
        {/*<AdminHeader></AdminHeader>*/}
        <div className={classes.layout__content}>{children}</div>
      </div>
    </div>
  );
};
