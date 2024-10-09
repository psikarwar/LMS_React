import React from 'react';

const courses = [
  {
    title: "Beginner’s Guide to Design",
    author: "By Ronald Richards",
    hours: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: "./assets/rectangle-1080.svg",
    rating: "(1200 Ratings)",
  },
  // Add objects for more courses, changing the image path accordingly
];

const FeaturedCourses: React.FC = () => {
  return (
    <div className="p-6 font-inter">
      <h2 className="font-semibold text-2xl leading-[140%] text-gray-900 mb-6">
        Featured Courses
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-4"
          >
            <img
              className="w-full h-auto rounded-lg"
              src={course.image}
              alt={course.title}
            />
            <div className="mt-4">
              <h3 className="font-semibold text-lg leading-[160%] text-gray-900">
                {course.title}
              </h3>
              <p className="text-sm leading-[150%] text-gray-600">{course.author}</p>
              <div className="flex items-center text-xs leading-[14.52px] text-gray-600 my-2">
                <img src="./assets/icon.svg" alt="Star" className="mr-2" />
                <span>{course.rating}</span>
              </div>
              <p className="text-sm leading-[150%] text-gray-600">{course.hours}</p>
              <p className="font-semibold text-xl text-gray-900 mt-2">
                {course.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
