import React, { FC } from 'react';

type Props = {
  className?: string;
};

const Button: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`${className} rounded-3xl px-6 py-3 text-center hover:shadow-lg hover:font-bold transition ease-in-out duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;