import React from 'react'
import { FooterBanner,HeroBanner,Products } from '../components'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-full py-2 gap-2'>
      <HeroBanner/>
      <Products/>
      <FooterBanner/>
    </div>
  )
}

export default Home