import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import db from '../../../../assets/Backend/sidebar/Dashboard.svg';

import './Sidebar.css'
import { logo } from '../../../images';
import { db } from '../../../images';
import { Cb } from '../../../images';
import { communication } from '../../../images';
import { Revenue } from '../../../images';
import { course } from '../../../images';
import { setting } from '../../../images';
interface SidebarProps {
  onCollapse: (isCollapsed: boolean) => void; // Prop to notify parent about collapse state
}

const Sidebar: React.FC<SidebarProps> = ({ onCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Track if the sidebar is collapsed
  const location = useLocation(); // Get the current location

  // Toggle the sidebar collapse state
  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onCollapse(!isCollapsed); // Notify the parent about the collapse state
  };

  // Check if the current path matches the tab
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`fixed left-0 h-screen bg-[#0f172a] flex flex-col p-4 text-[#e2e8f0] transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-60'
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
          <img
            src={logo}
            alt="Logo"
            className={`w-10 h-10 mr-2 ${isCollapsed ? 'hidden' : 'block'}`}
          />
          {!isCollapsed && (
            <span className="font-inter font-medium text-base leading-5">Byway</span>
          )}
        </div>
        <img
          src={Cb}
          alt="Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={handleToggleSidebar}
        />
      </div>

      {/* Sidebar links */}
      <div className="flex flex-col gap-2">
        <div
          className={`flex items-center p-4 rounded-lg relative ${
            isCollapsed ? 'justify-center' : ''
          } ${isActive('/admin') ? 'bg-[#1e293b]' : 'bg-transparent'}`} // Change background for active item
        >
          <Link
            to="dashboard"
            className={`flex items-center ${isActive('/admin') ? 'text-[#3b82f6]' : 'text-[#e2e8f0] hover:text-[#3b82f6]'} ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={db}
              alt="Dashboard"
              className={`w-6 h-6 mr-3 transition duration-300 ${
                isActive('/admin') ? 'filter-blue' : 'filter-gray hover:filter-blue'
              }`}
            />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/admin') ? 'text-[#3b82f6]' : ''}`}>
                Dashboard
              </span>
            )}
          </Link>
        </div>

        <div
          className={`flex items-center p-4 rounded-lg relative ${
            isCollapsed ? 'justify-center' : ''
          } ${isActive('/admin/maincourse') ? 'bg-[#1e293b]' : 'bg-transparent'}`} // Change background for active item
        >
          <Link
            to="Maincourse"
            className={`flex items-center ${isActive('/admin/maincourse') ? 'text-[#3b82f6]' : 'text-[#e2e8f0] hover:text-[#3b82f6]'} ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={course}
              alt="Courses"
              className={`w-6 h-6 mr-3 transition duration-300 ${
                isActive('/admin/maincourse') ? 'filter-blue' : 'filter-gray hover:filter-blue'
              }`}
            />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/admin/maincourse') ? 'text-[#3b82f6]' : ''}`}>
                Courses
              </span>
            )}
          </Link>
        </div>

        <div
          className={`flex items-center p-4 rounded-lg relative ${
            isCollapsed ? 'justify-center' : ''
          } ${isActive('/admin/communication') ? 'bg-[#1e293b]' : 'bg-transparent'}`} // Change background for active item
        >
          <Link
            to="communication"
            className={`flex items-center ${isActive('/admin/communication') ? 'text-[#3b82f6]' : 'text-[#e2e8f0] hover:text-[#3b82f6]'} ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={communication}
              alt="Communication"
              className={`w-6 h-6 mr-3 transition duration-300 ${
                isActive('/admin/communication') ? 'filter-blue' : 'filter-gray hover:filter-blue'
              }`}
            />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/admin/communication') ? 'text-[#3b82f6]' : ''}`}>
                Communication
              </span>
            )}
          </Link>
        </div>

        <div
          className={`flex items-center p-4 rounded-lg relative ${
            isCollapsed ? 'justify-center' : ''
          } ${isActive('/admin/revenue') ? 'bg-[#1e293b]' : 'bg-transparent'}`} // Change background for active item
        >
          <Link
            to="revenue"
            className={`flex items-center ${isActive('/admin/revenue') ? 'text-[#3b82f6]' : 'text-[#e2e8f0] hover:text-[#3b82f6]'} ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={Revenue}
              alt="Revenue"
              className={`w-6 h-6 mr-3 transition duration-300 ${
                isActive('/admin/revenue') ? 'filter-blue' : 'filter-gray hover:filter-blue'
              }`}
            />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/admin/revenue') ? 'text-[#3b82f6]' : ''}`}>
                Revenue
              </span>
            )}
          </Link>
        </div>

        <div
          className={`flex items-center p-4 rounded-lg relative ${
            isCollapsed ? 'justify-center' : ''
          } ${isActive('/admin/setting') ? 'bg-[#1e293b]' : 'bg-transparent'}`} // Change background for active item
        >
          <Link
            to="setting"
            className={`flex items-center ${isActive('/admin/setting') ? 'text-[#3b82f6]' : 'text-[#e2e8f0] hover:text-[#3b82f6]'} ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={setting}
              alt="Setting"
              className={`w-6 h-6 mr-3 transition duration-300 ${
                isActive('/admin/setting') ? 'filter-blue' : 'filter-gray hover:filter-blue'
              }`}
            />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/admin/setting') ? 'text-[#3b82f6]' : ''}`}>
                Setting
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
