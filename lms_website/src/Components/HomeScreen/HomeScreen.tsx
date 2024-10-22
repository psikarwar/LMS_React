import React from 'react';


import StatsSection from './stats/stats';
import TopCategories from './Topcategories/TopCategories';
import DesignCourse from '../Frontend/CategoryPage/DesignCourse/DesignCourse';
import PopularMentor from '../Frontend/CategoryPage/PopularMentor/PopularMentor';
import Feedback from './stats/Feedback/Feedback';
import EducationSection from './Educationsection/Education';


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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
  },
  // Add more courses here if needed
];

// Sample data for mentors
const mentors = [
 {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
];

const HomeScreen: React.FC = () => {
  return (
    <>
       <div
        className="p-1 "
        style={{ marginLeft: '1rem' }}
      >
     
      <StatsSection />
        <TopCategories />
        </div>

      <h2
        className="font-inter font-semibold text-2xl leading-[150%] text-gray-900"
        style={{ marginLeft: '3rem' }}
      >
        Top Courses
      </h2>
      
      <div
        className="p-4 grid grid-cols-4 gap-11 w-fit h-fit"
        style={{ marginLeft: '2rem' }}
      >
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

      {/* Add the PopularMentor component here */}
      
      <div style={{ marginLeft: '1rem' }}
      >
        
        <PopularMentor mentors={mentors} />
      </div>
      <Feedback/>

      <EducationSection/>
     

    </>
  );
};

export default HomeScreen;
