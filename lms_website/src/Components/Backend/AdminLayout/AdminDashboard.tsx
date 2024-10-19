import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'; // Import the Sidebar component

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-row h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-8 ml-60"> {/* Sidebar width accounted */}
        <Outlet /> {/* This will render the respective component based on the route */}
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