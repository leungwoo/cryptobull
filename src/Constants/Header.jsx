import { motion } from "framer-motion";
import DropdownMenu from "../Components/DropDownMenu";

const Header = () => {
  return (
    <div className="flex flex-row sticky justify-between items-center h-24 bg-tertiary px-10 ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center"
      >
        <img
          className="w-24 h-24 lg:w-32 lg:h-32"
          src="/assets/CryptoBull-removebg-preview.png"
          alt="logo"
        />
      </motion.div>
      {/* Desktop */}
      <div className="hidden sm:flex flex-row sm:gap-10 gap-5 text-pink font-semibold sm:text-xl">
        <a href="#news">
          <p className="hover:underline">News</p>
        </a>
        <a href="#toppicks">
          <p className="hover:underline">Top Picks</p>
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
