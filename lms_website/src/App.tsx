// import React from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Signup from './Components/SignUp/Signup';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Login from './Components/Frontend/LoginPage/Login';
// import CategoryPage from './Components/Frontend/CategoryPage/CategoryPage';
import CoursePage from './Components/Frontend/CoursePage/CoursePage';
import MainLayout from './Components/MainProfile/MainLayout';
import CategoryPage from './Components/Frontend/CategoryPage/CategoryPage';
import ShoppingCart from './Components/Frontend/ShoppingCart/ShoppingCart';
import CheckoutPage from './Components/Frontend/CheckoutPage/CheckoutPage';
import OrderCompletePage from './Components/Frontend/OrderCompletePage/OrderCompletePage';
import OrderCompletePag2 from './Components/OrderCompletePage2/OrderCompletePag2';
import MentorPage from './Components/MentorPage/MentorPage';
import Commission from './Components/Backend/Commission/Commission';
import AdminDashboard from './Components/Backend/AdminLayout/AdminDashboard';



const App: React.FC = () => {
  return (
    <>
    <Router>

      <Header/>        
      <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/course" element={<CoursePage/>} />
      <Route path="/profile" element={<MainLayout/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/shopping" element={<ShoppingCart/>} />
      <Route path="/checkout" element={<CheckoutPage/>} />
      <Route path="/ordercom" element={<OrderCompletePage/>} />
      <Route path="/ordercompl" element={<OrderCompletePag2/>} />
      <Route path="/mentor" element={<MentorPage/>} />
      <Route path="/commission" element={<Commission/>} />
          
          
      

        </Routes>
        <AdminDashboard/>

    </Router>

    
     </>
     
   
  )
}

export default App

