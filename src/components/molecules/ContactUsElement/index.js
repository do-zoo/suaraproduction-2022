import React from "react";
import { ButtonLink } from "../../atoms";

function ContactUsElement() {
  return (
    <div className="relative w-full h-screen flex flex-col gap-6 md:gap-6 justify-center items-center batas-suci text-text-color">
      <div className="text-sec">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-4">
          Are you ready to grow your business with us?
        </h1>
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <ButtonLink to="/contact" />
    </div>
  );
}

export default ContactUsElement;
