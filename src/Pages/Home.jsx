import React from 'react'
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
      <Service/>
    </div>
  )
}

export default Home
