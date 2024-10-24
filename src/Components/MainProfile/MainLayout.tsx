// import React, { useState } from 'react';
// import Profile from '../Frontend/Profile/Profile'; // Profile component
// import ProfilePage from '../Frontend/ProfilePage/ProfilePage';
// import MyCourses from '../Frontend/MyCourses/MyCourses';
// import TeachersMenu from '../Frontend/TeachersMenu/TeachersMenu';
// import MessagesMenu from '../Frontend/MessageMenu/MessagesMenu';
// import MyReviewMenu from '../Frontend/MyReviewMenu/MyReviewMenu';

// const MainLayout: React.FC = () => {
//   // State to track which section is active
//   const [activeSection, setActiveSection] = useState('Teachers'); // Default to 'Teachers'

//   // Function to render the content based on the selected section
//   const renderActiveComponent = () => {
//     switch (activeSection) {
//       case 'Profile':
//         return <ProfilePage />;
//       case 'My Courses':
//         return <MyCourses />;
//       case 'Teachers':
//         return <TeachersMenu />;
//       case 'Message':
//         return <MessagesMenu />;
//       case 'My Reviews':
//         return <MyReviewMenu />;
//       default:
//         return <p>Select a section to display its content.</p>;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <main className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
//         {/* Profile Sidebar with setActiveSection and activeSection props */}
//         <Profile activeSection={activeSection} setActiveSection={setActiveSection} />

//         {/* Dynamic Content Section */}
//         <section className="flex-1 bg-white p-4 rounded-lg shadow-md">
//           {renderActiveComponent()}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default MainLayout;
import React, { useState } from 'react';
import Profile from '../Frontend/Profile/Profile'; // Profile component
import ProfilePage from '../Frontend/ProfilePage/ProfilePage';
import MyCourses from '../Frontend/MyCourses/MyCourses';
import TeachersMenu from '../Frontend/TeachersMenu/TeachersMenu';
import MessagesMenu from '../Frontend/MessageMenu/MessagesMenu';
import MyReviewMenu from '../Frontend/MyReviewMenu/MyReviewMenu';

const MainLayout: React.FC = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('Teachers'); // Default to 'Teachers'

  // Function to render the content based on the selected section
  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'Profile':
        return <ProfilePage />;
      case 'My Courses':
        return <MyCourses />;
      case 'Teachers':
        return <TeachersMenu />;
      case 'Message':
        return <MessagesMenu />;
      case 'My Reviews':
        return <MyReviewMenu />;
      default:
        return <p>Select a section to display its content.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Profile Sidebar */}
        <Profile activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Dynamic Content Section */}
        <section className="flex-1 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
          {renderActiveComponent()}
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
