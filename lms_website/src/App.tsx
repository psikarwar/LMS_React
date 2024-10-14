// import React from 'react'

import React from 'react';
import Banner1 from './Components/HomePage/Banner1';
import Banner2 from './Components/HomePage/Banner2';
import Banner3 from './Components/HomePage/Banner3';
import Banner4 from './Components/HomePage/Banner4';
import Signup from './Components/SignUp/Signup';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Login from './Components/Frontend/LoginPage/Login';
import CategoryPage from './Components/Frontend/CategoryPage/CategoryPage';
import CoursePage from './Components/Frontend/CoursePage/CoursePage';
import ShoppingCart from './Components/Frontend/ShoppingCart/ShoppingCart';
import CheckoutPage from './Components/Frontend/CheckoutPage/CheckoutPage';
import OrderCompletePage from './Components/Frontend/OrderCompletePage/OrderCompletePage';
import OrderCompletePag2 from './Components/OrderCompletePage2/OrderCompletePag2';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import MyCourses from './Components/MyCourses/MyCourses';
import MyReviewMenu from './Components/MyReviewMenu/MyReviewMenu';
import TeachersMenu from './Components/TeachersMenu/TeachersMenu';
import MessagesMenu from './Components/MessageMenu/MessagesMenu';
import MessageChatMenu from './Components/MessageChatMenu/MessageChatMenu';


const App: React.FC = () => {
  return (

    <div >
       {/* Honey */}
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Signup/>
      <HomeScreen/>
      {/* Drashti       */}
      <Login/>
      <CategoryPage/>
      <CoursePage/>
      <ShoppingCart/>
      <CheckoutPage/>
      <OrderCompletePage/>
      <OrderCompletePag2/>
      {/* Kaushik */}
      <ProfilePage/>
      <MyCourses/>
      <MyReviewMenu/>
      <TeachersMenu/>
      <MessagesMenu/>
      <MessageChatMenu/>
    </div>
  )
}

export default App
    