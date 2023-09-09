import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row sticky justify-between items-center h-20 bg-tertiary px-10 ">
      <div className="flex items-center justify-center p-4">
        <h1 className="text-xl rounded-full font-bold text-pink">CryptoBull</h1>
      </div>
      <div className="flex flex-row sm:gap-10 gap-5 text-pink font-semibold sm:text-lg">
        <a href="#news">
          <p className="hover:underline">News</p>
        </a>
        <a href="#toppicks">
          <p className="hover:underline">Top Picks</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
