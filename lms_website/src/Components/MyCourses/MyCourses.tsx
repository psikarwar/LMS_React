import React from 'react';
import './MyCourses.css'; // Import custom CSS for styling
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
        <Header/>
      
      <main className="main-content">
        {/* <aside className="profile-sidebar">
          <img src="./assets/ellipse-53.svg" alt="Profile" className="profile-image" />
          <h2>John Doe</h2>
          <button className="button">Share Profile</button>
          <ul className="sidebar-menu">
            <li>Profile</li>
            <li className="active">My Courses</li>
            <li>Teachers</li>
            <li>Message</li>
            <li>My Reviews</li>
          </ul>
        </aside> */}
        <Profile/>
        <section className="courses-section">
          <header className="section-header">
            <h2>Courses (12)</h2>
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

          <div className="courses-list">
            {[...Array(12)].map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>

          <Pagination/>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

const CourseCard: React.FC = () => (
  <div className="course-card">
    <img src="./assets/rectangle-1080.svg" alt="Course" />
    <div className="card-content">
      <h3>Beginner’s Guide to Design</h3>
      <p>By Ronald Richards</p>
      <img src="./assets/progress-bar.svg" alt="Progress" className="progress-bar" />
      <div className="ratings">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={`./assets/icon-${index + 1}.svg`} alt="Star" />
        ))}
        <span>(1200 Ratings)</span>
      </div>
    </div>
  </div>
);


export default App;
