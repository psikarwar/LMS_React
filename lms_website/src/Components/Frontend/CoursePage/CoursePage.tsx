import React from 'react';

// Import the necessary components
import CourseCustomer from './CourseCustomer/CourseCustomer'; 
import CourseDesign from './CourseDesign/CourseDesign';
import CourseImg from './CourseImg/CourseImg';
import CourseMenu from './CourseMenu/CourseMenu';
import CourseDescription from './CourseDescription/CourseDescription';
import CourseInstructor from './CourseInstructor/CourseInstructor';
import CourseSyllabus from './CourseSyllabus/CourseSyllabus';
import CourseReviews from './CourseReviews/CourseReviews';
import CoursesLike from './CoursesLike/CoursesLike';

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
    // Add more reviews here...
  ];

  return (
    <div className="w-full bg-white">
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
          <CourseDescription />
          <CourseInstructor
            name="Ronald Richards"
            role="UI/UX Designer"
            imageSrc="./assets/ellipse-4.svg"
            reviews={40445}
            students={500}
            courses={15}
            description="With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences."
          />
          <CourseSyllabus syllabus={syllabusData} />
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
          
          {/* Adding CourseCustomer */}
          <CourseCustomer />

          {/* Adding CoursesLike below CourseCustomer */}
          <CoursesLike />
        </div>

        <div className="w-1/3 flex flex-col items-center">
          <CourseImg />
          <div className="mt-6 w-full">
            <CourseMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
