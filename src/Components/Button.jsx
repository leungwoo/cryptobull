import React from "react";

const Button = ({ name, pulse }) => {
  return (
    <button
      className={`animate-${pulse} border-2 border-[#da058c] rounded-3xl px-6 py-2 text-white text-xl w-full sm:w-auto font-semibold bg-gradient-to-r from-gray-400 to-[#da058c] hover:bg-gradient-to-r hover:from-[#da058c] hover:to-gray-400`}
    >
      {name}
    </button>
  );
};

export default Button;
