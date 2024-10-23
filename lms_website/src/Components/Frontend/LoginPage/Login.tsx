import React from 'react';
import { Link } from 'react-router-dom';
import { facebookimg, frameimg, googleimg, lin34img, line35img, providerimg, rightimg } from '../../images';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Include the Header component above the main content */}
      {/* <Header /> */}

      <main className="flex flex-col lg:flex-row justify-between py-10 lg:px-20">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Sign in to your account</h2>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-1">Email</label>
            <input 
              type="text" 
              placeholder="Username or Email ID" 
              className="w-full p-4 border border-gray-300 rounded-lg text-base outline-none focus:ring-2 focus:ring-gray-600 transition duration-200" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full p-4 border border-gray-300 rounded-lg text-base outline-none focus:ring-2 focus:ring-gray-600 transition duration-200" 
            />
          </div>
          <Link to='/course'>
            <button className="flex items-center bg-gray-900 text-white p-3 rounded-lg font-medium cursor-pointer mb-5 ">
              Sign In
              <img src={rightimg} alt="Arrow" className="ml-2" />
            </button>
          </Link>
          <div className="flex items-center gap-3 justify-center mb-6">
            <img src={lin34img} alt="Line" className="hidden lg:block" />
            {/* Added whitespace-nowrap to keep the text in one line */}
            <span className="text-gray-400 whitespace-nowrap">Sign in with</span>
            <img src={line35img} alt="Line" className="hidden lg:block" />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-full lg:w-52">
              <img src={facebookimg} alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-full lg:w-52">
              <img src={googleimg} alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-full lg:w-52">
              <img src={providerimg} alt="Microsoft" className="w-5 h-5" />
              Microsoft
            </button>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:mt-0 lg:ml-80">
          {/* Set the height of the image to 32rem explicitly */}
          <img src={frameimg} alt="People reading"  className="max-w-full h-screen object-right" style={{ height: '32rem' }} />
        </div>
      </main>
    </div>
  );
};

export default Login;
