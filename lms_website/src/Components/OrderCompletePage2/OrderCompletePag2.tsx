import React from 'react';
import OrderHeader from './OrderHeader/OrderHeader'; // Adjust the path according to your folder structure
import OrderImg from './OrderImg/OrderImg'; // Adjust the path according to your folder structure
import OrderCompletion from './OrderCompletion/OrderCompletion'; // Import the new OrderCompletion component
import OrderReview from './OrderReview/OrderReview'; // Import the OrderReview component
import CourseInstructor from '../Frontend/CoursePage/CourseInstructor/CourseInstructor'; // Import the CourseInstructor component
import CourseReviews from '../Frontend/CoursePage/CourseReviews/CourseReviews'; // Import the CourseReviews component
// import Footer from '../Footer/Footer'; // Adjust the path according to your folder structure
import OrderTabs from './OrderTabs/OrderTabs'; // Import the OrderTabs component
import DesignCourse from '../Frontend/CategoryPage/DesignCourse/DesignCourse';
// import FeaturedCourses from '../Frontend/CategoryPage/FeaturedCourse/FeaturedCourse'; // Import the FeaturedCourses component

function OrderCompletePag2() {
  const overview = `Embark on a transformative journey into the dynamic world of User Experience (UX) Design with our comprehensive course, "Introduction to User Experience Design." This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.`;

  const learningObjectives = [
    "Gain a clear understanding of what User Experience (UX) Design entails and its importance in today's digital world.",
    "Explore the fundamental principles of user-centered design and how to apply them to create intuitive and user-friendly interfaces.",
    "Learn about the various elements that contribute to a positive user experience, including information architecture, interaction design, and visual design.",
  ];

  // Sample data for the CourseInstructor component
  const instructorData = {
    name: "John Doe",
    role: "Senior UX Designer",
    imageSrc: "./assets/instructor.jpg", // Change to the actual path of the image
    reviews: 120,
    students: 500,
    courses: 5,
    description: "John is a seasoned UX designer with over 10 years of experience in creating user-centered designs. His passion for teaching is matched only by his expertise in the field.",
  };

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
    // Repeat as necessary
  ];

  // Sample data for the CourseReviews component
  const reviewsData = {
    averageRating: 4.5,
    totalReviews: 200,
    ratingBreakdown: [
      { rating: 5, percentage: 50 },
      { rating: 4, percentage: 30 },
      { rating: 3, percentage: 15 },
      { rating: 2, percentage: 3 },
      { rating: 1, percentage: 2 },
    ],
    reviews: [
      {
        reviewerName: "Alice Smith",
        rating: 5,
        reviewDate: "2024-10-01",
        reviewText: "This course was fantastic! I learned so much and feel confident in my UX skills.",
      },
      {
        reviewerName: "Bob Johnson",
        rating: 4,
        reviewDate: "2024-09-28",
        reviewText: "Great course, but I wish there were more hands-on projects.",
      },
      // Add more reviews as needed
    ],
  };

  // Sample tabs data
  const tabs = ['Details', 'Instructor', 'Courses', 'Reviews'];
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]); // Set initial active tab

  // Sample data for FeaturedCourses

  return (
    <div>
      <OrderHeader />

      {/* Container for OrderImg and OrderCompletion side by side */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 p-4">
        {/* Order Image on the left side */}
        <div className="w-full lg:w-1/2">
          <OrderImg />

          {/* Adding the OrderTabs component below OrderImg on the left side */}
          <OrderTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Order Completion on the right side */}
        <div className="w-full lg:w-1/2">
          <OrderCompletion />
        </div>
      </div>

      {/* Adding the OrderReview component below OrderImg */}
      <div className="p-4">
        <OrderReview overview={overview} learningObjectives={learningObjectives} />
      </div>

      {/* Adding the CourseInstructor component below OrderReview */}
      <div className="p-4">
        <CourseInstructor
          name={instructorData.name}
          role={instructorData.role}
          imageSrc={instructorData.imageSrc}
          reviews={instructorData.reviews}
          students={instructorData.students}
          courses={instructorData.courses}
          description={instructorData.description}
        />
      </div>

      {/* Adding the FeaturedCourses component below CourseInstructor */}
      <h2 className="font-semibold text-2xl leading-[140%] text-gray-900 mb-2 text-left relative" style={{ marginTop: '15px', marginLeft: '15px' }}>
        Featured Course
      </h2>
      <div
        className="p-4 grid grid-cols-4 gap-11 w-fit h-fit"
        style={{ marginLeft: '1rem' }}

      >
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

      {/* Adding the CourseReviews component below FeaturedCourses */}
      <div className="p-4">
        <CourseReviews
          averageRating={reviewsData.averageRating}
          totalReviews={reviewsData.totalReviews}
          ratingBreakdown={reviewsData.ratingBreakdown}
          reviews={reviewsData.reviews}
        />
      </div>

      {/* Adding the Footer component at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}

export default OrderCompletePag2;
