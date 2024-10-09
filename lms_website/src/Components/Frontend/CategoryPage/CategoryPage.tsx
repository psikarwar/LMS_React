import React from 'react';

const CategoryPage: React.FC = () => {
  return (
    <div className="font-inter text-gray-800">
      <header className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
        <div className="flex items-center">
          <img src="./assets/logo.svg" alt="Byway Logo" className="mr-2" />
          <span className="font-medium text-sm">Byway</span>
        </div>
        <nav className="flex items-center">
          <span className="mx-5 font-medium text-sm">Categories</span>
          <div className="flex items-center border border-gray-800 rounded-md px-2 mr-5">
            <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" />
            <span className="pl-2">Search courses</span>
          </div>
          <span className="mx-5 font-medium text-sm">Teach on Byway</span>
          <div className="flex items-center">
            <img src="./assets/heart.svg" alt="Heart" className="mr-3" />
            <img src="./assets/icon-cart.svg" alt="Cart" className="mr-3" />
            <img src="./assets/bell-01.svg" alt="Notifications" className="mr-3" />
            <div className="flex items-center bg-gray-800 rounded-full w-10 h-10 justify-center text-white ml-2">
              <img src="./assets/ellipse-4.svg" alt="Profile" />
              <span className="text-center">J</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="p-12">
        <section className="mb-12">
          <h1 className="font-bold text-4xl text-gray-900 mb-5">Design Courses</h1>
          <div className="flex justify-between items-center mb-10">
            <button className="flex items-center px-6 py-2 bg-white border border-gray-300 rounded-md">
              <img src="./assets/icon-filter.svg" alt="Filter" className="mr-2" />
              Filter
            </button>
            <div className="flex items-center">
              <span className="mr-2">Sort By</span>
              <button className="flex items-center px-6 py-2 bg-white border border-gray-300 rounded-md">
                Relevance
                <img src="./assets/icon-down-chevron.svg" alt="Chevron Down" className="ml-2" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Map over products to display cards */}
            {[...Array(9)].map((_, index) => (
              <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col" key={index}>
                <img src={`./assets/rectangle-1080-${index + 1}.svg`} alt="Course" className="rounded-lg h-36 mb-4 w-full object-cover" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Beginner’s Guide to Design</h3>
                  <p className="font-normal text-sm text-gray-600 mb-2">By Ronald Richards</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={`./assets/icon-${26 + i}.svg`} alt="Star" className="mr-1" />
                    ))}
                    <span className="font-semibold text-xs">(1200 Ratings)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">22 Total Hours. 155 Lectures. Beginner</p>
                  <p className="font-semibold text-xl text-gray-900">$149.9</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-5">Popular Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {[...Array(5)].map((_, index) => (
              <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col" key={index}>
                <img src={`./assets/rectangle-1136-${index + 1}.svg`} alt="Mentor" className="rounded-lg h-36 mb-4 w-full object-cover" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Ronald Richards</h3>
                  <p className="font-normal text-sm text-gray-600 mb-1">UI/UX Designer</p>
                  <div className="flex items-center">
                    <span className="font-semibold">4.9</span>
                    <span className="mx-2">2400 Students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-bold text-3xl text-gray-900 mb-5">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[...Array(4)].map((_, index) => (
              <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col" key={index}>
                <img src={`./assets/rectangle-1080-${10 + index}.svg`} alt="Featured Course" className="rounded-lg h-36 mb-4 w-full object-cover" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Beginner’s Guide to Design</h3>
                  <p className="font-normal text-sm text-gray-600 mb-2">By Ronald Richards</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={`./assets/icon-${76 + i}.svg`} alt="Star" className="mr-1" />
                    ))}
                    <span className="font-semibold text-xs">(1200 Ratings)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">22 Total Hours. 155 Lectures. Beginner</p>
                  <p className="font-semibold text-xl text-gray-900">$149.9</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-10 px-20">
        <div className="flex justify-between max-w-screen-xl mx-auto">
          <div className="w-1/3">
            <img src="./assets/image-4.svg" alt="Byway" />
            <p className="mt-4">Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold text-white mb-2">Get Help</h3>
            <span className="block mb-1">Contact Us</span>
            <span className="block mb-1">Latest Articles</span>
            <span className="block mb-1">FAQ</span>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold text-white mb-2">Programs</h3>
            <span className="block mb-1">Art & Design</span>
            <span className="block mb-1">Business</span>
            <span className="block mb-1">IT & Software</span>
            <span className="block mb-1">Languages</span>
            <span className="block mb-1">Programming</span>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold text-white mb-2">Contact Us</h3>
            <span className="block mb-1">Address: 123 Main Street, Anytown, CA 12345</span>
            <span className="block mb-1">Tel: +(123) 456-7890</span>
            <span className="block mb-1">Mail: bywayedu@webkul.in</span>
            <img src="./assets/image-3.svg" alt="Contact icons" className="mt-4" />
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <div className="flex justify-between">
          <span>© Byway All Rights Reserved.</span>
          <span>Privacy Policy | Terms of Service</span>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;
