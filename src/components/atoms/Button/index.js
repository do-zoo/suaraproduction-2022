import React from "react";

function ButtonLink({ to }) {
  return (
    <div className="relative">
      <a href={to ? to : "/"}>
        <button className="btn btn-md bg-text-color hover:bg-my-orange text-main-color font-bold">
          Contact Us
        </button>
      </a>
    </div>
  );
}

export default ButtonLink;
