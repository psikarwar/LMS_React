import React from 'react';
import Header from '../Header/Header';
import LearningImage from './signupimage';
import SignUpForm from './SignupForm';

const Signup: React.FC = () => {
  return (
    <div className="max-w-screen-3xl">
      {/* Header */}
      <Header />

      {/* Main content container */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start h-auto lg:h-auto px-4 md:px-10 lg:px-20 py-8">
        {/* Learning image (adjust to take full width on smaller screens) */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <LearningImage />
        </div>

        {/* Signup form (stacked below the image on small screens) */}
        <div className="w-full  lg:w-1/2   lg:mb-0 bg-white ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
