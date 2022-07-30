import React, { useEffect } from 'react';
import {
  ContactUsElement,
  CustomerReview,
  ServicesBanner,
  ServicesItem,
} from '../../components';

function Services() {
  // set page title
  useEffect(() => {
    document.title = 'Suara Production | Services';
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main className="relative ">
      <ServicesBanner />
      <ServicesItem />
      <CustomerReview />
      <ContactUsElement />
    </main>
  );
}

export default Services;
