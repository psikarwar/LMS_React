import React from 'react';

const testimonials = [
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Jane Doe',
    role: 'Designer',
    image: './assets/ellipse-61.svg'
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'John Smith',
    role: 'Developer',
    image: './assets/ellipse-61-2.svg'
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Alice Johnson',
    role: 'Project Manager',
    image: './assets/ellipse-61-3.svg'
  },
  {
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    name: 'Bob Brown',
    role: 'Content Creator',
    image: './assets/ellipse-61-4.svg'
  },
];

const CourseCustomer: React.FC = () => {
  return (
    <div className="bg-gray-100 p-10 text-center">
      <h2 className="font-inter font-semibold text-2xl text-black mb-5">What Our Customers Say About Us</h2>
      <div className="flex justify-center mt-5 gap-1"> {/* Increased gap to 8 */}
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 w-64 text-left shadow-lg h-80">
            <img src="./assets/ri-double-quotes-l.svg" alt="Quotes" className="w-10 h-10 mb-4" />
            <p className="font-inter font-normal text-base text-black leading-6 mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <strong className="font-inter font-semibold text-lg text-black">{testimonial.name}</strong>
                <span className="font-inter font-normal text-sm text-gray-600">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-gray-400 rounded-lg px-4 py-2 mx-2">
          <img src="./assets/icon-left-chevron.svg" alt="Previous" />
        </button>
        <button className="bg-gray-400 rounded-lg px-4 py-2 mx-2">
          <img src="./assets/icon-chevron-right.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default CourseCustomer;
