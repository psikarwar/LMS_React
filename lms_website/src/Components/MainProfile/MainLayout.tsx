import React, { useState } from 'react';
import Header from '../Header/Header'; // Assuming you have a Header component
import Footer from '../Footer/Footer'; // Assuming you have a Footer component
import Profile from '../Profile/Profile'; // Profile component
import ProfilePage from '../ProfilePage/ProfilePage';
import MyCourses from '../MyCourses/MyCourses';
import TeachersMenu from '../TeachersMenu/TeachersMenu';
import MessagesMenu from '../MessageMenu/MessagesMenu';
import MyReviewMenu from '../MyReviewMenu/MyReviewMenu';

const MainLayout: React.FC = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('Teachers');

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
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Profile Component */}
        <Profile setActiveSection={setActiveSection} />

        {/* Dynamic Content Section */}
        <section className="flex-1 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
          {renderActiveComponent()}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

// import React, { useState } from 'react';
// import Header from '../Header/Header';  // Assuming you have a Header component
// import Footer from '../Footer/Footer';  // Assuming you have a Footer component
// import Profile from '../Profile/Profile'; // Profile component
// import ProfilePage from '../ProfilePage/ProfilePage';
// import MyCourses from '../MyCourses/MyCourses';
// import TeachersMenu from '../TeachersMenu/TeachersMenu';
// import MessagesMenu from '../MessageMenu/MessagesMenu';
// import MyReviewMenu from '../MyReviewMenu/MyReviewMenu';

// const MainLayout: React.FC = () => {
//   // State to track which section is active
//   const [activeSection, setActiveSection] = useState('Profile');

//   // Function to render the content based on the selected section
//   const renderActiveComponent = () => {
//     switch (activeSection) {
//       case 'Profile':
//         return <ProfilePage/>;
//       case 'My Courses':
//         return <MyCourses/>;
//       case 'Teachers':
//         return <TeachersMenu/>;
//       case 'Message':
//         return <MessagesMenu/>;
//       case 'My Reviews':
//         return <MyReviewMenu/>;
//       default:
//         return <p>Select a section to display its content.</p>;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1 flex px-20 py-10">
//         {/* Profile Component */}
//         <Profile setActiveSection={setActiveSection} />

//         {/* Dynamic Content Section */}
//         <section className="flex-1 bg-white p-6 rounded-lg ml-10 shadow-md">
//           {renderActiveComponent()}
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
