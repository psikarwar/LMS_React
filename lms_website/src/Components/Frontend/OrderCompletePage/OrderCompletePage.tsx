import React from 'react';
// import Header from '../../Header/Header'; // Import the Header component
// import Footer from '../../Footer/Footer'; // Import the Footer component

const OrderCompletePage: React.FC = () => {
  return (
    <div className="font-inter text-slate-700">
      {/* Call the Header component */}
      {/* <Header /> */}

      <main className="text-center py-12 mt-12">
        <div className="flex flex-col items-center">
          <img src="./assets/group-126.svg" alt="Success" className="w-48 h-48 mb-5" />
          <h1 className="font-bold text-4xl text-slate-900 mb-2">Order Complete</h1>
          <p className="font-semibold text-2xl text-slate-900">You Will Receive a confirmation email soon!</p>
        </div>
      </main>

      {/* Call the Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default OrderCompletePage;
