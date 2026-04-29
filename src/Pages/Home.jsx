import React from 'react'
<<<<<<< HEAD
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
=======
import Banner from '../Components/Home/Banner'
import Categorys from '../Components/Home/Categorys'
import Flashdeals from '../Components/Home/Flashdeals'
import Service from '../Components/Ui/Service'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categorys />
      <Flashdeals />
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
      <Service/>
    </div>
  )
}

export default Home
