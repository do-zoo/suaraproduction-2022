// create header component with logo and navigation
/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import Logo from "../../../assets/my-logo/logo.png";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-[99999] flex items-center batas-suci bg-main-color text-text-color py-3">
      <div className=" w-full">
        <div className="flex items-center justify-between  w-full">
          <div className="logo px-4">
            <a
              href="/"
              className="text-lg logo-font text-white flex items-center gap-3"
            >
              <img src={Logo} alt="logo" className="h-12" />
              <span className="hidden md:inline duration-500">
                Company Name
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <nav className="navigation hidden sm:block ">
              <ul className="flex items-center justify-between gap-7 uppercase">
                {navs.map((nav, index) => {
                  return (
                    <li className="text-lg text-white" key={index}>
                      <a href={nav.link} className="relative duration-500">
                        <span className="hover:text-my-orange  before:absolute before:rounded before:opacity-0 before:w-0 hover:before:opacity-100 hover:before:w-full hover:before:h-[3px] before:bg-my-orange before:bottom-0 hover:before:duration-500 duration-500">
                          {nav.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <nav
              className={
                isActive
                  ? "nav-mobile sm:hidden absolute w-full h-screen left-0 top-0 bg-main-color duration-500 z-[-10]"
                  : "absolute w-full h-screen left-0 bg-main-color  opacity-0 top-[-1000px] duration-500 z-[-10]"
              }
            >
              <ul className="flex flex-col items-center justify-between gap-[30px] uppercase mt-[80px] duration-500">
                {navs.map((nav, index) => {
                  return (
                    <li className="text-lg text-white" key={index}>
                      <a href={nav.link} className="relative duration-500">
                        <span className="hover:text-my-orange before:absolute before:rounded before:opacity-0 before:w-0 hover:before:opacity-100 hover:before:w-full hover:before:h-[3px] before:bg-my-orange before:bottom-0 hover:before:duration-500 duration-500">
                          {nav.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={
                isActive
                  ? "block sm:hidden relative right-4 w-14 h-14 duration-500 open"
                  : "block sm:hidden relative right-4 w-14 h-14 duration-500"
              }
              onClick={toggleNav}
            >
              <span
                className="icon-left absolute top-[18.5px] left-[12.5px] w-[15px] h-[3px] my-2 block bg-text-color rounded duration-500 hover:pointer
                            before:absolute before:w-[15px] before:h-[3px] before:top-[-10px] before:left-0 before:bg-text-color before:rounded before:duration-500
                            after:absolute after:w-[15px] after:h-[3px] after:top-[10px] after:left-0 after:bg-text-color after:rounded after:duration-500"
              ></span>
              <span
                className="icon-right absolute top-[18.5px] left-[25.5px] w-[15px] h-[3px] my-2 block bg-text-color rounded duration-500 hover:pointer
                            before:absolute before:w-[15px] before:h-[3px] before:top-[-10px] before:left-0 before:bg-text-color before:rounded before:duration-500
                            after:absolute after:w-[15px] after:h-[3px] after:top-[10px] after:left-0 after:bg-text-color after:rounded after:duration-500"
              ></span>
              {/* <span className='w-[30px] h-[3px] my-2 block bg-text-color rounded'></span>
                        <span className='w-[30px] h-[3px] my-2 block bg-text-color rounded'></span> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
