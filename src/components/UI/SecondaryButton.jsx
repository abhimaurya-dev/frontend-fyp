import React from "react";

const SecondaryButton = ({ children, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-green-700 hover:bg-green-100 active:scale-95 transition duration-200 px-8 md:px-10 py-3 md:py-4 text-sm md:text-xl text-green-950 mt-10 rounded-lg ${style}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
