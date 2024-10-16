import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Courses from '../Courses/Courses'
import Maincourse from '../Courses/maincourse'

const AdminDashboard: React.FC = () => {
   const [isCollapsed] = useState(false);
  return (
      <>
          <div className='flex flex-row'>
        <Sidebar />
         <div className={`ml-${isCollapsed ? '20' : '80'} flex-1 p-8 transition-all duration-300`}>
        <Routes>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/maincourse"element={<Maincourse/>}/>
          <Route path="/back-course" element={<Courses />} />
          {/* <Route path="/communication" element={<Communication />} /> */}
          {/* <Route path="/revenue" element={<Revenue />} />
          <Route path="/setting" element={<Setting />} /> */}
        </Routes>
      </div>
      
              </div>
          
     </>
      
  )
}

export default AdminDashboard