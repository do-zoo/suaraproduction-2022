import React, { useEffect } from "react";
import {
  HomeBanner,
  Trusted,
  Showreel,
  ContactUsElement,
} from "../../components";

function Home() {
  useEffect(() => {
    document.title = "Suara Production | Home";
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
