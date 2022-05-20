import React, { useEffect } from "react";
import { AboutBanner, ContactUsElement, OurTeam } from "../../components";

function About() {
  useEffect(() => {
    document.title = "Suara Production | About Us";
  }, []);
  return (
    <section>
      <AboutBanner />
      <div className="vision batas-suci flex flex-col md:flex-row gap-16 text-main-color bg-text-color py-16">
        <div className="item batas-suci">
          <div className="item-title">
            <h3 className="txt-gradient-blue font-bold mb-6 text-xl">
              Our Goals
            </h3>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
              To upscale your business to the next level
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
        <div className="item batas-suci">
          <div className="item-title">
            <h3 className="txt-gradient-blue font-bold mb-6 text-xl">
              Our Vision
            </h3>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
              To provide solutions for growing companies
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
      <ContactUsElement />
    </section>
  );
}

export default About;
