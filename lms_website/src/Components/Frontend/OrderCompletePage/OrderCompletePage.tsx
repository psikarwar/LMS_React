import React from 'react';
// import Header from '../../Header/Header'; // Import the Header component
// import Footer from '../../Footer/Footer'; // Import the Footer component

const OrderCompletePage: React.FC = () => {
  return (
    <div className="font-inter text-slate-700 min-h-screen flex flex-col justify-between">
      {/* Call the Header component */}
      {/* <Header /> */}

      <main className="flex-grow flex flex-col items-center justify-center py-12 mt-12 px-4">
        <div className="flex flex-col items-center">
          <img
            src="./assets/group-126.svg"
            alt="Success"
            className="w-24 h-24 md:w-48 md:h-48 mb-5" // Adjusted size for larger screens
          />
          <h1 className="font-bold text-3xl md:text-4xl text-slate-900 mb-2">Order Complete</h1>
          <p className="font-semibold text-xl md:text-2xl text-slate-900 text-center px-4">
            You will receive a confirmation email soon!
          </p>
        </div>
      </main>

      {/* Call the Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default OrderCompletePage;
