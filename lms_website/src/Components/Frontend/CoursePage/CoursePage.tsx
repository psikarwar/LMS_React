import React from 'react';

const CoursePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />
      <Breadcrumbs />
      <CourseDetails />
      <ReviewsSection />
      <CustomerFeedback />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <img src="./assets/logo.svg" alt="Byway" className="w-8 h-10" />
      <span className="font-inter font-medium text-base text-gray-800 ml-2">Byway</span>
      <div className="flex items-center border border-gray-800 rounded-lg p-2">
        <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" className="w-5 h-5" />
        <input type="text" placeholder="Search courses" className="border-none ml-2 font-inter font-medium text-sm" />
      </div>
      <button className="font-inter font-medium text-sm text-gray-800 bg-transparent border-none cursor-pointer">
        Teach on Byway
      </button>
    </div>
  );
};

const Breadcrumbs: React.FC = () => {
  return (
    <div className="flex items-center p-4">
      <span className="font-inter font-normal text-sm text-gray-800 mr-2">Home</span>
      <img src="./assets/icon-chevron-right-small.svg" alt="Chevron" className="w-6 h-6 mx-2" />
      <span className="font-inter font-normal text-sm text-gray-800 mr-2">Categories</span>
      <img src="./assets/icon-chevron-right-small.svg" alt="Chevron" className="w-6 h-6 mx-2" />
      <span className="font-inter font-normal text-sm text-blue-600">Introduction to User Experience Design</span>
    </div>
  );
};

const CourseDetails: React.FC = () => {
  return (
    <div className="p-4 border-b border-gray-300">
      <h1 className="font-inter font-bold text-4xl text-gray-900">Introduction to User Experience Design</h1>
      <p className="font-inter font-normal text-base text-gray-800 mt-4">
        This course is meticulously crafted to provide you with a foundational understanding of the principles,
        methodologies, and tools that drive exceptional user experiences in the digital landscape.
      </p>
      <div className="flex items-center mt-4">
        <span className="font-poppins font-medium text-base text-yellow-400">4.6</span>
        <img src="./assets/phosphor-icons-star.svg" alt="Star" className="w-5 h-5 ml-2" />
        <span className="font-inter font-normal text-sm text-gray-800 ml-2">(651651 rating)</span>
      </div>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  return (
    <div className="p-4 border-b border-gray-300">
      <h2 className="font-inter font-semibold text-2xl text-gray-900 mb-4">Learner Reviews</h2>
      <p className="font-inter font-normal text-base text-gray-800 mb-2">
        "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world,
        I appreciate the up-to-date content and engaging multimedia."
      </p>
      <span className="font-inter font-semibold text-lg text-gray-900">Jane Doe, Designer</span>
    </div>
  );
};

const CustomerFeedback: React.FC = () => {
  return (
    <div className="p-4 border-b border-gray-300">
      <h2 className="font-inter font-semibold text-2xl text-black mb-4">What Our Customer Say About Us</h2>
      <p className="font-inter font-normal text-base text-black">
        "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world,
        I appreciate the up-to-date content and engaging multimedia."
      </p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="p-8 bg-gray-800 flex flex-col items-start">
      <img src="./assets/image-4.svg" alt="Logo" className="w-28 h-10 mb-4" />
      <p className="font-inter font-normal text-sm text-gray-300 max-w-md">
        Empowering learners through accessible and engaging online education.
      </p>
    </div>
  );
};

export default CoursePage;
