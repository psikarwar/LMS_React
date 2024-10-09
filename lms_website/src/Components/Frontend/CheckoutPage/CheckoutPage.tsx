import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <header className="flex justify-between items-center p-4 lg:p-8 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <img src="./assets/logo.svg" alt="Byway Logo" />
          <span className="ml-2 font-medium text-base">Byway</span>
        </div>
        <nav className="flex items-center">
          <span className="mx-4 text-sm font-medium">Categories</span>
          <div className="flex items-center border border-gray-800 rounded-lg p-2 mx-4">
            <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" />
            <span className="ml-2">Search courses</span>
          </div>
          <span className="mx-4 text-sm font-medium">Teach on Byway</span>
          <div className="flex items-center space-x-4">
            <img src="./assets/heart.svg" alt="Heart" />
            <img src="./assets/icon-cart.svg" alt="Cart" />
            <img src="./assets/bell-01.svg" alt="Notifications" />
            <div className="flex items-center justify-center bg-gray-800 text-white rounded-full w-10 h-10">
              <img src="./assets/ellipse-4.svg" alt="Profile" />
              <span>J</span>
            </div>
          </div>
        </nav>
      </header>

      <div className="p-6 lg:p-20">
        <div className="flex items-center text-sm mb-6">
          <span>Details</span>
          <img src="./assets/icon-chevron-right-small.svg" alt="Chevron" className="mx-2" />
          <span>Shopping Cart</span>
          <img src="./assets/icon-chevron-right-small.svg" alt="Chevron" className="mx-2" />
          <span className="text-blue-600 font-semibold">Checkout</span>
        </div>

        <main className="flex justify-between space-x-8">
          <section className="bg-white p-6 rounded-xl shadow w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Checkout Page</h2>
            <div className="space-y-4">
              <div className="mb-4">
                <label className="block font-semibold mb-1">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">State/Union Territory</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold">Payment Method</h3>
            <div className="mt-4 space-y-6">
              <div>
                <input type="radio" name="payment" id="card" />
                <label htmlFor="card" className="ml-2">Credit/Debit Card</label>
                <img src="./assets/image-17.svg" alt="Card icons" className="ml-4" />
                <div className="space-y-4 mt-4">
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Name of Card</label>
                    <input
                      type="text"
                      placeholder="Name of card"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block font-semibold mb-1">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block font-semibold mb-1">CVC/CVV</label>
                      <input
                        type="text"
                        placeholder="CVC/CVV"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input type="radio" name="payment" id="paypal" />
                <label htmlFor="paypal" className="ml-2">PayPal</label>
                <img src="./assets/image-16.svg" alt="PayPal" className="ml-4" />
              </div>
            </div>
          </section>

          <aside className="bg-white p-6 rounded-xl shadow w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="flex mb-6">
              <img
                src="./assets/rectangle-1133.svg"
                alt="Course"
                className="w-32 h-32 rounded-lg mr-6"
              />
              <div>
                <span className="text-blue-600">Design</span>
                <h3 className="text-lg font-semibold text-gray-900">Introduction to User Experience Design</h3>
                <span className="block text-gray-600">155 Lectures • 22 Total Hours</span>
                <p className="text-lg font-semibold">$45.00</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="./assets/percent-03.svg" alt="Coupon" className="mr-2" />
              <span className="text-blue-600">APPLY COUPON CODE</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$300.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$10.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$20.00</span>
              </div>
              <hr className="border-gray-300 my-2" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$290.00</span>
              </div>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-6">Proceed to Checkout</button>
          </aside>
        </main>
      </div>

      <footer className="bg-gray-800 text-gray-300 p-8">
        <div className="flex justify-between max-w-screen-xl mx-auto">
          <div className="w-1/3">
            <img src="./assets/image-4.svg" alt="Byway" />
            <p className="mt-4">
              Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Get Help</h3>
            <span className="block mb-2">Contact Us</span>
            <span className="block mb-2">Latest Articles</span>
            <span className="block">FAQ</span>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <span className="block mb-2">Address: 123 Main Street, Anytown, CA 12345</span>
            <span className="block mb-2">Tel: +(123) 456-7890</span>
            <span className="block">Mail: bywayedu@webkul.in</span>
            <img src="./assets/image-3.svg" alt="Contact icons" className="mt-4" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
