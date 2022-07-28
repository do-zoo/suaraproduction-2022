import React from "react";
import {
  footerVectorL,
  footerVectorR,
  LogoPanjangPutih,
} from "../../../assets";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-header-footer-color">
      {/* <img src={footerVectorL} alt="" className='absolute h-full -z-10'/> */}
      <div
        className="bg-l absolute  h-full w-full  top-0 -translate-y-60 bg-left-top"
        style={{
          backgroundImage: `url(${footerVectorL})`,
          backgroundSize: "cover",
          // backgroundPositionY: 'center',
          // backgroundPositionX: 'left',
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* <img src={footerVectorR} alt=""  className='absolute w-[1728px] h-[636.7px] right-0 -z-10 bottom-0'/> */}
      <div
        className="bg-r absolute  h-full w-full right-0 bottom-0 bg-left-top bg-fixed "
        style={{
          backgroundImage: `url(${footerVectorR})`,
          backgroundSize: "cover",
          // backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative w-full batas-suci pt-6 text-text-color ">
        <div className="brand max-w-[480px] md:pb-24">
          <img src={LogoPanjangPutih} alt="Logo" />
        </div>
        <div className="footer-content flex flex-col md:flex-row gap-16 justify-between pt-6 pb-12">
          <div className="footer-content-item text-center md:w-[560px] px-12 md:px-0">
            <div className="footer-content-item-title">
              <h3 className="font-bold text-xl py-6">About Us</h3>
            </div>
            <div className="footer-content-item-content">
              <p>
                Suara Production is a full service video and audio production
                located in Tangerang Selatan, Indonesia. Suara Production is the
                leading production services company for Videography, Editing,
                Casting, Audio Post Production, and many more.
              </p>
            </div>
          </div>
          <div className="footer-content-item md:w-[560px] px-12 md:px-0">
            <div className="footer-content-item-title text-center">
              <h3 className="font-bold text-xl py-6">Contact Us</h3>
            </div>
            <div className="footer-content-item-content">
              <div className="contact-item pb-4">
                <h4 className="font-bold"> Address :</h4>
                <p>
                  JL Pembangunan, No. 46, Jombang, Ciputat, Jombang, Tangerang,
                  Kota Tangerang Selatan, Banten (15414).
                </p>
              </div>
              <div className="contact-item pb-4">
                <span className="font-bold"> Phone : </span>
                <span>(+62) 813-1842-3962</span>
              </div>
              <div className="contact-item">
                <span className="font-bold"> Email : </span>
                <span>help@suaraproduction.com</span>
              </div>
              <div className="social-item py-8 mx-auto">
                <div className="social flex px-12 gap-6 justify-center">
                  <a
                    href="https://www.facebook.com/suaraproduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="21"
                        fill="url(#paint0_linear_42_694)"
                      />
                      <path
                        d="M31.8206 30.4223L32.7534 24.4951H26.9178V20.6505C26.9178 19.0286 27.7315 17.4466 30.3452 17.4466H33V12.4005C33 12.4005 30.5918 12 28.2904 12C23.4823 12 20.3425 14.8394 20.3425 19.9777V24.4951H15V30.4223H20.3425V44.7517C21.4151 44.9159 22.5124 45 23.6302 45C24.748 45 25.8453 44.9159 26.9178 44.7517V30.4223H31.8206Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_42_694"
                          x1="24"
                          y1="3"
                          x2="24"
                          y2="44.8754"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18ACFE" />
                          <stop offset="1" stopColor="#0163E0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/suaraproduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="42"
                        height="42"
                        rx="6"
                        fill="url(#paint0_radial_42_693)"
                      />
                      <rect
                        x="3"
                        y="3"
                        width="42"
                        height="42"
                        rx="6"
                        fill="url(#paint1_radial_42_693)"
                      />
                      <rect
                        x="3"
                        y="3"
                        width="42"
                        height="42"
                        rx="6"
                        fill="url(#paint2_radial_42_693)"
                      />
                      <path
                        d="M34.5 15.75C34.5 16.9926 33.4926 18 32.25 18C31.0074 18 30 16.9926 30 15.75C30 14.5074 31.0074 13.5 32.25 13.5C33.4926 13.5 34.5 14.5074 34.5 15.75Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 31.5C28.1421 31.5 31.5 28.1421 31.5 24C31.5 19.8579 28.1421 16.5 24 16.5C19.8579 16.5 16.5 19.8579 16.5 24C16.5 28.1421 19.8579 31.5 24 31.5ZM24 28.5C26.4853 28.5 28.5 26.4853 28.5 24C28.5 21.5147 26.4853 19.5 24 19.5C21.5147 19.5 19.5 21.5147 19.5 24C19.5 26.4853 21.5147 28.5 24 28.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 23.4C9 18.3595 9 15.8393 9.98094 13.9141C10.8438 12.2206 12.2206 10.8438 13.9141 9.98094C15.8393 9 18.3595 9 23.4 9H24.6C29.6405 9 32.1607 9 34.0859 9.98094C35.7794 10.8438 37.1562 12.2206 38.0191 13.9141C39 15.8393 39 18.3595 39 23.4V24.6C39 29.6405 39 32.1607 38.0191 34.0859C37.1562 35.7794 35.7794 37.1562 34.0859 38.0191C32.1607 39 29.6405 39 24.6 39H23.4C18.3595 39 15.8393 39 13.9141 38.0191C12.2206 37.1562 10.8438 35.7794 9.98094 34.0859C9 32.1607 9 29.6405 9 24.6V23.4ZM23.4 12H24.6C27.1697 12 28.9166 12.0023 30.2669 12.1127C31.5821 12.2201 32.2547 12.4149 32.7239 12.654C33.8529 13.2292 34.7708 14.1471 35.346 15.2761C35.5851 15.7453 35.7799 16.4179 35.8873 17.7331C35.9977 19.0834 36 20.8303 36 23.4V24.6C36 27.1697 35.9977 28.9166 35.8873 30.2669C35.7799 31.5821 35.5851 32.2547 35.346 32.7239C34.7708 33.8529 33.8529 34.7708 32.7239 35.346C32.2547 35.5851 31.5821 35.7799 30.2669 35.8873C28.9166 35.9977 27.1697 36 24.6 36H23.4C20.8303 36 19.0834 35.9977 17.7331 35.8873C16.4179 35.7799 15.7453 35.5851 15.2761 35.346C14.1471 34.7708 13.2292 33.8529 12.654 32.7239C12.4149 32.2547 12.2201 31.5821 12.1127 30.2669C12.0023 28.9166 12 27.1697 12 24.6V23.4C12 20.8303 12.0023 19.0834 12.1127 17.7331C12.2201 16.4179 12.4149 15.7453 12.654 15.2761C13.2292 14.1471 14.1471 13.2292 15.2761 12.654C15.7453 12.4149 16.4179 12.2201 17.7331 12.1127C19.0834 12.0023 20.8303 12 23.4 12Z"
                        fill="white"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_42_693"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(18 34.5) rotate(-55.3758) scale(38.2794)"
                        >
                          <stop stopColor="#B13589" />
                          <stop offset="0.79309" stopColor="#C62F94" />
                          <stop offset="1" stopColor="#8A3AC8" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_42_693"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(16.5 46.5) rotate(-65.1363) scale(33.8914)"
                        >
                          <stop stopColor="#E0E8B7" />
                          <stop offset="0.444662" stopColor="#FB8A2E" />
                          <stop offset="0.71474" stopColor="#E2425C" />
                          <stop
                            offset="1"
                            stopColor="#E2425C"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <radialGradient
                          id="paint2_radial_42_693"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.750002 4.5) rotate(-8.1301) scale(58.3363 12.4775)"
                        >
                          <stop offset="0.156701" stopColor="#406ADC" />
                          <stop offset="0.467799" stopColor="#6A45BE" />
                          <stop
                            offset="1"
                            stopColor="#6A45BE"
                            stopOpacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC-jW62zINDEiHi0qfTS4RPQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="48"
                      height="45"
                      viewBox="0 0 48 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.36676 14.5038C3.55956 11.7875 5.94592 9.65871 8.9167 9.52402C13.2186 9.32898 19.3672 9.09375 24 9.09375C28.6328 9.09375 34.7814 9.32898 39.0833 9.52402C42.0541 9.65871 44.4404 11.7875 44.6332 14.5038C44.818 17.1062 45 20.3084 45 22.8209C45 25.3334 44.818 28.5356 44.6332 31.138C44.4404 33.8543 42.0541 35.9831 39.0833 36.1178C34.7814 36.3128 28.6328 36.548 24 36.548C19.3672 36.548 13.2186 36.3128 8.9167 36.1178C5.94592 35.9831 3.55956 33.8543 3.36676 31.138C3.18205 28.5356 3 25.3334 3 22.8209C3 20.3084 3.18205 17.1062 3.36676 14.5038Z"
                        fill="#FC0D1B"
                      />
                      <path
                        d="M19.5 17.3301V28.3118L31.5 22.8209L19.5 17.3301Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright relative text-center md:py-6 py-4 bg-text-color text-main-color">
        SUARA PRODUCTION Media © 2021 – All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
