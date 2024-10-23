// import React from 'react';
// // import Header from '../Header/Header'; // Uncomment when Header component is available
// import MentorInstructor from './MentorInstructor/MentorInstructor'; // Import the MentorInstructor component
// import MentorArea from './MentorArea/MentorArea'; // Import the MentorArea component
// import MentorCourse from './MentorCourse/MentorCourse'; // Import the MentorCourse component
// import CourseReviews from '../Frontend/CoursePage/CourseReviews/CourseReviews'; // Import the CourseReviews component
// // import Footer from '../Footer/Footer'; // Uncomment when Footer component is available

// const MentorPage: React.FC = () => {
//   // Sample data for CourseReviews
//   const averageRating = 4.5;
//   const totalReviews = 250;
//   const ratingBreakdown = [
//     { percentage: 60, rating: 5 },
//     { percentage: 20, rating: 4 },
//     { percentage: 10, rating: 3 },
//     { percentage: 5, rating: 2 },
//     { percentage: 5, rating: 1 },
//   ];
//   const reviews = [
//     {
//       reviewerName: "John Doe",
//       rating: 5,
//       reviewDate: "October 10, 2024",
//       reviewText: "This course was fantastic! Highly recommend it!",
//     },
//     {
//       reviewerName: "Jane Smith",
//       rating: 4,
//       reviewDate: "October 9, 2024",
//       reviewText: "Great content, but I wish there were more examples.",
//     },
//     // Add more reviews as needed
//   ];

//   return (
//     <>
//       {/* Header Component */}
//       {/* <Header /> */}

//       {/* Mentor Page Content */}
//       <div className="mentor-page-content flex flex-col">
//         {/* Left side - MentorInstructor, MentorArea, and MentorCourse components */}
//         <div className="w-full md:w-1/4 p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md">
//           {/* Add MentorInstructor component */}
//           <MentorInstructor
//             name="Ronald Richards"
//             role="Web Developer, UX/UI Designer, and Teacher"
//             totalStudents={1000}
//             reviews={154}
//             description="Ronald Richards is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions..."
//             expertise={[
//               'User Experience (UX) Design',
//               'User Interface (UI) Design',
//               'Information Architecture',
//               'Interaction Design',
//               'Visual Design',
//               'Usability Testing',
//               'Wireframing and Prototyping',
//               'Design Thinking',
//             ]}
//             experience="Ronald has an extensive professional background in UX/UI design, working with renowned companies such as [Company Name] and [Company Name]..."
//             imageSrc={''} // Add your image source here
//             links={{
//               website: 'https://example.com',
//               twitter: 'https://twitter.com/example',
//               youtube: 'https://youtube.com/example',
//             }}
//           />

//           {/* Add MentorArea component below MentorInstructor */}
//           <MentorArea
//             mentorName="Ronald Richards"
//             aboutDescription="Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results."
//             expertiseAreas={[
//               'User Experience (UX) Design',
//               'User Interface (UI) Design',
//               'Information Architecture',
//               'Interaction Design',
//               'Visual Design',
//               'Usability Testing',
//               'Wireframing and Prototyping',
//               'Design Thinking',
//             ]}
//             experienceDescription="Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms."
//           />

//           {/* Add MentorCourse component below MentorArea */}
//           <MentorCourse />

//           {/* Add CourseReviews component below MentorCourse */}
//           <CourseReviews
//             averageRating={averageRating}
//             totalReviews={totalReviews}
//             ratingBreakdown={ratingBreakdown}
//             reviews={reviews}
//           />
//         </div>

//         {/* Right side - Placeholder for other content */}
//         {/* <div className="w-full md:w-3/4 p-4 bg-gray-50 rounded-lg shadow-md"> */}
//         {/* Other Mentor Page content goes here */}
//         {/* </div> */}
//       </div>

//       {/* Footer Component */}
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default MentorPage;





import React from 'react';
import MentorInstructor from './MentorInstructor/MentorInstructor';
import DesignCourse from '../Frontend/CategoryPage/DesignCourse/DesignCourse';
import CourseReviews from '../Frontend/CoursePage/CourseReviews/CourseReviews'; // Import CourseReviews component

const MentorPage: React.FC = () => {
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
    // Add more course data as needed
  ];

  // Review Data
  const reviews = [
    {
      reviewerName: "Jane Doe",
      rating: 5,
      reviewDate: "March 1, 2024",
      reviewText: "This course was fantastic! I learned so much about design and Ronald was a great instructor.",
    },
    {
      reviewerName: "John Smith",
      rating: 4,
      reviewDate: "March 10, 2024",
      reviewText: "A comprehensive course, although I would have preferred more hands-on projects.",
    },
    {
      reviewerName: "Alice Johnson",
      rating: 5,
      reviewDate: "March 15, 2024",
      reviewText: "Amazing! Ronald really knows his stuff. I now feel confident in my design skills.",
    },
    // Add more reviews as needed
  ];

  const ratingBreakdown = [
    { rating: 5, percentage: 70 },
    { rating: 4, percentage: 20 },
    { rating: 3, percentage: 7 },
    { rating: 2, percentage: 2 },
    { rating: 1, percentage: 1 },
  ];

  const averageRating = 4.8;
  const totalReviews = 100;

  return (
    <div className="container mx-auto px-4">
      <MentorInstructor
        name="Ronald Richards"
        role="Instructor"
        totalStudents={1000}
        reviews={154}
        description="Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results."
        expertise={[
          'User Experience (UX) Design',
          'User Interface (UI) Design',
          'Information Architecture',
          'Interaction Design',
          'Visual Design',
          'Usability Testing',
          'Wireframing and Prototyping',
          'Design Thinking',
        ]}
        experience="Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms."
        imageSrc="https://example.com/johndoe.jpg"
        links={{
          website: 'https://johndoe.com',
          twitter: 'https://twitter.com/johndoe',
          youtube: 'https://youtube.com/johndoe',
        }}
      />

      <h2 className="font-semibold text-xl sm:text-2xl leading-[140%] text-gray-900 mb-2 text-left mt-6">
        More Courses by Ronald Richards
      </h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {courses.slice(0, 5).map((course, index) => (
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

      {/* Course Reviews Section */}
      <div className="mt-8">
        <CourseReviews
          averageRating={averageRating}
          totalReviews={totalReviews}
          ratingBreakdown={ratingBreakdown}
          reviews={reviews}
        />
      </div>
    </div>
  );
};

export default MentorPage;







