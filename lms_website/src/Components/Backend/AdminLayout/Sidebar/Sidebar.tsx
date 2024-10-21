import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import db from '../../../../assets/Backend/sidebar/Dashboard.svg';
import course from '../../../../assets/Backend/sidebar/course.svg';
import communication from '../../../../assets/Backend/sidebar/Communication.svg';
import rev from '../../../../assets/Backend/sidebar/Revenue.svg';
import setting from '../../../../assets/Backend/sidebar/setting.svg';
import CB from '../../../../assets/Backend/sidebar/closebtn.svg';
import './Sidebar.css'
const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Track if the sidebar is collapsed
  const location = useLocation(); // Get the current location

  // Toggle the sidebar collapse state
  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Check if the current path matches the tab
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#3b82f6]' : 'text-[#e2e8f0] hover:text-[#3b82f6]' ;
  };

  // Set the image class based on active state
  const getImageClass = (path: string) => {
    return location.pathname === path ? 'filter-blue' : 'filter-gray hover:filter-blue';
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
            src="./assets/logo.svg"
            alt="Logo"
            className={`w-10 h-10 mr-2 ${isCollapsed ? 'hidden' : 'block'}`}
          />
          {!isCollapsed && (
            <span className="font-inter font-medium text-base leading-5">Byway</span>
          )}
        </div>
        <img
          src={CB}
          alt="Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={handleToggleSidebar}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className={`flex items-center p-4 rounded-lg relative ${isCollapsed ? 'justify-center' : ''}`}>
          <Link to="/dashboard" className={`flex items-center ${isActive('/dashboard')} ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={db} alt="Dashboard" className={`w-6 h-6 mr-3 transition duration-300 ${getImageClass('/dashboard')}`} />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/dashboard')}`}>Dashboard</span>
            )}
          </Link>
        </div>

        <div className={`flex items-center p-4 rounded-lg relative ${isCollapsed ? 'justify-center' : ''}`}>
          <Link to="/maincourse" className={`flex items-center ${isActive('/maincourse')} ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={course} alt="Courses" className={`w-6 h-6 mr-3 transition duration-300 ${getImageClass('/maincourse')}`} />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/maincourse')}`}>Courses</span>
            )}
          </Link>
        </div>

        <div className={`flex items-center p-4 rounded-lg relative ${isCollapsed ? 'justify-center' : ''}`}>
          <Link to="/communication" className={`flex items-center ${isActive('/communication')} ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={communication} alt="Communication" className={`w-6 h-6 mr-3 transition duration-300 ${getImageClass('/communication')}`} />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/communication')}`}>Communication</span>
            )}
          </Link>
        </div>

        <div className={`flex items-center p-4 rounded-lg relative ${isCollapsed ? 'justify-center' : ''}`}>
          <Link to="/revenue" className={`flex items-center ${isActive('/revenue')} ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={rev} alt="Revenue" className={`w-6 h-6 mr-3 transition duration-300 ${getImageClass('/revenue')}`} />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/revenue')}`}>Revenue</span>
            )}
          </Link>
        </div>

        <div className={`flex items-center p-4 rounded-lg relative ${isCollapsed ? 'justify-center' : ''}`}>
          <Link to="/setting" className={`flex items-center ${isActive('/setting')} ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={setting} alt="Setting" className={`w-6 h-6 mr-3 transition duration-300 ${getImageClass('/setting')}`} />
            {!isCollapsed && (
              <span className={`font-inter text-sm leading-6 ${isActive('/setting')}`}>Setting</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
