import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4 bg-white border-b border-slate-800">
      <div className="flex items-center">
        <img src="./assets/logo.svg" alt="Logo" className="w-8 h-10" />
        <span className="ml-1 text-lg font-medium text-slate-800">Byway</span>
      </div>
      <nav className="flex items-center">
        <span className="mx-6 text-base font-medium text-slate-800">Categories</span>
        <div className="flex items-center px-3 py-2 mr-6 border rounded-lg border-slate-800">
          <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search courses"
            className="border-none outline-none text-sm font-normal"
          />
        </div>
        <span className="mx-6 text-base font-medium text-slate-800">Teach on Byway</span>
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