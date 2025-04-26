import React from 'react';

const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
};

export default Button;