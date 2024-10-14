// import React from 'react';
// import './TeachersMenu.css'; // Import custom CSS for additional styling
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import Profile from '../Profile/Profile';
// import InstructorCard from '../InstructorCard/InstructorCard';


// const App: React.FC = () => {
//     const instructors = [
//   {
//     name: 'Ronald Richards',
//     title: 'UI/UX Designer',
//     imageSrc: './assets/rectangle-1136.svg',
//     mailIconSrc: './assets/icon-mail.svg',
//   },
//   {
//     name: 'Jane Doe',
//     title: 'Frontend Developer',
//     imageSrc: './assets/rectangle-1137.svg',
//     mailIconSrc: './assets/icon-mail.svg',
//   },
//   {
//     name: 'John Smith',
//     title: 'Backend Developer',
//     imageSrc: './assets/rectangle-1138.svg',
//     mailIconSrc: './assets/icon-mail.svg',
//   },
// ];

//   return (
//     <div className="app">
//       {/* <header className="app-header">
//         <div className="logo">
//           <img src="./assets/logo.svg" alt="Logo" />
//           <span>Byway</span>
//         </div>
//         <nav className="app-nav">
//           <span>Categories</span>
//           <div className="search-bar">
//             <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" />
//             <input type="text" placeholder="Search courses" />
//           </div>
//           <span>Teach on Byway</span>
//           <div className="icons">
//             <img src="./assets/heart.svg" alt="Favorite" />
//             <img src="./assets/icon-cart.svg" alt="Cart" />
//             <img src="./assets/bell-01.svg" alt="Notifications" />
//             <img className="profile-icon" src="./assets/ellipse-4.svg" alt="Profile" />
//             <span className="initials">J</span>
//           </div>
//         </nav>
//       </header> */}
//       <Header/>
//       <main className="main-content">
//         {/* <aside className="profile-sidebar">
//           <img src="./assets/ellipse-53.svg" alt="Profile" className="profile-image" />
//           <h2>John Doe</h2>
//           <button className="button">Share Profile</button>
//           <ul className="sidebar-menu">
//             <li>Profile</li>
//             <li>My Courses</li>
//             <li className="active">Teachers</li>
//             <li>Message</li>
//             <li>My Reviews</li>
//           </ul>
//         </aside> */}
//         <Profile/>
        
//         <section className="teachers-section">
//           <header className="section-header">
//             <h2>Teachers (12)</h2>
//             <div className="controls">
//               <div className="search-control">
//                 <input type="text" placeholder="Search User" />
//                 <img src="./assets/search.svg" alt="Search" />
//               </div>
//               <div className="sort-filter">
//                 <button className="button">
//                   Sort By
//                   <img src="./assets/icon-down-chevron.svg" alt="Sort" />
//                 </button>
//                 <button className="button">
//                   <img src="./assets/icon-filter.svg" alt="Filter" />
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </header>

//           {/* <div className="instructor-list">
//             {[...Array(8)].map((_, index) => (
//               <InstructorCard key={index} />
//             ))}

//           </div> */}
//            <div className="instructor-list">
//     {instructors.map((instructor, index) => (
//       <InstructorCard
//         key={index}
//         name={instructor.name}
//         title={instructor.title}
//         imageSrc={instructor.imageSrc}
//         mailIconSrc={instructor.mailIconSrc}
//       />
//     ))}
//   </div>

//           <Pagination />
//         </section>
//       </main>
// {/* 
//       <footer className="app-footer">
//         <div className="footer-content">
//           <div className="footer-section">
//             <img src="./assets/image-4.svg" alt="Logo" />
//             <p>
//               Empowering learners through accessible and engaging online education.
//               Byway is a leading online learning platform dedicated to providing
//               high-quality, flexible, and affordable educational experiences.
//             </p>
//           </div>
//           <div className="footer-links">
//             <h3>Get Help</h3>
//             <ul>
//               <li>Contact Us</li>
//               <li>Latest Articles</li>
//               <li>FAQ</li>
//             </ul>
//           </div>
//           <div className="footer-links">
//             <h3>Programs</h3>
//             <ul>
//               <li>Art & Design</li>
//               <li>Business</li>
//               <li>IT & Software</li>
//               <li>Languages</li>
//               <li>Programming</li>
//             </ul>
//           </div>
//           <div className="footer-contact">
//             <h3>Contact Us</h3>
//             <p>Address: 123 Main Street,Anytown,CA 12345</p>
//             <p>Tel: +(123) 456-7890</p>
//             <p>Mail: bywayedu@webkul.in</p>
//           </div>
//         </div>
//       </footer> */}
//       <Footer/>
//     </div>
//   );
// };

// // const InstructorCard: React.FC = () => (
// //   <div className="instructor-card">
// //     <img src="./assets/rectangle-1136.svg" alt="Instructor" />
// //     <div className="card-content">
// //       <h3>Ronald Richards</h3>
// //       <p>UI/UX Designer</p>
// //     </div>
// //     <button className="button send-message">
// //       Send Message
// //       <img src="./assets/icon-mail.svg" alt="Mail Icon" />
// //     </button>
// //   </div>
// // );

// const Pagination: React.FC = () => (
//   <div className="pagination">
//     <button className="pagination-button">
//       <img src="./assets/icon-left-chevron.svg" alt="Previous" />
//     </button>
//     <button className="pagination-button active">1</button>
//     <button className="pagination-button">2</button>
//     <button className="pagination-button">3</button>
//     <button className="pagination-button">
//       <img src="./assets/chevron-right.svg" alt="Next" />
//     </button>
//   </div>
// );

// export default App;

import React from 'react';
import './TeachersMenu.css'; // Import custom CSS for additional styling
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import InstructorCard from '../InstructorCard/InstructorCard';
import Pagination from '../Pagination/Pagination';

interface Instructor {
  name: string;
  title: string;
  imageSrc: string;
  mailIconSrc: string;
}

const TeachersMenu: React.FC = () => {
  const instructors: Instructor[] = [
    {
      name: 'Ronald Richards',
      title: 'UI/UX Designer',
      imageSrc: './assets/rectangle-1136.svg',
      mailIconSrc: './assets/icon-mail.svg',
    },
    {
      name: 'Jane Doe',
      title: 'Frontend Developer',
      imageSrc: './assets/rectangle-1137.svg',
      mailIconSrc: './assets/icon-mail.svg',
    },
    {
      name: 'John Smith',
      title: 'Backend Developer',
      imageSrc: './assets/rectangle-1138.svg',
      mailIconSrc: './assets/icon-mail.svg',
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Profile />
        <section className="teachers-section">
          <header className="section-header">
            <h2>Teachers (12)</h2>
            <div className="controls">
              <div className="search-control">
                <input type="text" placeholder="Search User" />
                <img src="./assets/search.svg" alt="Search" />
              </div>
              <div className="sort-filter">
                <button className="button">
                  Sort By
                  <img src="./assets/icon-down-chevron.svg" alt="Sort" />
                </button>
                <button className="button">
                  <img src="./assets/icon-filter.svg" alt="Filter" />
                  Filter
                </button>
              </div>
            </div>
          </header>

          <div className="instructor-list">
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={index}
                name={instructor.name}
                title={instructor.title}
                imageSrc={instructor.imageSrc}
                mailIconSrc={instructor.mailIconSrc}
              />
            ))}
          </div>

          <Pagination/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeachersMenu;
