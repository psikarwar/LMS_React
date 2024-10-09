// import React from 'react'


import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage"
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage"
import CoursePage from "./Components/Frontend/CoursePage/CoursePage"
import HomepageBanner1 from "./Components/Frontend/HomePage/HomepageBanner1"
import Banner2 from "./Components/Frontend/HomePage/HomepageBanner2"
import Login from "./Components/Frontend/LoginPage/Login"
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage"
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart"

const App: React.FC = () => {
  return (

    <div >
      <HomepageBanner1/>
      
      <Banner2/>

      <Login/>
      <CategoryPage/>
      <CoursePage/>
      <ShoppingCart/>
      <CheckoutPage/>
      <OrderCompletePage/>
      
      
      
      
  </div>
  )
}

export default App
