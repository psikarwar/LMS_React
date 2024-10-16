import React from 'react';

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
    image: '../../../../assets/ellipse-61.svg',
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    title: 'Designer',
    image: '../../../../assets/ellipse-61.svg',
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    title: 'Designer',
    image: '../../../../assets/ellipse-61.svg',
  },
 
];

const Feedback: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 px-5">
      <h2 className="font-inter font-semibold text-2xl leading-[140%] text-black mt-5 ml-12">
        What Our Customer Say About Us
      </h2>
      <div className="flex justify-end mt-5 mr-10">
        <button className="py-2 px-4 bg-gray-400 rounded-md mr-2">
          <img src="../../../../assets/icon-left-chevron.svg" alt="previous" />
        </button>
        <button className="py-2 px-4 bg-gray-400 rounded-md mr-2">
          <img src="../../../../assets/icon-chevron-right-small.svg" alt="next" />
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto mt-5 ml-14">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[30%] p-8 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col items-center"
          >
            <img
              src="../../../../assets/ri-double-quotes-l.svg"
              alt="quote"
              className="w-12 h-12 mb-4"
            />
            <p className="font-inter font-normal text-base leading-[160%] text-black text-center mb-4">
              {testimonial.text}
            </p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-15 h-15 rounded-full mr-3"
              />
              <div className="text-left">
                <p className="font-inter font-semibold text-lg leading-[160%] text-black">
                  {testimonial.name}
                </p>
                <p className="font-inter font-normal text-sm leading-[150%] text-gray-600">
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
