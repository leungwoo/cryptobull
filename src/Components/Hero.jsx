import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="relative">
        <img
          className="absolute w-full h-screen object-cover"
          alt="hero"
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
        />
        <div className="absolute flex flex-col gap-5 top-3/4 left-1/2 text-center -translate-x-1/2 translate-y-1/2">
          <h1 className=" font-extrabold text-6xl bg-gradient-to-r from-[#00b1b1] to-[#da058c] bg-clip-text text-transparent ">
            Are your BAGS PACKED and READY?
          </h1>
          <a href="#toppicks">
            <Button name={"Top Picks"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
