import React from 'react';

const testimonials = [
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    role: 'Designer',
    image: './assets/ellipse-61.svg',
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'John Smith',
    role: 'Developer',
    image: './assets/ellipse-61-2.svg',
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Alice Johnson',
    role: 'Project Manager',
    image: './assets/ellipse-61-3.svg',
  },
];

const CourseCustomer: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-8 text-center">
      <h2 className="font-inter font-semibold text-xl md:text-2xl text-black mb-5">
        What Our Customers Say About Us
      </h2>

      {/* Full-width grid layout that spans across the page */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-5 justify-items-center w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-6 text-left shadow-lg transition-transform transform hover:scale-105 duration-200 w-full max-w-md h-auto"
          >
            <img
              src="./assets/ri-double-quotes-l.svg"
              alt="Quotes"
              className="w-8 h-8 md:w-10 md:h-10 mb-4"
            />
            <p className="font-inter font-normal text-sm md:text-base text-black leading-6 mb-4">
              {testimonial.text}
            </p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3"
              />
              <div>
                <strong className="font-inter font-semibold text-sm md:text-lg text-black">
                  {testimonial.name}
                </strong>
                <span className="block font-inter font-normal text-xs md:text-sm text-gray-600">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center md:justify-end mt-8 space-x-3">
        <button className="bg-gray-400 rounded-lg px-4 py-2 flex items-center">
          <img src="./assets/icon-left-chevron.svg" alt="Previous" className="w-5 h-5" />
        </button>
        <button className="bg-gray-400 rounded-lg px-4 py-2 flex items-center">
          <img src="./assets/icon-chevron-right.svg" alt="Next" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CourseCustomer;
