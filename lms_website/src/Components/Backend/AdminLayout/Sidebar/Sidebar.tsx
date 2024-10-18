



// import React, { useState } from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import db from '../../../../assets/Backend/sidebar/Dashboard.svg';
// import course from '../../../../assets/Backend/sidebar/course.svg';
// import communication from '../../../../assets/Backend/sidebar/Communication.svg';
// import rev from '../../../../assets/Backend/sidebar/Revenue.svg';
// import setting from '../../../../assets/Backend/sidebar/setting.svg';
// import CB from '../../../../assets/Backend/sidebar/closebtn.svg';
// // import Dashboard from '../../Dashboard/Dashboard'; // Import your page components
// import Courses from '../../Courses/Courses';
// // import Communication from '../../Communication/Communication';
// // import Revenue from '../../Revenue/Revenue';
// // import Setting from '../../Setting/Setting';

// const Sidebar: React.FC = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false); // Track if the sidebar is collapsed

//   // Toggle the sidebar collapse state
//   const handleToggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`h-screen bg-[#0f172a] flex flex-col p-4 text-[#e2e8f0] transition-all duration-300 ${
//           isCollapsed ? 'w-20' : 'w-60'
//         }`}
//       >
//         <div className="flex justify-between items-center mb-8">
//           <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
//             <img
//               src="./assets/logo.svg"
//               alt="Logo"
//               className={`w-10 h-10 mr-2 ${isCollapsed ? 'hidden' : 'block'}`}
//             />
//             {!isCollapsed && (
//               <span className="font-inter font-medium text-base leading-5">Byway</span>
//             )}
//           </div>
//           <img
//             src={CB}
//             alt="Menu"
//             className="w-6 h-6 cursor-pointer"
//             onClick={handleToggleSidebar}
//           />
//         </div>

//         <div className="flex flex-col gap-2">
//           <div className={`flex items-center p-4 rounded-lg bg-[#1e293b] relative ${isCollapsed ? 'justify-center' : ''}`}>
//             <img src={db} alt="Dashboard" className="w-6 h-6 mr-3" />
//             {!isCollapsed && (
//               <Link to="/dashboard" className="font-inter text-sm leading-6 text-[#3b82f6]">Dashboard</Link>
//             )}
//           </div>

//           <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
//             <img src={course} alt="Courses" className="w-6 h-6 mr-3" />
//             {!isCollapsed && (
//               <Link to="/back-course" className="font-inter text-sm leading-6">Courses</Link>
//             )}
//           </div>

//           <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
//             <img src={communication} alt="Communication" className="w-6 h-6 mr-3" />
//             {!isCollapsed && (
//               <Link to="/communication" className="font-inter text-sm leading-6">Communication</Link>
//             )}
//           </div>

//           <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
//             <img src={rev} alt="Revenue" className="w-6 h-6 mr-3" />
//             {!isCollapsed && (
//               <Link to="/revenue" className="font-inter text-sm leading-6">Revenue</Link>
//             )}
//           </div>

//           <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
//             <img src={setting} alt="Setting" className="w-6 h-6 mr-3" />
//             {!isCollapsed && (
//               <Link to="/setting" className="font-inter text-sm leading-6">Setting</Link>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         <Routes>
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//           <Route path="/back-course" element={<Courses />} />
//           {/* <Route path="/communication" element={<Communication />} /> */}
//           {/* <Route path="/revenue" element={<Revenue />} />
//           <Route path="/setting" element={<Setting />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../../../assets/Backend/sidebar/Dashboard.svg';
import course from '../../../../assets/Backend/sidebar/course.svg';
import communication from '../../../../assets/Backend/sidebar/Communication.svg';
import rev from '../../../../assets/Backend/sidebar/Revenue.svg';
import setting from '../../../../assets/Backend/sidebar/setting.svg';
import CB from '../../../../assets/Backend/sidebar/closebtn.svg';
// import Courses from '../../Courses/Courses';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Track if the sidebar is collapsed

  // Toggle the sidebar collapse state
  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
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
          <div className={`flex items-center p-4 rounded-lg bg-[#1e293b] relative ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={db} alt="Dashboard" className="w-6 h-6 mr-3" />
            {!isCollapsed && (
              <Link to="/dashboard" className="font-inter text-sm leading-6 text-[#3b82f6]">Dashboard</Link>
            )}
          </div>

          <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={course} alt="Courses" className="w-6 h-6 mr-3" />
            {!isCollapsed && (
              <Link to="/maincourse" className="font-inter text-sm leading-6">Courses</Link>
            )}
          </div>

          <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={communication} alt="Communication" className="w-6 h-6 mr-3" />
            {!isCollapsed && (
              <Link to="/communication" className="font-inter text-sm leading-6">Communication</Link>
            )}
          </div>

          <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={rev} alt="Revenue" className="w-6 h-6 mr-3" />
            {!isCollapsed && (
              <Link to="/revenue" className="font-inter text-sm leading-6">Revenue</Link>
            )}
          </div>

          <div className={`flex items-center p-4 rounded-lg hover:bg-[#1e293b] ${isCollapsed ? 'justify-center' : ''}`}>
            <img src={setting} alt="Setting" className="w-6 h-6 mr-3" />
            {!isCollapsed && (
              <Link to="/setting" className="font-inter text-sm leading-6">Setting</Link>
            )}
          </div>
        </div>
      </div>
      
  );
};

export default Sidebar;
