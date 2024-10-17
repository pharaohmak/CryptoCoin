import React, { ReactNode } from 'react';
import SideMenu from '../components/SideMenu';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;