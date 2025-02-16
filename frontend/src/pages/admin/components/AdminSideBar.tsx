import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { cilUser, cilBarChart } from '@coreui/icons';

export const AdminSideBar = () => {
  return (
    <CSidebar className="border-end" unfoldable colorScheme="dark">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>Админ панель</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem href="/admin/dashboard">
          <CIcon customClassName="nav-icon" icon={cilBarChart} /> Статистика
        </CNavItem>
        <CNavItem href="/admin/people">
          <CIcon customClassName="nav-icon" icon={cilUser} /> Анкеты
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};
