import React from 'react';
import Header from '../Header/Header';
import LearningImage from './signupimage';
import SignUpForm from './SignupForm';

const Signup: React.FC = () => {
  return (
    <div className="max-w-screen-3xl ">
      {/* Header */}
      <Header />

      {/* Main content container */}
      <div className="relative flex justify-center items-start h-screen ">
        {/* Learning image */}
        <div className="w-1/1">
          <LearningImage />
        </div>

        {/* Signup form (positioned with gap from image) */}
        <div className="relative  max-w-1xl p-5 bg-white h-screen -mr-72 ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
