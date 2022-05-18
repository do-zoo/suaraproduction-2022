import React from 'react'
import { ContactUsElement, CustomerReview, ServicesBanner, ServicesItem } from '../../components'

function Services() {
  return (
    <main className='relative '>
        <ServicesBanner />        
        <ServicesItem />
        <CustomerReview />
        <ContactUsElement />
    </main>
  )
}

export default Services