import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavTitle,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer, cilUser } from '@coreui/icons';

export const AdminSideBar = () => {
  return (
    <CSidebar className="border-end" unfoldable colorScheme="dark">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>CUI</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="/admin/people">
          <CIcon customClassName="nav-icon" icon={cilUser} /> Анкеты
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> With badge{' '}
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            </>
          }
        >
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            Nav dropdown item
          </CNavItem>
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            Nav dropdown item
          </CNavItem>
        </CNavGroup>
        <CNavItem href="https://coreui.io">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Download CoreUI
        </CNavItem>
        <CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilLayers} /> Try CoreUI PRO
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};
