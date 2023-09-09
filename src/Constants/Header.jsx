import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row sticky justify-between items-center h-12 bg-teal-500 px-10 ">
      <div>
        <a href="#home">
          {" "}
          <h1>Logo</h1>
        </a>
      </div>
      <div className="flex flex-row gap-5">
        <a href="#news">
          <p>News</p>
        </a>
        <a href="#toppicks">
          <p>Top Picks</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
