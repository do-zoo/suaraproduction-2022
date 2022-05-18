import React from "react";

function AboutBanner() {
  return (
    <header>
      <div className="relative batas-suci md:h-screen w-full overflow-hidden grid justify-center items-center text-text-color">
        <div className="relative batas-suci content w-full mt-[80px] py-12 md:py-0">
          <div className="relative md:w-[640px] text-center mx-auto mb-16">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
              We are proud of our masterpiece
            </h1>
            <p className="lg:text-xl mb-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="carousel rounded-box mx-auto mb-16">
            <div className=" blur-gradient w-[360px] h-[360px] absolute top-1/2 -translate-y-1/2 rounded-full" />
            <div className="carousel-item w-full md:w-1/2 lg:w-1/3 rounded-box overflow-hidden">
              <div className="rounded-box px-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="hero"
                  className="mx-auto rounded-lg max-h-72 max-w-full relative"
                />
              </div>
            </div>
            <div className="carousel-item w-full md:w-1/2 lg:w-1/3 rounded-box overflow-hidden">
              <div className="rounded-box px-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="hero"
                  className="mx-auto rounded-lg max-h-72 max-w-full relative"
                />
              </div>
            </div>
            <div className="carousel-item w-full md:w-1/2 lg:w-1/3 rounded-box overflow-hidden">
              <div className="rounded-box px-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="hero"
                  className="mx-auto rounded-lg max-h-72 max-w-full relative"
                />
              </div>
            </div>
          </div>
          <div className="about-banner">
            <div className="relative md:w-[640px] text-center mx-auto">
              <h3 className="text-xl font-bold mb-6 txt-gradient-orange">
                About Us
              </h3>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
                Who we Are?
              </h1>
              <p className="lg:text-xl mb-8">
                Suara Production is a full service video and audio production
                located in Tangerang Selatan, Indonesia. Suara Production is the
                leading production services company for Videography, Editing,
                Casting, Audio Post Production, and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutBanner;
