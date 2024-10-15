import React from 'react';

// Define Mentor type
type Mentor = {
  name: string;
  role: string;
  rating: string;
  students: string;
  image: string;
};

const PopularMentor: React.FC<{ mentors: Mentor[] }> = ({ mentors }) => {
  return (
    <div className="p-6 font-inter">
      {/* This <h2> is outside the map function, so it will render only once */}
      <h2 className="font-semibold text-2xl leading-[140%] text-gray-900 mb-6">
        Top Instructors
      </h2>

      <div className="grid grid-cols-5 gap-6">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-4"
          >
            <img
              className="w-full h-auto rounded-lg"
              src={mentor.image}
              alt={mentor.name}
            />

            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg leading-[160%] text-gray-900">
                {mentor.name}
              </h3>
              <p className="text-sm leading-[150%] text-gray-600">
                {mentor.role}
              </p>
              <img
                className="w-[180px] mx-auto my-4"
                src="./assets/line-55.svg"
                alt="Divider"
              />
              <div className="flex justify-between items-center text-xs leading-[14.52px]">
                <div className="flex items-center">
                  <img
                    src="./assets/icon.svg"
                    alt="Star"
                    className="mr-1"
                  />
                  <span className="font-semibold text-gray-900">{mentor.rating}</span>
                </div>
                <p className="font-semibold text-gray-600">{mentor.students}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMentor;
