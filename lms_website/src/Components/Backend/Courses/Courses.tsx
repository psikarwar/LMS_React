// // import React from 'react';
// // import Tab from '../Tab/Tab';
// // // import Banner from '../Banner/Banner';
// // // import Table from '../Table/Table';
// // import './Courses.css';
// // import im1 from '../../../../../assets/icon-horizontal-dots.svg'
// // // import im2 from '../../../../../assets/icon-graph.svg'
// // // import im3 from '../../../../../assets/icon-graph-2.svg'
// // // import im4 from '../../../../../assets/icon-graph-3.svg'



// // const Courses: React.FC = () => {
// //   return (
// //     <div className="dashboard">
// //       <header>
// //         <h1>NCERT Solutions for Class 12 Chemistry</h1>
// //         <img src={im1} alt="menu" />
// //       </header>
// //       <nav>
// //         <Tab title="Commission" active />
// //         <Tab title="Reviews" />
// //         <Tab title="Customer" />
// //         <Tab title="Chapters" />
// //         <Tab title="Promotion" />
// //         <Tab title="Detail" />
// //         <Tab title="Settings" />
// //       </nav>
// //       {/* <section className="banners">
// //         <Banner iconPath={im2} amount="$1K" description="Life Time Courses Commission" />
// //         <Banner iconPath={im3} amount="$800.0" description="Life Time Received Commission" />
// //         <Banner iconPath={im4} amount="$200.00" description="Life Time Pending Commission" />
// //       </section>
// //       <Table /> */}
// //     </div>
// //   );
// // };

// // export default Courses;
// import React from 'react';
// import Tab from '../Tab/Tab';
// // import Banner from '../Banner/Banner';
// // import Table from '../Table/Table';
// import im1 from '../../../../../assets/icon-horizontal-dots.svg';
// // import im2 from '../../../../../assets/icon-graph.svg';
// // import im3 from '../../../../../assets/icon-graph-2.svg';
// // import im4 from '../../../../../assets/icon-graph-3.svg';

// const Courses: React.FC = () => {
//   return (
//     <div className="p-4 font-sans">
//       {/* Header Section */}
//       <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//         <h1 className="text-lg md:text-2xl font-semibold">NCERT Solutions for Class 12 Chemistry</h1>
//         <img src={im1} alt="menu" className="mt-2 md:mt-0 w-6 h-6 md:w-8 md:h-8" />
//       </header>

//       {/* Tab Navigation */}
//       <nav className="flex flex-wrap gap-2 my-4">
//         <Tab title="Commission" active />
//         <Tab title="Reviews" />
//         <Tab title="Customer" />
//         <Tab title="Chapters" />
//         <Tab title="Promotion" />
//         <Tab title="Detail" />
//         <Tab title="Settings" />
//       </nav>

//       {/* Banner Section - commented out */}
//       {/* <section className="flex flex-wrap gap-6 mb-6">
//         <Banner iconPath={im2} amount="$1K" description="Life Time Courses Commission" />
//         <Banner iconPath={im3} amount="$800.0" description="Life Time Received Commission" />
//         <Banner iconPath={im4} amount="$200.00" description="Life Time Pending Commission" />
//       </section>
//       <Table /> */}
//     </div>
//   );
// };

// export default Courses;

// import React, { useState } from 'react';
// import Tab from '../Tab/Tab';
// import im1 from '../../../../../assets/icon-horizontal-dots.svg';

// const Courses: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>('Reviews'); // Track the active tab

//   // Function to render the respective component based on the active tab
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'Commission':
//         return <div>Commission Component Content</div>;
//       case 'Reviews':
//         return <div>Reviews Component Content</div>;
//       case 'Customer':
//         return <div>Customer Component Content</div>;
//       case 'Chapters':
//         return <div>Chapters Component Content</div>;
//       case 'Promotion':
//         return <div>Promotion Component Content</div>;
//       case 'Detail':
//         return <div>Detail Component Content</div>;
//       case 'Settings':
//         return <div>Settings Component Content</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-4 font-sans">
//       {/* Header Section */}
//       <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//         <h1 className="text-lg md:text-2xl font-semibold">NCERT Solutions for Class 12 Chemistry</h1>
//         <img src={im1} alt="menu" className="mt-2 md:mt-0 w-6 h-6 md:w-8 md:h-8" />
//       </header>

//       {/* Tab Navigation */}
//       <nav className="flex flex-wrap gap-2 my-4 border-b border-gray-300">
//         {/* <Tab title="Commission" active={activeTab === 'Commission'} onClick={() => setActiveTab('Commission')} /> */}
//         <Tab title="Reviews" active={activeTab === 'Reviews'} onClick={() => setActiveTab('Reviews')} />
//         <Tab title="Customer" active={activeTab === 'Customer'} onClick={() => setActiveTab('Customer')} />
//         <Tab title="Chapters" active={activeTab === 'Chapters'} onClick={() => setActiveTab('Chapters')} />
//         <Tab title="Promotion" active={activeTab === 'Promotion'} onClick={() => setActiveTab('Promotion')} />
//         <Tab title="Detail" active={activeTab === 'Detail'} onClick={() => setActiveTab('Detail')} />
//         <Tab title="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
//       </nav>

//       {/* Render the active tab content */}
//       <section className="mt-4">
//         {renderTabContent()}
//       </section>
//     </div>
//   );
// };

// export default Courses;

import React from 'react';
import { NavLink } from 'react-router-dom';
import im1 from '../../../../../assets/icon-horizontal-dots.svg';
import Tab from '../Tab/Tab';

const Courses: React.FC = () => {
  return (
    <div className="p-4 font-sans ml-58">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-lg md:text-2xl font-semibold">NCERT Solutions for Class 12 Chemistry</h1>
        <img src={im1} alt="menu" className="mt-2 md:mt-0 w-6 h-6 md:w-8 md:h-8" />
      </header>

      {/* Tab Navigation */}
      <nav className="flex flex-wrap gap-4 my-4 border-b border-gray-300">
        <NavLink
          to="/commission"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Commission"  />     
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Reviews"  />
        </NavLink>
        <NavLink
          to="/customer"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Customer"  />
        </NavLink>
        <NavLink
          to="/chapter"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Chapters"  />
        </NavLink>
        <NavLink
          to="/promotion"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Promotion"  />
       
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Detail"  />
       
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? 'active' : ''}`
          }
        >
       <Tab title="Settings"  />
        </NavLink>
      </nav>
      {/* Content will be rendered by React Router */}
      <section className="mt-4">
        {/* React Router will render content based on active route */}
      </section>
    </div>
  );
};

export default Courses;
