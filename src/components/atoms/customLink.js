import React from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let location = useLocation();

  let baseUrl = location.pathname.split("/")[2];
  let match =
    useMatch({ path: resolved.pathname, end: true }) || to === `/${baseUrl}`
      ? true
      : false;

  return (
    <>
      <Link to={to} className="relative duration-500">
        <span
          className={`${
            match
              ? "text-my-orange before:opacity-100 before:w-full before:h-[3px]"
              : "before:opacity-0 before:w-0"
          } hover:text-my-orange hover:before:duration-500 hover:before:opacity-100 hover:before:w-full hover:before:h-[3px] before:absolute before:rounded before:bg-my-orange before:bottom-0  duration-500`}
        >
          {children}
        </span>
      </Link>
    </>
  );
}

export default CustomLink;
