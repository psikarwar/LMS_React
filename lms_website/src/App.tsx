// import React from 'react'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from './Components/Header/Header';
import Signup from "./Components/SignUp/Signup";
// import HomeScreen from './Components/HomeScreen/HomeScreen';s
import Login from "./Components/Frontend/LoginPage/Login";
import CoursePage from "./Components/Frontend/CoursePage/CoursePage";
import MainLayout from "./Components/MainProfile/MainLayout";
import CategoryPage from "./Components/Frontend/CategoryPage/CategoryPage";
import ShoppingCart from "./Components/Frontend/ShoppingCart/ShoppingCart";
import CheckoutPage from "./Components/Frontend/CheckoutPage/CheckoutPage";
import OrderCompletePage from "./Components/Frontend/OrderCompletePage/OrderCompletePage";
import OrderCompletePag2 from "./Components/OrderCompletePage2/OrderCompletePag2";
import MentorPage from "./Components/MentorPage/MentorPage";
import Customer from "./Components/Backend/Courses/Customer/Customer";
import Chapter from "./Components/Backend/Courses/Chapter/Chapter";
import ChapterDetails from "./Components/Backend/Courses/Chapter/ChapterDetails/ChapterDetails";
import ChapterResources from "./Components/Backend/Courses/Chapter/ChapterResources/ChapterResources";
import ChapterSeo from "./Components/Backend/Courses/Chapter/ChapterSeo/ChapterSeo";
import Commission from "./Components/Backend/Commission/Commission";
// import AdminDashboard from './Components/Backend/AdminLayout/AdminDashboard';
import EditCoupon from "./Components/Backend/Courses/Promotion/EditCoupon/EditCoupon";
import ReviewPage from "./Components/Backend/ReviewPage/ReviewPage";
import Notification from "./Components/Backend/Communication/Notification/Notification";
import Message from "./Components/Backend/Communication/Message/Message";
import Details from "./Components/Backend/Courses/Details/Details";
import CommunicationReview from "./Components/Backend/Communication/Review/CommunicationReview";
import CreateCoupon from "./Components/Backend/Courses/Promotion/CreateCoupon/CreateCoupon";
import Setting from "./Components/Backend/Courses/Setting/Setting";
import NotificationSend from "./Components/Backend/Communication/Notification/Notificationsend/NotificationSend";
import Courses from "./Components/Backend/Courses/Courses";
import Communication from "./Components/Backend/Communication/Communication";
import AdminDashboard from "./Components/Backend/AdminLayout/AdminDashboard";
import DashBoard from "./Components/Backend/Communication/Dashboard/DashBoard";
import Promotion from "./Components/Backend/Courses/Promotion/Promotion";
import Revenue from "./Components/Backend/Revenue/Revenue";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
// import Sidebar from './Components/Backend/AdminLayout/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <Router>
      {/* <Sidebar/> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/homescreen" element={<HomeScreen/>} >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/profile" element={<MainLayout />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ordercom" element={<OrderCompletePage />} />
        <Route path="/ordercompl" element={<OrderCompletePag2 />} />
        <Route path="/mentor" element={<MentorPage />} /></Route>

        <Route path="/" element={<AdminDashboard />}>
          <Route path="/maincourse" element={<Courses />} />

          {/* Backend */}
          <Route path="/customer" element={<Customer />} />
          <Route path="/chapter" element={<Chapter />} />
          {/* Update the route for ChapterDetails without the ID */}
          <Route path="/chapterdetail" element={<ChapterDetails />} />
          <Route path="/chapterresource" element={<ChapterResources />} />
          <Route path="/chapterseo" element={<ChapterSeo />} />
          <Route path="/editcoupon" element={<EditCoupon />} />
          <Route path="/createcoupon" element={<CreateCoupon />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/promotion" element={<Promotion />} />

          <Route path="/commn-review" element={<CommunicationReview />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/reviews" element={<ReviewPage />} />

          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/notification-send" element={<NotificationSend />} />

          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/communication" element={<Communication />} />
          {/* <Route path="/revenue" element={<Revenue />} /> */}
          <Route path="/setting" element={<Setting />} />
          <Route path="/revenue" element={<Revenue/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
