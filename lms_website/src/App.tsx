// import React from 'react';

import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage";
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage";
import CoursePage from "./Components/Frontend/CoursePage/CoursePage";
import Login from "./Components/Frontend/LoginPage/Login";
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage";
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart";
import OrderCompletePage2 from "./Components/OrderCompletePage2/OrderCompletePage2";
import Banner1 from "./Components/HomePage/Banner1";
import Signup from "./Components/SignUp/Signup";

const App: React.FC = () => {
  const courseData = {
    title: 'Introduction to User Experience Design',
    lessons: [
      { title: 'What is User Experience (UX) Design?', duration: '4min', isCompleted: true },
      { title: 'Historical Overview of UX Design', duration: '4min', isCompleted: true },
      { title: 'Understanding User-Centered Design', duration: '4min', isCompleted: false },
      { title: 'The Role of UX Design in Digital Products', duration: '4min', isCompleted: false },
    ],
  };

  return (
    <div>
      <Login />
      <CategoryPage />
      <CoursePage />
      <ShoppingCart />
      <CheckoutPage />
      <OrderCompletePage />
      
      {/* Render the new OrderCompletePage2 component */}
      <OrderCompletePage2 
        course={courseData} 
        imageUrl="https://path-to-your-image.jpg" // Replace with actual image path
      />

      <Banner1 />
      <Signup />
    </div>  // Ensure the closing div is correctly placed here
  );
};

export default App;
