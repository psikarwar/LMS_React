import React from 'react';
// import Header from '../Header/Header'; // Uncomment when Header component is available
import MentorInstructor from './MentorInstructor/MentorInstructor'; // Import the MentorInstructor component
import MentorArea from './MentorArea/MentorArea'; // Import the MentorArea component
import MentorCourse from './MentorCourse/MentorCourse'; // Import the MentorCourse component
import CourseReviews from '../Frontend/CoursePage/CourseReviews/CourseReviews'; // Import the CourseReviews component
// import Footer from '../Footer/Footer'; // Uncomment when Footer component is available

const MentorPage: React.FC = () => {
  // Sample data for CourseReviews
  const averageRating = 4.5;
  const totalReviews = 250;
  const ratingBreakdown = [
    { percentage: 60, rating: 5 },
    { percentage: 20, rating: 4 },
    { percentage: 10, rating: 3 },
    { percentage: 5, rating: 2 },
    { percentage: 5, rating: 1 },
  ];
  const reviews = [
    {
      reviewerName: "John Doe",
      rating: 5,
      reviewDate: "October 10, 2024",
      reviewText: "This course was fantastic! Highly recommend it!",
    },
    {
      reviewerName: "Jane Smith",
      rating: 4,
      reviewDate: "October 9, 2024",
      reviewText: "Great content, but I wish there were more examples.",
    },
    // Add more reviews as needed
  ];

  return (
    <>
      {/* Header Component */}
      {/* <Header /> */}

      {/* Mentor Page Content */}
      <div className="mentor-page-content flex flex-col md:flex-row md:gap-4">
        {/* Left side - MentorInstructor and MentorArea components */}
        <div className="w-full md:w-1/4 p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md">
          <MentorInstructor
            name="Ronald Richards"
            role="Instructor"
            description="Web developer, UX/UI Designer, and Teacher"
            totalStudents={1000}
            reviews={154}
            imageSrc={''}
          />

          {/* Add MentorArea component below MentorInstructor */}
          <MentorArea
            mentorName="Ronald Richards"
            aboutDescription="Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results."
            expertiseAreas={[
              'User Experience (UX) Design',
              'User Interface (UI) Design',
              'Information Architecture',
              'Interaction Design',
              'Visual Design',
              'Usability Testing',
              'Wireframing and Prototyping',
              'Design Thinking',
            ]}
            experienceDescription="Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms."
          />

          {/* Add MentorCourse component below MentorArea */}
          <MentorCourse />

          {/* Add CourseReviews component below MentorCourse */}
          <CourseReviews
            averageRating={averageRating}
            totalReviews={totalReviews}
            ratingBreakdown={ratingBreakdown}
            reviews={reviews}
          />
        </div>

        {/* Right side - Placeholder for other content */}
        <div className="w-full md:w-3/4 p-4 bg-gray-50 rounded-lg shadow-md">
          {/* Other Mentor Page content goes here */}
        </div>
      </div>

      {/* Footer Component */}
      {/* <Footer /> */}
    </>
  );
};

export default MentorPage;
