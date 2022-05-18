import React from 'react'
import { HomeBanner, Trusted, Showreel, ContactUsElement } from '../../components'

function Home() {
  return (
    <div className='relative bg-main-color'>
      <HomeBanner />
      <Trusted />
      <Showreel />
      <ContactUsElement />
    </div>
  )
}

export default Home