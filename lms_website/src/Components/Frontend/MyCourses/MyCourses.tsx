// import React from 'react';
// import './MyCourses.css'; // Import custom CSS for styling
// import Pagination from '../Pagination/Pagination';


// const MyCourses: React.FC = () => {
//   return (
//     <div className="app">
       
      
//       <main className="main-content">
//         <section className="courses-section">
//           <header className="section-header">
//             <h2>Courses (12)</h2>
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

//           <div className="courses-list">
//             {[...Array(12)].map((_, index) => (
//               <CourseCard key={index} />
//             ))}
//           </div>

//           <Pagination/>
//         </section>
//       </main>
//     </div>
//   );
// };

// const CourseCard: React.FC = () => (
//   <div className="course-card">
//     <img src="./assets/rectangle-1080.svg" alt="Course" />
//     <div className="card-content">
//       <h3>Beginner’s Guide to Design</h3>
//       <p>By Ronald Richards</p>
//       <img src="./assets/progress-bar.svg" alt="Progress" className="progress-bar" />
//       <div className="ratings">
//         {[...Array(5)].map((_, index) => (
//           <img key={index} src={`./assets/icon-${index + 1}.svg`} alt="Star" />
//         ))}
//         <span>(1200 Ratings)</span>
//       </div>
//     </div>
//   </div>
// );


// export default MyCourses;
import React from 'react';
import './MyCourses.css'; // Import custom CSS for additional styles
import Pagination from '../Pagination/Pagination';
import search from '../../../assets/myassets/search.svg';


const MyCourses: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1 flex px-2 py-4">
        <section className="flex-1">
          <header className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Courses (12)</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <input
                  type="text"
                  placeholder="Search User"
                  className="outline-none px-2 py-1"
                />
                <img src={search} alt="Search" className="w-5 h-5 ml-2" />
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center border border-gray-300 rounded-lg py-2 px-3">
                  Sort By
                  <img src="./assets/icon-down-chevron.svg" alt="Sort" className="w-4 h-4 ml-1" />
                </button>
                <button className="flex items-center border border-gray-300 rounded-lg py-2 px-3">
                  <img src="./assets/icon-filter.svg" alt="Filter" className="w-4 h-4 mr-1" />
                  Filter
                </button>
              </div>
            </div>
          </header>

          <div className="flex flex-wrap gap-4">
            {[...Array(12)].map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>

          <Pagination />
        </section>
      </main>
    </div>
  );
};

const CourseCard: React.FC = () => (
  <div className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3">
    <img src="./assets/rectangle-1080.svg" alt="Course" className="w-full rounded-lg mb-4" />
    <div className="card-content text-center">
      <h3 className="text-lg font-semibold">Beginner’s Guide to Design</h3>
      <p className="text-gray-600">By Ronald Richards</p>
      <img src="./assets/progress-bar.svg" alt="Progress" className="my-2" />
      <div className="ratings flex justify-center items-center">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={`./assets/icon-${index + 1}.svg`} alt="Star" className="w-4 h-4 mr-1" />
        ))}
        <span className="text-gray-600">(1200 Ratings)</span>
      </div>
    </div>
  </div>
);

export default MyCourses;
