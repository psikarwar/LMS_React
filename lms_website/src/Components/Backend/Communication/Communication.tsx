import React from 'react'
import { NavLink } from 'react-router-dom'
import Tab from '../Tab/Tab'
import im1 from '../../../../../assets/icon-horizontal-dots.svg';

const Communication : React.FC= () => {
  return (
      <>
           <div className="p-4 font-sans ml-58">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-lg md:text-2xl font-semibold">Communication</h1>
           <img src={im1} alt="menu" className="mt-2 md:mt-0 w-6 h-6 md:w-8 md:h-8" />
              </header>
                {/* Tab Navigation */}
      <nav className="flex flex-wrap gap-4 my-4 border-b border-gray-300">
        <NavLink
          to="/commn-review"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Reviews"  />     
          </NavLink>
          
        <NavLink
          to="/message"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Messages"  />
          </NavLink>
          
        
        <NavLink
          to="/notification"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Notifications"  />
        </NavLink>
       
          
        
       
      </nav>
              </div>
      </>
  )
}

export default Communication