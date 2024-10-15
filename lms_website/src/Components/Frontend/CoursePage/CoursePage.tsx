import React from 'react';
// Import the missing components
// import Header from '../../Header/Header'; // Adjust the path based on your project structure
// import Footer from '../../Footer/Footer'; // Adjust the path

import CourseCustomer from './CourseCustomer/CourseCustomer'; // Import the CourseCustomer component
import DesignCourse from '../CategoryPage/DesignCourse/DesignCourse'; // Import the DesignCourse component
import CourseDesign from './CourseDesign/CourseDesign';
import CourseImg from './CourseImg/CourseImg';
import CourseMenu from './CourseMenu/CourseMenu'; // Importing the CourseMenu component
import CourseDescription from './CourseDescription/CourseDescription'; // Importing the CourseDescription component
import CourseInstructor from './CourseInstructor/CourseInstructor';
import CourseSyllabus from './CourseSyllabus/CourseSyllabus'; // Import the CourseSyllabus component
import CourseReviews from './CourseReviews/CourseReviews'; // Import the CourseReviews component

const CoursePage: React.FC = () => {
  // Syllabus data
  const syllabusData = [
    { title: 'Introduction to UX Design', lessons: 5, duration: '1 hour' },
    { title: 'Basics of User-Centered Design', lessons: 5, duration: '1 hour' },
    { title: 'Elements of User Experience', lessons: 5, duration: '1 hour' },
    { title: 'Visual Design Principles', lessons: 5, duration: '1 hour' },
  ];

  // Reviews data (sample data for demonstration)
  const reviewsData = [
    {
      reviewerName: 'Mark Doe',
      rating: 5,
      reviewDate: '22nd March, 2024',
      reviewText: 'This course has transformed my approach to UX design!',
    },
    {
      reviewerName: 'Jane Smith',
      rating: 4,
      reviewDate: '15th April, 2024',
      reviewText: 'Very informative and engaging course.',
    },
    {
      reviewerName: 'Jane Smith',
      rating: 4,
      reviewDate: '15th April, 2024',
      reviewText: 'Very informative and engaging course.',
    },
    // Add more reviews here...
  ];

  return (
    <div className="w-full bg-white">
      {/* Render the imported components */}
      {/* <Header /> */}
      {/* <Breadcrumbs /> */}
      
      {/* CourseDesign and CourseImg layout */}
      <div className="flex justify-between items-start p-6">
        <div className="w-2/3">
          <CourseDesign
            title="Introduction to User Experience Design"
            description="This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape."
            ratingScore={4.6}
            ratingCount="651651"
            totalHours="10"
            lectures="30"
            levels="Beginner"
            creatorName="John Doe"
            languages={['English', 'Spanish']}
          />
          
          {/* Adding CourseDescription below CourseDesign */}
          <CourseDescription />
          
          {/* Add CourseInstructor component below CourseDescription */}
          <CourseInstructor
            name="Ronald Richards"
            role="UI/UX Designer"
            imageSrc="./assets/ellipse-4.svg"
            reviews={40445}
            students={500}
            courses={15}
            description="With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences."
          />
          
          {/* Adding CourseSyllabus below CourseInstructor */}
          <CourseSyllabus syllabus={syllabusData} />
          
          {/* Adding CourseReviews below CourseSyllabus */}
          <CourseReviews
            averageRating={4.6}
            totalReviews={146951}
            ratingBreakdown={[
              { percentage: 80, rating: 5 },
              { percentage: 10, rating: 4 },
              { percentage: 5, rating: 3 },
              { percentage: 3, rating: 2 },
              { percentage: 2, rating: 1 },
            ]}
            reviews={reviewsData}
          />

          {/* Adding CourseCustomer below CourseReviews */}
          <CourseCustomer />
          
          {/* Adding DesignCourse below CourseCustomer */}
          <DesignCourse
            title="Advanced UX Techniques"
            author="Alice Johnson"
            totalRatings={1024}
            totalHours="8"
            lectures={15}
            level="Intermediate"
            price="199.99"
            imageSrc="./assets/course-image.svg" // Adjust the path based on your project structure
            rating={0}          />
        </div>

        {/* CourseImg and centered CourseMenu */}
        <div className="w-1/3 flex flex-col items-center">
          <CourseImg />
          
          {/* Center the CourseMenu below CourseImg */}
          <div className="mt-6 w-full">
            <CourseMenu />
          </div>
        </div>
      </div>
      
      {/* Render the additional sections */}
      {/* <ReviewsSection /> */}
      {/* <CustomerFeedback /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default CoursePage;
