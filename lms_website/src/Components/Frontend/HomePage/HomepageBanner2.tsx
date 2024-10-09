import React from 'react';

const Banner2: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5 max-w-[80%] mx-auto">
      <div className="flex-1 max-w-[40%]">
        <h1 className="font-bold text-4xl text-[#0f172a] mb-6">Unlock Your Potential with Byway</h1>
        <p className="text-[#64748b] text-base mb-6 leading-7">
          Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.
        </p>
        <button className="font-medium text-base text-white bg-blue-600 px-6 py-4 rounded-lg cursor-pointer border-none">
          Start your instructor journey
        </button>
      </div>

      <div className="relative flex-1">
        <img src="./assets/frame-427318991.svg" alt="Instructor" className="w-full h-auto" />

        <div className="absolute flex items-center bg-white border border-gray-300 rounded-lg p-4 bottom-[-100px] left-[-60px]">
          <img src="./assets/group-469322.svg" alt="Courses" className="mr-4" />
          <div>
            <p className="text-[#64748b] font-semibold text-base">Number of courses sold</p>
            <p className="font-semibold text-black text-2xl">100,000+</p>
          </div>
        </div>

        <div className="absolute text-center bg-white border border-gray-300 rounded-lg p-4 top-0 right-[-80px]">
          <img src="./assets/ellipse-59.svg" alt="Completion Rate" className="mb-2" />
          <p className="font-semibold text-black text-lg">87.6%</p>
          <p className="text-black text-sm">Completion rate of our courses</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
