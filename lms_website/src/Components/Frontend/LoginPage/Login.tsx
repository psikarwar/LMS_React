import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../../Header/Header'; // Adjust the path according to your project structure

const Login: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Include the Header component above the main content */}
      {/* <Header /> */}
      
      <main className="flex justify-between py-10 lg:px-20">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Sign in to your account</h2>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-1">Email</label>
            <input 
              type="text" 
              placeholder="Username or Email ID" 
              className="w-full p-4 border border-gray-300 rounded-lg text-base outline-none" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full p-4 border border-gray-300 rounded-lg text-base outline-none" 
            />
          </div>
          <Link to='/course'>
          <button className="flex items-center bg-gray-900 text-white p-3 rounded-lg font-medium cursor-pointer mb-5">
            Sign In
            <img src="./assets/icon-arrow-narrow-right.svg" alt="Arrow" className="ml-2" />
          </button>
          </Link>
          <div className="flex items-center gap-3 justify-center mb-6">
            <img src="./assets/line-34.svg" alt="Line" />
            <span className="text-gray-400">Sign in with</span>
            <img src="./assets/line-35.svg" alt="Line" />
          </div>
          <div className="flex gap-6">
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-52">
              <img src="./assets/facebook-logo-primary-2.svg" alt="Facebook" />
              Facebook
            </button>
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-52">
              <img src="./assets/google.svg" alt="Google" />
              Google
            </button>
            <button className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer text-sm font-normal justify-center w-52">
              <img src="./assets/providers-image-1.svg" alt="Microsoft" />
              Microsoft
            </button>
          </div>
        </div>
        <div className="max-w-2xl">
          {/* Set the height of the image to 32rem explicitly */}
          <img src="./assets/frame-427319048.svg" alt="People reading" className="w-full" style={{ height: '32rem' }} />
        </div>
      </main>
    </div>
  );
};

export default Login;
