import React from 'react';

const ShoppingCart: React.FC = () => {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center bg-white px-20 py-4 border-b border-gray-300">
        <div className="flex items-center">
          <img src="./assets/logo.svg" alt="Logo" className="h-10 w-8 mr-2" />
          <span className="text-gray-700 font-medium text-lg">Byway</span>
        </div>
        <nav className="flex items-center gap-5">
          <a href="#categories" className="text-gray-700 text-sm font-medium">Categories</a>
          <a href="#teach" className="text-gray-700 text-sm font-medium">Teach on Byway</a>
          <div className="flex items-center border border-gray-700 rounded-lg p-1">
            <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" className="mr-2" />
            <input type="text" placeholder="Search courses" className="outline-none" />
          </div>
          <div className="flex gap-3 items-center">
            <img src="./assets/heart.svg" alt="Favorites" />
            <img src="./assets/icon-cart.svg" alt="Cart" />
            <img src="./assets/bell-01.svg" alt="Notifications" />
            <img src="./assets/ellipse-4.svg" alt="Profile" />
          </div>
        </nav>
      </header>
      <main className="flex justify-between px-20 py-10">
        <div className="max-w-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold text-gray-900">Shopping Cart</h2>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <span>Categories</span>
              <img src="./assets/icon-chevron-right-small.svg" alt="Chevron Right" />
              <span>Details</span>
              <img src="./assets/icon-chevron-right-small-2.svg" alt="Chevron Right" />
              <span className="text-blue-500">Shopping Cart</span>
            </div>
          </div>
          <span className="text-gray-700 text-sm mb-5 block">1 Course in cart</span>
          <div className="flex flex-col gap-5">
            <div className="flex bg-white border border-gray-300 rounded-lg p-4 items-center">
              <img src="./assets/image-3-4.svg" alt="Course" className="w-48 h-28 mr-4" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-black mb-1">Introduction to User Experience Design</h3>
                <p className="text-gray-700 text-sm">By John Doe</p>
                <div className="flex items-center gap-2 my-2">
                  <div className="flex gap-1">
                    <img src="./assets/phosphor-icons-star-11.svg" alt="Star" className="w-5 h-5" />
                    <img src="./assets/phosphor-icons-star-12.svg" alt="Star" className="w-5 h-5" />
                    <img src="./assets/phosphor-icons-star-13.svg" alt="Star" className="w-5 h-5" />
                    <img src="./assets/phosphor-icons-star-14.svg" alt="Star" className="w-5 h-5" />
                    <img src="./assets/phosphor-icons-star-15.svg" alt="Star" className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">4.6 (250 ratings)</span>
                  <img src="assets/line-21-5.svg" alt="Separator" className="mx-2" />
                  <span className="text-gray-700">22 Total Hours. 155 Lectures. All levels</span>
                </div>
                <div className="flex gap-3 my-2">
                  <span className="text-blue-500 cursor-pointer">Save for later</span>
                  <img src="assets/line-21-6.svg" alt="Separator" className="mx-2" />
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
                <span className="text-xl font-semibold text-black">$45.00</span>
              </div>
            </div>
            {/* Repeat for additional cart items */}
          </div>
        </div>
        <div className="w-72">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span>Price</span>
              <span>$300.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>-$10.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Tax</span>
              <span>$20.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold mt-4">
              <span>Total</span>
              <span>$290.00</span>
            </div>
          </div>
          <button className="bg-black text-white py-2 px-6 rounded-lg mt-4 w-full">Proceed to Checkout</button>
        </div>
      </main>
      <footer className="bg-gray-800 px-20 py-10 text-gray-300">
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="max-w-sm">
            <img src="./assets/image-4.svg" alt="Logo" className="mb-4" />
            <p className="text-sm">Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get Help</h3>
            <p>Contact Us</p>
            <p>Latest Articles</p>
            <p>FAQ</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
            <p>Art & Design</p>
            <p>Business</p>
            <p>IT & Software</p>
            <p>Languages</p>
            <p>Programming</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p>Address: 123 Main Street, Anytown, CA 12345</p>
            <p>Tel: +(123) 456-7890</p>
            <p>Email: bywayedu@webkul.in</p>
            <img src="./assets/image-3.svg" alt="Social Links" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShoppingCart;
