import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar'; // Import the Sidebar component
import { Outlet } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarCollapse = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar onCollapse={handleSidebarCollapse} />

      {/* Main content area */}
      <div
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-20' : 'ml-60'
        } flex-1 p-6`}
      >
        {<Outlet/>} {/* This represents your main content */}
      </div>
    </div>
  );
};

export default AdminDashboard;

// import React, { useState } from 'react'
// import Sidebar from './Sidebar/Sidebar'
// import { Route, Routes } from 'react-router-dom'
// import Courses from '../Courses/Courses'
// import Maincourse from '../Courses/maincourse'
// import Communication from '../Communication/Communication'

// const AdminDashboard: React.FC = () => {
//    const [isCollapsed] = useState(false);
//   return (
//       <>
//           <div className='flex flex-row'>
//         <Sidebar />
//          <div className={`ml-${isCollapsed ? '20' : '80'} flex-1 p-8 transition-all duration-300`}>
//         <Routes>
//             {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//             <Route path="/maincourse"element={<Maincourse/>}/>
//           <Route path="/back-course" element={<Courses />} />
//           <Route path="/communication" element={<Communication />} />
//           {/* <Route path="/revenue" element={<Revenue />} />
//           <Route path="/setting" element={<Setting />} /> */}
//         </Routes>
//       </div>
      
//               </div>
          
//      </>
      
//   )
// }

// export default AdminDashboard