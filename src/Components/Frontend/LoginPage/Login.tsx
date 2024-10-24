import React from 'react';
import { Link } from 'react-router-dom';
import { facebookimg, frameimg, googleimg, lin34img, line35img, providerimg, rightimg } from '../../images';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Include the Header component above the main content */}
      {/* <Header /> */}

      <main className="flex flex-col lg:flex-row justify-between py-10 px-4 sm:px-6 md:px-10 lg:px-7"> {/* Added responsive padding */}
        <div className="max-w-lg mx-auto lg:mx-0 lg:max-w-md md:max-w-full"> {/* Adjusted max width for larger screens */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6"> {/* Responsive font size */}
            Sign in to your account
          </h2>
          <div className="mb-6">
            <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-1"> {/* Responsive text size */}
              Email
            </label>
            <input 
              type="text" 
              placeholder="Username or Email ID" 
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-600 transition duration-200" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-1"> {/* Responsive text size */}
              Password
            </label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-600 transition duration-200" 
            />
          </div>
          <Link to='/course'>
            <button className="flex items-center bg-gray-900 text-white p-3 rounded-lg font-medium cursor-pointer mb-5 w-full justify-center sm:w-auto"> {/* Responsive full width on small screens */}
              Sign In
              <img src={rightimg} alt="Arrow" className="ml-2" />
            </button>
          </Link>
          <div className="flex items-center gap-3 justify-center mb-6">
            <img src={lin34img} alt="Line" className="hidden lg:block" />
            <span className="text-gray-400 whitespace-nowrap">Sign in with</span>
            <img src={line35img} alt="Line" className="hidden lg:block" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-full sm:w-auto lg:w-52">
              <img src={facebookimg} alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-full sm:w-auto lg:w-52">
              <img src={googleimg} alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-full sm:w-auto lg:w-52">
              <img src={providerimg} alt="Microsoft" className="w-5 h-5" />
              Microsoft
            </button>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:mt-0 lg:relative lg:w-full">
          <img 
            src={frameimg} 
            alt="People reading" 
            className="w-30 h-[30rem] object-cover lg:absolute lg:right-[-60px] lg:h-[40rem]" /> {/* Existing image dimensions remain unchanged */}
        </div>
      </main>
    </div>
  );
};

export default Login;
