import React from "react";

const PrimaryButton = ({ children, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-green-700 px-8 md:px-10 py-3 md:py-4 text-sm md:text-xl text-green-950 hover:bg-green-400 active:scale-95 transition duration-200 bg-green-500 mt-10 rounded-lg ${style}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
