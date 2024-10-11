// import React from 'react'


import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage"
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage"
import CoursePage from "./Components/Frontend/CoursePage/CoursePage"

import Login from "./Components/Frontend/LoginPage/Login"
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage"
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart"
import Banner1 from "./Components/HomePage/Banner1"
import HomeScreen from "./Components/HomeScreen/HomeScreen"
import Signup from "./Components/SignUp/Signup"

const App: React.FC = () => {
  return (

    <div >
    
      
      <Banner1 />
      <HomeScreen/>
      <Signup/>
      <Login/>
      <CategoryPage/>
      <CoursePage/>
      <ShoppingCart/>
      <CheckoutPage/>
      <OrderCompletePage />
      
      
      
      
      
  </div>
  )
}

export default App
