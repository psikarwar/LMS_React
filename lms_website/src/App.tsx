import React from 'react';

import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage";
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage";
import CoursePage from "./Components/Frontend/CoursePage/CoursePage";
// import CoursePage from "./Components/Frontend/CoursePage/CoursePage";
import Login from "./Components/Frontend/LoginPage/Login";
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage";
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart";
// import OrderCompletePage2 from "./Components/OrderCompletePage2/OrderCompletePage2";
import Banner1 from "./Components/HomePage/Banner1";
import OrderCompletePag2 from "./Components/OrderCompletePage2/OrderCompletePag2";
import Signup from "./Components/SignUp/Signup";
import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage"
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage"
import CoursePage from "./Components/Frontend/CoursePage/CoursePage"

import Login from "./Components/Frontend/LoginPage/Login"
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage"
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart"
import Banner1 from "./Components/HomePage/Banner1"
import HomeScreen from "./Components/HomeScreen/HomeScreen"
import Signup from "./Components/SignUp/Signup"
import OrderCompletePage2 from "./Components/OrderCompletePage2/OrderCompletePage2";
import Banner2 from './Components/HomePage/Banner2';
import Banner3 from './Components/HomePage/Banner3';
import Banner4 from './Components/HomePage/Banner4';

const App: React.FC = () => {

  return (
    <div>
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Banner4/>
      <HomeScreen />
      <Signup />
      <Login />
      <CategoryPage />
      {/* <CoursePage /> */}
      <CoursePage/>
      <ShoppingCart />
      <CheckoutPage />
      <OrderCompletePage />
      <OrderCompletePag2/>
      
      {/* Render the new OrderCompletePage2 component */}
     
        
        imageUrl="https://path-to-your-image.jpg" // Replace with actual image path
      

      <Banner1 />
      <Signup />
    </div>  // Ensure the closing div is correctly placed here
      />
    </div>
  );
};

export default App;
