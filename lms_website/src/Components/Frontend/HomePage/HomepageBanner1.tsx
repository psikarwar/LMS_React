import React from 'react';
// import './HomePageBanner1.css'
const HomepageBanner1 :React.FC = () => {
  return (
    <div className="flex justify-between py-10 max-w-5xl mx-auto items-center">
      <div className="max-w-xl">
        <h1 className="font-bold text-5xl text-gray-900">
          Unlock Your Potential with Byway
        </h1>
        <p className="text-base text-gray-700 mt-4">
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we're
          here to guide you on your journey to success. Whether you're a
          student, professional, or lifelong learner, our cutting-edge Learning
          Management System is designed to elevate your learning experience.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium mt-5">
          Start your instructor journey
        </button>
      </div>
      <div className="flex flex-col items-center relative">
        <img
          src="./assets/frame-427318761.svg"
          alt="Main Student"
          className="w-[217.35px] absolute top-10 right-0"
        />
        <img
          src="./assets/frame-427318762.svg"
          alt="Supporting Student"
          className="w-[204.50px] absolute bottom-5 left-[20%]"
        />
        <div className="flex items-center border border-gray-200 rounded-lg p-4 mt-8">
          <img
            src="./assets/frame-469322.svg"
            alt="Community"
            className="w-[222px] mr-4"
          />
          <p className="font-semibold text-xs text-gray-900">
            Join our community of 1200+ Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner1;
