import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const FrontenComponenet = () => {
  return (
<>
      
      <Header />
      <main>
     
        <Outlet /> {/* This will render the respective component based on the route */}
        </main>
      <Footer/>
</>  )
}

export default FrontenComponenet