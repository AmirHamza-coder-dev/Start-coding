import React from 'react'
import Pagination from '../Components/Ui/Pagination'
import Banner from '../Components/Home/Banner'
import Categorys from '../Components/Home/Categorys'
import SmartPhone from '../Components/Home/SmartPhone'
import Service from '../Components/Ui/Service'
import FeaturedProducts from '../Components/Home/FeaturedProducts'
const Home = () => {
  return (
    <div className="container px-25">
      <Banner />
      <Categorys />
      <SmartPhone />
      <FeaturedProducts/>
      <Service/>
    </div>
  )
}

export default Home
