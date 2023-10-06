import Header from "../Constants/Header";
import Button from "./Button";
import CoinBanner from "./CoinBanner";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-[750px] bg-primary bg-no-repeat  bg-cover bg-left-top bg-slate-950 relative"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Header />
      <div className="flex flex-col justify-end h-full">
        <div className="absolute flex flex-col gap-24 top-1/3  px-10  text-start xl:w-2/3">
          <div className="flex flex-col gap-5">
            <h3 className="text-base xl:text-xl font-medium text-tertiary">
              The Bulls are in charge
            </h3>
            <h1 className="font-bold sm:text-6xl leading-[50px] md:leading-[100px] text-4xl bg-gradient-to-r from-teal to-pink bg-clip-text text-transparent ">
              Are you READY?
            </h1>
          </div>
          <a href="#toppicks">
            <Button name={"Top Picks"} pulse={"pulse"} size={"auto"} />
          </a>
        </div>
      </div>
      <div className="absolute -bottom-10 z-50">
        <CoinBanner />
      </div>
    </div>
  );
};

export default Hero;
