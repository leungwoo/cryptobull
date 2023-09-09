import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="w-full min-h-screen ">
      <div className="relative">
        <img
          className="absolute w-full h-screen object-cover"
          alt="hero"
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute flex flex-col gap-24 top-1/2 left-1/2 text-center -translate-x-1/2 translate-y-1/2"
        >
          <h1 className="font-extrabold sm:text-6xl leading-[50px] md:leading-[100px] text-4xl bg-gradient-to-r from-teal to-pink bg-clip-text text-transparent ">
            Are your BAGS PACKED and READY?
          </h1>
          <a href="#toppicks">
            <Button name={"Top Picks"} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
