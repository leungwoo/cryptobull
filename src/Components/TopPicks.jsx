import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import Spotlight, { SpotlightCard } from "./Spotlight";
import withSocialIcons from "./withSocialIcons";
import Loading from "./Loading";
const TopPicks = () => {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const getCoins = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          timePeriod: "24h",
          uuids: [
            "-l8Mn2pVlRs-p",
            "o35j_d524",
            "tJAxYUnrfv",
            "SzY719EJf",
            "1Uo6s62Oc",
          ],
          limit: 10,
        },
        headers: {
          "X-RapidAPI-Key":
            "9ea0101f77msh5ed0ff4528c6926p15db84jsn0ee898e01cd6",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);

        setCoin(response.data.data.coins);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCoins();
  }, []);

  return (
    <section
      id="toppicks"
      className="bg-slate-950 px-10 pt-24 pb-24 bg-gradient-to-t from-slate-950 via-teal to-slate-950"
    >
      <Title
        title={"What's Hot"}
        subtitle={"Top Crypto Distruptors"}
        sub={"These are my potential 1000x"}
      />
      {loading && <Loading />}
      {!loading && (
        <Spotlight className="flex flex-row max-w-[1440px]  mx-auto  overflow-x-scroll gap-5">
          {coin.map((token, index) => (
            <SpotlightCard
              key={index}
              className="relative flex-shrink-0 w-[300px] min-w-[300px]  h-full bg-slate-900 p-6 pb-8  z-20 "
            >
              <div className="relative w-[300px] h-full bg-slate-900 p-6 pb-8  z-20 ">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[90px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <img
                      className="inline-flex w-44 h-40 object-contain "
                      src={token.iconUrl}
                      width={200}
                      height={200}
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                      {token.name}
                    </h2>
                    <p className="text text-pink text-lg font-bold">
                      {token.price.slice(0, 5)}
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href={token.coinrankingUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill-slate-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Explore</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </Spotlight>
      )}
    </section>
  );
};

const TopPicksWithIcons = withSocialIcons(TopPicks);
export default TopPicksWithIcons;
