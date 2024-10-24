import React from 'react';
import { facebook } from '../../images';
import { Google } from '../../images';
import { Microsoft } from '../../images';
import { iconrightarrow } from '../../images';

const App: React.FC = () => {
  return (
    <div className="max-w-full  bg-gray-50 flex justify-left items-center">
      <div className="bg-white w-full max-w-2xl p-4 md:p-5  ">
        <h1 className="text-slate-900 text-3xl md:text-4xl font-semibold text-center mb-8">
          Create Your Account
        </h1>

        <form className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full">
              <label className="block text-lg font-semibold text-slate-900 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="w-full mt-4 md:mt-0">
              <label className="block text-lg font-semibold text-slate-900 mb-2">&nbsp;</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-lg font-semibold text-slate-900 mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold text-slate-900 mb-2">Email</label>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Password and Confirm Password */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full">
              <label className="block text-lg font-semibold text-slate-900 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="w-full mt-4 md:mt-0">
              <label className="block text-lg font-semibold text-slate-900 mb-2">&nbsp;</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full py-3 bg-slate-900 text-white text-center font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition"
          >
            <span>Create Account</span>
            <img src={iconrightarrow} alt="arrow" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-sm text-gray-500">Sign up with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Sign-up Buttons */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <button className="flex items-center justify-center w-full md:w-1/3 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
            <img src={facebook} alt="Facebook" className="w-18 h-6" />
            <span className="ml-2"></span>
          </button>
          <button className="flex items-center justify-center w-full md:w-1/3 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
            <img src={Google} alt="Google" className="w-18 h-6" />
            <span className="ml-2 text-red-500">Google</span>
          </button>
          <button className="flex items-center justify-center w-full md:w-1/3 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
            <img src={Microsoft} alt="Microsoft" className="w-18 h-6" />
            <span className="ml-2"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
