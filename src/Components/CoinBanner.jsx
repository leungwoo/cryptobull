import { xrp, btc, xrp2, eth, bnb, ada, polygon, ltc } from "../assets/index";

const cryptoCoins = [
  {
    image: xrp,
  },
  {
    image: btc,
  },
  {
    image: xrp2,
  },
  {
    image: eth,
  },
  {
    image: ada,
  },
  {
    image: bnb,
  },
  {
    image: polygon,
  },
  {
    image: ltc,
  },
];

const CoinBanner = () => {
  return (
    <div className="w-[1440px] inline-flex flex-nowrap overflow-hidden">
      <div className="relative w-[1440px]">
        <div className="inline-flex animate-scroll [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {cryptoCoins.map((coin, index) => (
            <img
              key={index}
              src={coin.image}
              alt="cryptocoin"
              className="w-20 h-20 object-cover inline-block mx-10 p-2 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinBanner;
