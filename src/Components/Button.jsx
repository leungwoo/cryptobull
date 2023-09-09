import React from "react";

const Button = ({ name }) => {
  return (
    <button className="border-2 border-[#da058c] rounded-lg px-4 py-2 text-white bg-slate-400 font-medium">
      {name}
    </button>
  );
};

export default Button;
