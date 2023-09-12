import {
  xrp,
  btc,
  xrp2,
  eth,
  bnb,
  ada,
  polygon,
  ltc,
  moreno,
  ape,
  vechain,
  stella,
  link,
  uniswap,
} from "../assets/index";

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
  //   {
  //     image: bnb,
  //   },
  //   {
  //     image: polygon,
  //   },
  //   {
  //     image: ltc,
  //   },
  //   {
  //     image: ape,
  //   },

  //   {
  //     image: vechain,
  //   },
  //   {
  //     image: stella,
  //   },
  //   {
  //     image: link,
  //   },
  //   {
  //     image: uniswap,
  //   },
  //   {
  //     image: xrp,
  //   },
  //   {
  //     image: btc,
  //   },
  //   {
  //     image: xrp2,
  //   },
  //   {
  //     image: eth,
  //   },
  //   {
  //     image: ada,
  //   },
  //   {
  //     image: bnb,
  //   },
  //   {
  //     image: polygon,
  //   },
  //   {
  //     image: ltc,
  //   },
  //   {
  //     image: ape,
  //   },

  //   {
  //     image: vechain,
  //   },
  //   {
  //     image: stella,
  //   },
];

const CoinBanner = () => {
  return (
    <div className="xl:max-w-[1440px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">
      <div className="relative xl:max-w-[1440px]">
        <div className="inline-flex animate-scroll ">
          {cryptoCoins.map((coin, index) => (
            <img
              key={index}
              src={coin.image}
              alt="cryptocoin"
              className="w-20 h-20 object-cover inline-block mx-20 p-2  "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinBanner;
