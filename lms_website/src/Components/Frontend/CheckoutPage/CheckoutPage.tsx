// src/Components/Frontend/CheckoutPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../../Header/Header'; // Import the Header component
// import Footer from '../../Footer/Footer'; // Import the Footer component

const CheckoutPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Add the Header component */}
      {/* <Header /> */}

      <div className="p-6 lg:p-20">
        <div className="flex items-center text-sm mb-6">
          <span>Details</span>
          <img src="./assets/icon-chevron-right-small.svg" alt="Chevron" className="mx-2" />
          <Link to="/shopping">
          <span>Shopping Cart</span>
          </Link>
          <img src="./assets/icon-chevron-right-small.svg" alt="Chevron" className="mx-2" />
          <span className="text-blue-600 font-semibold">Checkout</span>
        </div>

        <main className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8">
          <section className="bg-white p-6 rounded-xl shadow w-full lg:w-1/2">
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
                  <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
                    <div className="w-full sm:w-1/2 mb-4">
                      <label className="block font-semibold mb-1">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 mb-4">
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

          <aside className="bg-white p-6 rounded-xl shadow w-full lg:w-1/2 mt-6 lg:mt-0">
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

      {/* Render the Footer component at the end */}
      {/* <Footer /> */}
    </div>
  );
};

export default CheckoutPage;
