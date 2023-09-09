import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-6 bg-teal-500 px-6 ">
      <div>
        <h1>Icon</h1>
      </div>
      <div className="flex flex-row gap-5">
        <p>Home</p>
        <p>Portfolio</p>
      </div>
    </div>
  );
};

export default Header;
