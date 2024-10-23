import React from 'react';
import { quotes } from '../../../images';
import { leftarrow } from '../../../images';
import { rightarrow } from '../../../images';
import { ellipse61 } from '../../../images';

interface Testimonial {
  text: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    title: 'Designer',
    image: ellipse61,
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    title: 'Designer',
    image: ellipse61,
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    title: 'Designer',
    image: ellipse61,
  },
];

const Feedback: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-5">
      {/* Title */}
      <h2 className="font-inter font-semibold text-2xl sm:text-3xl leading-[140%] text-black mt-5 ml-6 sm:ml-12">
        What Our Customer Say About Us
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-5 mr-6 sm:mr-12">
        <button className="py-2 px-3 sm:py-2 sm:px-4  rounded-md mr-1">
          <img src={leftarrow} alt="previous" className='w-12' />
        </button>
        <button className="py-2 px-3 sm:py-2 sm:px-4  rounded-md mr-10">
          <img src={rightarrow} alt="next" className='w-12 ' />
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="flex gap-4 overflow-x-auto mt-5 ml-6 sm:ml-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] p-6 sm:p-8 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col items-center"
          >
            {/* Quote Icon */}
            <img
              src={quotes}
              alt="quote"
              className="w-10 h-10 mb-4"
            />

            {/* Testimonial Text */}
            <p className="font-inter font-normal text-sm sm:text-base leading-[160%] text-black text-center mb-4">
              {testimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full mr-3"
              />
              <div className="text-left">
                <p className="font-inter font-semibold text-base sm:text-lg leading-[160%] text-black">
                  {testimonial.name}
                </p>
                <p className="font-inter font-normal text-xs sm:text-sm leading-[150%] text-gray-600">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
