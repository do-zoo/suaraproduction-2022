import React, { FC } from 'react';
import { Link, useLocation, useMatch, useResolvedPath } from 'react-router-dom';

interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
}

const CustomLink: FC<CustomLinkProps> = ({ children, to, onClick }) => {
  const resolved = useResolvedPath(to);
  const location = useLocation();

  const baseUrl = location.pathname.split('/')[2];
  const match =
    useMatch({ path: resolved.pathname, end: true }) || to === `/${baseUrl}`
      ? true
      : false;

  return (
    <>
      <Link to={to} className="relative duration-500">
        <span
          onClick={onClick}
          className={`${
            match
              ? 'text-my-orange before:opacity-100 before:w-full before:h-[3px]'
              : 'before:opacity-0 before:w-0'
          } hover:text-my-orange hover:before:duration-500 hover:before:opacity-100 hover:before:w-full hover:before:h-[3px] before:absolute before:rounded before:bg-my-orange before:bottom-0  duration-500`}
        >
          {children}
        </span>
      </Link>
    </>
  );
};

export default CustomLink;
