import React from 'react';
import StatsSection from './stats/stats';
import TopCategories from './Topcategories/TopCategories';
import DesignCourse from '../Frontend/CategoryPage/DesignCourse/DesignCourse';
import PopularMentor from '../Frontend/CategoryPage/PopularMentor/PopularMentor';
import Feedback from './stats/Feedback/Feedback';
import EducationSection from './Educationsection/Education';
import { rectangle1080 } from '../images';
import { rectangle1136 } from '../images';
// Sample data for courses
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

// Sample data for mentors
const mentors = [
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: rectangle1136 // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
     image: rectangle1136 // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
     image: rectangle1136 // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: rectangle1136 // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: rectangle1136 // replace with actual image path
  },
];

const HomeScreen: React.FC = () => {
  return (
    <>
      {/* Wrapper with responsive padding and margin */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <StatsSection />

        {/* Top Categories Section */}
        <TopCategories />

        {/* Title for Top Courses */}
        <h2 className="font-inter font-semibold text-2xl leading-[150%] text-gray-900 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          Top Courses
        </h2>

        {/* Responsive grid for courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {/* Render top 4 courses */}
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

        {/* Popular Mentor Section */}
        <h2 className="font-inter font-semibold text-2xl leading-[150%] text-gray-900 mt-12">
          
        </h2>
        <div className="mt-6">
          <PopularMentor mentors={mentors} />
        </div>

        {/* Feedback Section */}
        <div className="mt-12">
          <Feedback />
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <EducationSection />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
