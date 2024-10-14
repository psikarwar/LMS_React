// import React from 'react'

import React from 'react';

// import OrderCompletePage2 from "./Components/OrderCompletePage2/OrderCompletePage2";
import OrderCompletePag2 from "./Components/OrderCompletePage2/OrderCompletePag2";
import Signup from "./Components/SignUp/Signup";
import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage"
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage"
import CoursePage from "./Components/Frontend/CoursePage/CoursePage"

import Login from "./Components/Frontend/LoginPage/Login"
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage"
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart"
import Banner1 from "./Components/HomePage/Banner1"
import MessageChatMenu from "./Components/MessageChatMenu/MessageChatMenu"
import MessagesMenu from "./Components/MessageMenu/MessagesMenu"
import MyCourses from "./Components/MyCourses/MyCourses"
import MyReviewMenu from "./Components/MyReviewMenu/MyReviewMenu"
// import Profile from "./Components/Profile/Profile"
import ProfilePage from "./Components/ProfilePage/ProfilePage"
import TeachersMenu from "./Components/TeachersMenu/TeachersMenu"
import Banner2 from './Components/HomePage/Banner2';
import Banner4 from './Components/HomePage/Banner4';

const App: React.FC = () => {
  return (

    <div >
      <ProfilePage/>
      <MessageChatMenu/>
      <MyReviewMenu/>
      <MyCourses/>
      <TeachersMenu/>
      <MessagesMenu/>
      {/* <Profile/> */}
      <Banner1 />
      <Signup/>

      <Login/>
      <CategoryPage/>
      <CoursePage/>
      <ShoppingCart/>
      <CheckoutPage/>

    
      <Banner1 />
      <Banner2 />
      <Banner4/>
      <Signup />
      <Login />
      <CategoryPage />
      {/* <CoursePage /> */}
      <CoursePage/>
      <ShoppingCart />
      <CheckoutPage />
      <OrderCompletePage />
      <OrderCompletePag2/>
      
      
      
      
      
  </div>
  )
}

export default App
    