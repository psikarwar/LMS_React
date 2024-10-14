import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-slate-800 md:px-10 lg:px-20">
      <div className="flex items-center">
        <img src="./assets/logo.svg" alt="Logo" className="w-8 h-10" />
        <span className="ml-1 text-lg font-medium text-slate-800">Byway</span>
      </div>
      <nav className="flex items-center">
        {/* Hide the Categories text on smaller screens */}
        <span className="hidden mx-2 text-base font-medium text-slate-800 md:block md:mx-6 lg:mx-10 ">
          Categories
        </span>
        <div className="hidden md:flex items-center px-4 py-2 border rounded-lg border-slate-800 lg:px-6">
          <img
            src="./assets/heroicons-magnifying-glass-20-solid.svg"
            alt="Search"
            className="w-5 h-5 ml-2"
          />
          <input
            type="text"
            placeholder="Search courses"
            className="ml-3 border-none outline-none text-sm font-normal w-96"
          />
        </div>
        {/* Show search icon on smaller screens */}
        <img
          src="./assets/heroicons-magnifying-glass-20-solid.svg"
          alt="Search Icon"
          className="w-5 h-5 ml-4 md:hidden"
        />
        <span className="hidden mx-6 text-base font-medium text-slate-800 lg:block">
          Teach on Byway
        </span>
        <img src="./assets/icon-cart.svg" alt="Cart" className="w-6 h-6 mr-6" />
        <button className="px-4 py-2 mr-2 text-sm font-medium border rounded-md border-slate-800 text-slate-800">
          Log In
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md">
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;
