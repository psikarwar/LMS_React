import React from 'react';

// Import the necessary components
import CourseDesign from './CourseDesign/CourseDesign';
import CourseImg from './CourseImg/CourseImg';
import CourseMenu from './CourseMenu/CourseMenu';
import CourseDescription from './CourseDescription/CourseDescription';
import CourseInstructor from './CourseInstructor/CourseInstructor';
import CourseSyllabus from './CourseSyllabus/CourseSyllabus';
import CourseReviews from './CourseReviews/CourseReviews';
import CoursesLike from './CoursesLike/CoursesLike';
import Feedback from '../../HomeScreen/stats/Feedback/Feedback';

const CoursePage: React.FC = () => {
  // Syllabus data
  const syllabusData = [
    { title: 'Introduction to UX Design', lessons: 5, duration: '1 hour' },
    { title: 'Basics of User-Centered Design', lessons: 5, duration: '1 hour' },
    { title: 'Elements of User Experience', lessons: 5, duration: '1 hour' },
    { title: 'Visual Design Principles', lessons: 5, duration: '1 hour' },
  ];

  // Reviews data
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
  ];

  return (
    <div className="w-full bg-white">
      {/* Responsive layout for CourseDesign, CourseMenu, and CourseImg */}
      <div className="flex flex-col lg:flex-row justify-between items-start p-4 lg:p-6">
        {/* Left section with Course Design, Menu, Description, etc */}
        <div className="lg:w-2/3 w-full">
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
          
          {/* Adjusted CourseMenu width and margin for responsiveness */}
          <div className="mt-4 lg:mt-6 lg:w-3/4 mb-4">
            <CourseMenu />
          </div>
          
          <CourseDescription />

          {/* CourseInstructor Section */}
          <CourseInstructor
            name="Ronald Richards"
            role="UI/UX Designer"
            imageSrc="elipse4img"
            reviews={40445}
            students={500}
            courses={15}
            description="With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences."
          />
          
          {/* Syllabus Section */}
          <CourseSyllabus syllabus={syllabusData} />
          
          {/* Reviews Section */}
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
        </div>

        {/* Right section with Course Image */}
        <div className="lg:w-1/3 w-full flex flex-col items-center mt-6 lg:mt-0">
          <CourseImg className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto" />
        </div>
      </div>

      {/* Full width Feedback and CoursesLike sections */}
      <div className="w-full mt-6">
        <Feedback />
      </div>

      <div className="w-full mt-6">
        <CoursesLike />
      </div>
    </div>
  );
};

export default CoursePage;
