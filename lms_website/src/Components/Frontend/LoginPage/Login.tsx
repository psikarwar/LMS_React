import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center bg-white p-4 lg:px-20 border-b border-gray-300">
        <div className="flex items-center">
          <img src="./assets/logo.svg" alt="Logo" className="h-10 w-8 mr-2" />
          <span className="text-gray-800 font-medium text-base">Byway</span>
        </div>
        <nav className="flex items-center gap-5">
          <a href="#categories" className="text-gray-800 text-sm font-medium">Categories</a>
          <a href="#teach" className="text-gray-800 text-sm font-medium">Teach on Byway</a>
          <div className="flex items-center border border-gray-800 rounded-lg p-2">
            <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" className="mr-2" />
            <input type="text" placeholder="Search courses" className="outline-none border-none" />
          </div>
          <div className="flex gap-2">
            <a href="#cart">
              <img src="./assets/icon-cart.svg" alt="Cart" />
            </a>
            <button className="bg-transparent border-none font-medium cursor-pointer p-2 rounded-md">Log In</button>
            <button className="bg-gray-800 text-white font-medium p-2 rounded-md">Sign Up</button>
          </div>
        </nav>
      </header>
      <main className="flex justify-between py-10 lg:px-20">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Sign in to your account</h2>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-1">Email</label>
            <input type="text" placeholder="Username or Email ID" className="w-full p-4 border border-gray-300 rounded-lg text-base outline-none" />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-1">Password</label>
            <input type="password" placeholder="Enter Password" className="w-full p-4 border border-gray-300 rounded-lg text-base outline-none" />
          </div>
          <button className="flex items-center bg-gray-900 text-white p-3 rounded-lg font-medium cursor-pointer mb-5">
            Sign In
            <img src="./assets/icon-arrow-narrow-right.svg" alt="Arrow" className="ml-2" />
          </button>
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
          <img src="./assets/frame-427319048.svg" alt="People reading" className="w-full h-auto" />
        </div>
      </main>
    </div>
  );
};

export default Login;
