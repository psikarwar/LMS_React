import { Outlet } from "react-router-dom";
import Header from "./Frontend/Header/Header";
import Footer from "./Frontend/Footer/Footer";


const FrontenComponenet = () => {
  return (
    <>
      <Header />
      <Outlet />{" "}
      {/* This will render the respective component based on the route */}
      <Footer />
    </>
  );
};

export default FrontenComponenet;
