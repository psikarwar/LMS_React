import React from "react";
import { NavLink } from "react-router-dom";

// Sample dynamic data
const coursesData = [
  {
    id: 1,
    title: "Beginner’s Guide to Design",
    price: "$50.00",
    certificates: 25,
    chapters: 13,
    reviews: 25,
    orders: 254,
    addedToShelf: 500,
    isFree: true,
  },
  {
    id: 2,
    title: "Advanced Design Techniques",
    price: "$100.00",
    certificates: 30,
    chapters: 18,
    reviews: 35,
    orders: 300,
    addedToShelf: 600,
    isFree: true,
  },
  {
    id: 3,
    title: "Mastering UI/UX Design",
    price: "$75.00",
    certificates: 20,
    chapters: 10,
    reviews: 40,
    orders: 280,
    addedToShelf: 520,
    isFree: true,
  },
];

const Maincourse: React.FC = () => {
  return (
    <div className="p-5 text-gray-900">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <NavLink to="/admin/Courses">
          {" "}
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium">
            <span>Add Course</span>
          </button>
        </NavLink>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow border border-gray-200"
          >
            {/* Chip for Free or Paid */}
            <div
              className={`inline-block px-2 py-1 rounded-full text-xs font-bold mb-4 ${
                course.isFree
                  ? "bg-gray-200 text-gray-900"
                  : "bg-blue-600 text-white"
              }`}
            >
              {course.isFree ? "Free" : "Paid"}
            </div>

            {/* Course Title */}
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
            <hr className="mb-4" />

            {/* Course Info */}
            <div className="space-y-4">
              {/* First Row */}
              <div className="flex justify-between">
                <div className="text-center">
                  <strong className="text-lg">{course.price}</strong>
                  <p className="text-sm text-gray-600">Price</p>
                </div>
                <div className="text-center">
                  <strong className="text-lg">{course.certificates}</strong>
                  <p className="text-sm text-gray-600">Certificates</p>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex justify-between">
                <div className="text-center">
                  <strong className="text-lg">{course.chapters}</strong>
                  <p className="text-sm text-gray-600">Chapters</p>
                </div>
                <div className="text-center">
                  <strong className="text-lg">{course.reviews}</strong>
                  <p className="text-sm text-gray-600">Reviews</p>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex justify-between">
                <div className="text-center">
                  <strong className="text-lg">{course.orders}</strong>
                  <p className="text-sm text-gray-600">Orders</p>
                </div>
                <div className="text-center">
                  <strong className="text-lg">{course.addedToShelf}</strong>
                  <p className="text-sm text-gray-600">Added to Shelf</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maincourse;
