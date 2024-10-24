// src/Components/Frontend/CheckoutPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { greaterthan, visa, paypal, rectangle1133, percent } from '../../images';

const CheckoutPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <div className="p-6 lg:p-20">
        <div className="flex items-center text-sm mb-6">
          <span>Details</span>
          <img src={greaterthan} alt="Chevron" className="mx-2" />
          <Link to="/shopping">
            <span>Shopping Cart</span>
          </Link>
          <img src={greaterthan} alt="Chevron" className="mx-2" />
          <span className="text-blue-600 font-semibold">Checkout</span>
        </div>

        <main className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8">
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="radio" name="payment" id="card" />
                  <label htmlFor="card" className="ml-2">Credit/Debit Card</label>
                </div>
                <img src={visa} alt="Card icons" className="w-12 h-auto" />
              </div>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="radio" name="payment" id="paypal" />
                  <label htmlFor="paypal" className="ml-2">PayPal</label>
                </div>
                <img src={paypal} alt="PayPal" className="w-12 h-auto" />
              </div>
            </div>
          </section>

          <aside className="bg-white p-6 rounded-xl shadow w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="flex mb-6">
              <img
                src={rectangle1133}
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
              <img src={percent} alt="Coupon" className="mr-2" />
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
    </div>
  );
};

export default CheckoutPage;
