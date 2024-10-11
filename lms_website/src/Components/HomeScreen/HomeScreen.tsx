import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner1 from '../HomePage/Banner1'
import StatsSection from './stats/stats'
import TopCategories from './Topcategories/TopCategories'

const HomeScreen : React.FC = () => {
  return (
      <>
          <Header />
          <Banner1 />
      <StatsSection />
      <TopCategories/>
        <Footer/>      
      </>
  )
}

export default HomeScreen