import { MailIcon, PaperAirplaneIcon, PhoneIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Suara Production | Contact Us";
  }, []);
  return (
    <section className=" text-text-color py-16 bg-main-color overflow-hidden relative">
      <div className="relative w-full md:w-[640px] text-center mx-auto mb-16 mt-20">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
          We are proud of our masterpiece
        </h1>
      </div>
      <div className="contact-us-form batas-suci flex justify-center ">
        <div className=" blur-gradient w-[360px] h-[360px] absolute left-[100px] top-1/2 -translate-y-1/2 rounded-full" />
        <div className="form relative bg-main-color p-6 md:p-16 rounded-box flex flex-wrap gap-16 lg:gap-0 justify-center lg:justify-between">
          {/* <!-- component --> */}
          <form className="w-full lg:w-1/2 max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-main-color"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-main-color"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-main-color"
                  id="email"
                  type="email"
                />
                <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-main-color"
                  id="subject"
                  type="text"
                />
                <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none text-main-color"
                  id="message"
                ></textarea>
                {/* <p className="text-gray-600 text-xs italic">
                  Re-size can be disabled by set by resize-none / resize-y /
                  resize-x / resize
                </p> */}
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="w-full shadow bg-my-orange hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
          <div className="my-info lg:w-1/2 md:pl-16 max-w-lg">
            <div className="flex items-center overflow-hidden h-full w-full">
              <div className="contact flex flex-none flex-wrap justify-center items-center gap-9">
                <div className="contact-item w-full flex gap-6 items-center">
                  <div className="contact-item-icon">
                    <PhoneIcon className="w-10 h-10 bg-my-orange rounded-full p-2" />
                  </div>
                  <div className="contact-item-text">
                    <p className=" md:text-xl font-bold">(+62) 813-1842-3962</p>
                    <p className="font-extralight">Call and WhatsApp </p>
                  </div>
                </div>
                <div className="contact-item w-full flex gap-6 items-center">
                  <div className="contact-item-icon">
                    <PaperAirplaneIcon className="w-10 h-10 bg-my-orange rounded-full p-2" />
                  </div>
                  <div className="contact-item-text">
                    <p className=" md:text-xl font-bold">
                      help@suaraproduction.com
                    </p>
                    <p className="font-extralight">Help Email support</p>
                  </div>
                </div>
                <div className="contact-item w-full flex gap-6 items-center">
                  <div className="contact-item-icon">
                    <MailIcon className="w-10 h-10 bg-my-orange rounded-full p-2" />
                  </div>
                  <div className="contact-item-text">
                    <p className=" md:text-xl font-bold">
                      admin@suaraproduction.com
                    </p>
                    <p className="font-extralight">Sales Enquiry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
