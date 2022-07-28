import React, { useEffect } from 'react';
import {
  HomeBanner,
  Trusted,
  Showreel,
  ContactUsElement,
} from '../../components';

function Home() {
  useEffect(() => {
    document.title = 'Suara Production | Home';
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="relative bg-main-color">
      <HomeBanner />
      <Trusted />
      <Showreel />
      <ContactUsElement />
    </div>
  );
}

export default Home;
