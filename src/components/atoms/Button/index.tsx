import React, { FC } from 'react';

import { Link } from 'react-router-dom';

type Props = {
  to?: string;
};

const ButtonLink: FC<Props> = ({ to }) => {
  return (
    <div className="relative ">
      <Link to={to ? to : '/'}>
        <button className="btn btn-md bg-text-color hover:bg-my-orange text-main-color font-bold">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ButtonLink;
