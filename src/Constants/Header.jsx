import { motion } from "framer-motion";
import DropdownMenu from "../Components/DropDownMenu";

const Header = () => {
  return (
    <div className="flex flex-row sticky justify-between items-center h-24  px-10 p ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.0, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 20 }}
        className=" flex justify-center items-center pt-5 "
      >
        <img
          className="w-28 h-28 lg:w-32 lg:h-32"
          src="/CryptoBull-removebg-preview.png"
          alt="logo"
        />
      </motion.div>
      {/* Desktop */}
      <div className="hidden sm:flex flex-row sm:gap-10 gap-5 text-tertiary font-medium sm:text-xl">
        <a href="#news">
          <p className="hover:text-teal transition-all duration-500 ease-in-out">
            News
          </p>
        </a>
        <a href="#toppicks">
          <p className=" hover:text-teal transition-all duration-500 ease-in-out">
            Top Picks
          </p>
        </a>
      </div>
      {/* Mobile */}
      <div className="sm:hidden flex ">
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Header;
