import React from 'react';

const OrderCompletePage: React.FC = () => {
  return (
    <div className="font-inter text-slate-700">
      <header className="flex justify-between items-center py-4 px-20 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <img src="./assets/logo.svg" alt="Byway Logo" />
          <span className="font-medium text-lg ml-2">Byway</span>
        </div>
        <nav className="flex items-center">
          <span className="mx-5 font-medium text-sm">Categories</span>
          <div className="flex items-center border border-slate-700 rounded-lg px-4 py-1 mr-5">
            <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" />
            <span className="ml-2">Search courses</span>
          </div>
          <span className="mx-5 font-medium text-sm">Teach on Byway</span>
          <div className="flex items-center">
            <img src="./assets/heart.svg" alt="Heart" className="mr-3" />
            <img src="./assets/icon-cart.svg" alt="Cart" className="mr-3" />
            <img src="./assets/bell-01.svg" alt="Notifications" className="mr-3" />
            <div className="flex items-center justify-center bg-slate-700 rounded-full w-10 h-10 text-white ml-2">
              <span>J</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="text-center py-12 mt-12">
        <div className="flex flex-col items-center">
          <img src="./assets/group-126.svg" alt="Success" className="w-48 h-48 mb-5" />
          <h1 className="font-bold text-4xl text-slate-900 mb-2">Order Complete</h1>
          <p className="font-semibold text-2xl text-slate-900">You Will Receive a confirmation email soon!</p>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-10 px-20 mt-12">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="w-1/3">
            <img src="./assets/image-4.svg" alt="Byway" className="mb-4" />
            <p>
              Empowering learners through accessible and engaging online education. Byway is a leading online learning
              platform dedicated to providing high-quality, flexible, and affordable educational experiences.
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold text-slate-50 mb-2">Get Help</h3>
            <span className="block mb-1">Contact Us</span>
            <span className="block mb-1">Latest Articles</span>
            <span className="block">FAQ</span>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold text-slate-50 mb-2">Programs</h3>
            <span className="block mb-1">Art & Design</span>
            <span className="block mb-1">Business</span>
            <span className="block mb-1">IT & Software</span>
            <span className="block mb-1">Languages</span>
            <span className="block">Programming</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderCompletePage;
