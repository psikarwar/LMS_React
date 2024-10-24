// import React from 'react';
// import './MyCourses.css'; // Import custom CSS for additional styles
// import Pagination from '../Pagination/Pagination';
// // import search from '../../../assets/myassets/search.svg';
// import { search,iconfilter,icondown} from '../../images';
// import { rectangle1080 } from '../../images';
// import DesignCourse from '../CategoryPage/DesignCourse/DesignCourse';
// const courses = [
//   {
//     title: "Beginner’s Guide to Design",
//     author: "Ronald Richards",
//     rating: 5,
//     totalRatings: 1200,
//     totalHours: "22",
//     lectures: 155,
//     level: "Beginner",
//     price: "149.9",
//     imageSrc: rectangle1080
//   },
//   {
//     title: "Beginner’s Guide to Design",
//     author: "Ronald Richards",
//     rating: 5,
//     totalRatings: 1200,
//     totalHours: "22",
//     lectures: 155,
//     level: "Beginner",
//     price: "149.9",
//     imageSrc: rectangle1080
//   },
//   {
//     title: "Beginner’s Guide to Design",
//     author: "Ronald Richards",
//     rating: 5,
//     totalRatings: 1200,
//     totalHours: "22",
//     lectures: 155,
//     level: "Beginner",
//     price: "149.9",
//     imageSrc: rectangle1080
//   },
//   {
//     title: "Beginner’s Guide to Design",
//     author: "Ronald Richards",
//     rating: 5,
//     totalRatings: 1200,
//     totalHours: "22",
//     lectures: 155,
//     level: "Beginner",
//     price: "149.9",
//     imageSrc: rectangle1080
//   },
// ];

// const MyCourses: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <main className="flex-1 flex px-2 py-4">
//         <section className="flex-1">
//           <header className="flex justify-between items-center mb-5">
//             <h2 className="text-2xl font-bold">Courses (12)</h2>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center border border-gray-300 rounded-lg p-2">
//                 <input
//                   type="text"
//                   placeholder="Search User"
//                   className="outline-none px-2 py-1"
//                 />
//                 <img src={search} alt="Search" className="w-5 h-5 ml-2" />
//               </div>
//               <div className="flex space-x-2">
//                 <button className="flex items-center border border-gray-300 rounded-lg py-2 px-3">
//                   Sort By
//                   <img src={icondown} alt="Sort" className="w-4 h-4 ml-1" />
//                 </button>
//                 <button className="flex items-center border border-gray-300 rounded-lg py-2 px-3">
//                   <img src={iconfilter} alt="Filter" className="w-4 h-4 mr-1" />
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </header>

//           <div className="flex flex-wrap gap-4">
//           {courses.slice(0, 4).map((course, index) => (
//             <DesignCourse
//               key={index}
//               title={course.title}
//               author={course.author}
//               rating={course.rating}
//               totalRatings={course.totalRatings}
//               totalHours={course.totalHours}
//               lectures={course.lectures}
//               level={course.level}
//               price={course.price}
//               imageSrc={course.imageSrc}
//             />
//           ))}
//           </div>

//           <Pagination />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default MyCourses;
import React from 'react';
import './MyCourses.css'; // Custom CSS for additional styles
import Pagination from '../Pagination/Pagination';
import { search, iconfilter, icondown, rectangle1080 } from '../../images';
import DesignCourse from '../CategoryPage/DesignCourse/DesignCourse';

// Course data
const courses = [
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: rectangle1080
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: rectangle1080
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: rectangle1080
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: rectangle1080
  },
];

const MyCourses: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1 flex px-2 py-4 sm:px-6 lg:px-8">
        <section className="flex-1">
          {/* Header section */}
          <header className="flex flex-col sm:flex-row justify-between items-center mb-5">
            <h2 className="text-xl sm:text-2xl font-bold">Courses (12)</h2>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search Bar */}
              <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search User"
                  className="outline-none px-2 py-1 w-full sm:w-auto"
                />
                <img src={search} alt="Search" className="w-5 h-5 ml-2" />
              </div>

              {/* Sort & Filter Buttons */}
              <div className="flex space-x-2">
                <button className="flex items-center border border-gray-300 rounded-lg py-2 px-3">
                  Sort By
                  <img src={icondown} alt="Sort" className="w-4 h-4 ml-1" />
                </button>
                <button className="flex items-center border border-gray-300 rounded-lg py-2 px-3">
                  <img src={iconfilter} alt="Filter" className="w-4 h-4 mr-1" />
                  Filter
                </button>
              </div>
            </div>
          </header>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.slice(0, 4).map((course, index) => (
              <DesignCourse
                key={index}
                title={course.title}
                author={course.author}
                rating={course.rating}
                totalRatings={course.totalRatings}
                totalHours={course.totalHours}
                lectures={course.lectures}
                level={course.level}
                price={course.price}
                imageSrc={course.imageSrc}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination />
        </section>
      </main>
    </div>
  );
};

export default MyCourses;
