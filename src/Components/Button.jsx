import React from "react";

const Button = ({ name, pulse, size }) => {
  return (
    <button
      className={`animate-${pulse} border border-[#da058c] px-8 py-2 text-white text-xl w-full xl:w-${size} sm:w-auto font-semibold bg-gradient-to-r from-gray-400 to-[#da058c] hover:bg-gradient-to-r hover:from-[#da058c] hover:to-gray-400`}
    >
      {name}
    </button>
  );
};

export default Button;
