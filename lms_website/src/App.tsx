// import React from 'react'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Signup from './Components/SignUp/Signup';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Login from './Components/Frontend/LoginPage/Login';
// import CategoryPage from './Components/Frontend/CategoryPage/CategoryPage';
import CoursePage from './Components/Frontend/CoursePage/CoursePage';



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
      

      </Routes>

    </Router>

    
     </>
     
   
  )
}

export default App
    