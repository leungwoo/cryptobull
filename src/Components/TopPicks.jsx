import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import Spotlight, { SpotlightCard } from "./Spotlight";
const TopPicks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: "https://coingecko.p.rapidapi.com/coins/list",
        headers: {
          "X-RapidAPI-Key":
            "9ea0101f77msh5ed0ff4528c6926p15db84jsn0ee898e01cd6",
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        },
      };
      const includesToken = ["casper-network", "ripple"];
      try {
        const response = await axios.request(options);
        const tokens = response.data;
        console.log(response.data);

        const filteredToken = tokens.filter((token) =>
          includesToken.some((word) =>
            token.id.toLowerCase().match(word.toLowerCase())
          )
        );
        setData(filteredToken);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <section
      id="toppicks"
      className="bg-slate-950 px-10 py-24 bg-gradient-to-b from-slate-950 via-teal to-slate-950"
    >
      <Title
        title={"What's Hot"}
        subtitle={"Top Crypto Distruptors"}
        sub={"These are my potential 1000x"}
      />
      {/* <ol>
        {data.slice(0, 10).map((item, index) => (
          <li key={index}>
            <p>ID:{item.id}</p>
            <p>Symbol: {item.symbol}</p>
            <p>Name: {item.name}</p>
          </li>
        ))}
      </ol> */}
      <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group ">
        {/* Card #1 */}
        <SpotlightCard>
          <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-3xl z-20 overflow-hidden">
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
                  className="inline-flex rounded-xl"
                  src={
                    "https://pbs.twimg.com/card_img/1699602423562563584/cL80BrKD?format=jpg&name=4096x4096"
                  }
                  width={200}
                  height={200}
                  alt="Card 01"
                />
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-slate-200 font-bold mb-1">
                  Amazing Integration
                </h2>
                <p className="text-sm text-slate-500">
                  Quickly apply filters to refine your issues lists and create
                  custom views.
                </p>
              </div>
              <a
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                <svg
                  className="fill-slate-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                >
                  <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                </svg>
                <span>Connect</span>
              </a>
            </div>
          </div>
        </SpotlightCard>
        {/* Card #2 */}
        <SpotlightCard>
          <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              {/* Image */}
              <div className="relative inline-flex">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                  aria-hidden="true"
                ></div>
                <img
                  className="inline-flex rounded-xl"
                  src={
                    "https://global-uploads.webflow.com/63c52465b53a441b76587e8f/645b60777663517ffaaac360_TAP%20opengraph.jpg"
                  }
                  width={200}
                  height={200}
                  alt="Card 02"
                />
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-slate-200 font-bold mb-1">
                  Amazing Integration
                </h2>
                <p className="text-sm text-slate-500">
                  Quickly apply filters to refine your issues lists and create
                  custom views.
                </p>
              </div>
              <a
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                <svg
                  className="fill-slate-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                >
                  <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                </svg>
                <span>Connect</span>
              </a>
            </div>
          </div>
        </SpotlightCard>
        {/* Card #3 */}
        <SpotlightCard>
          <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              {/* Image */}
              <div className="relative inline-flex">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                  aria-hidden="true"
                ></div>
                <img
                  className="inline-flex rounded-xl"
                  src={
                    "https://u.today/sites/default/files/styles/1600x900/public/2023-08/37101_1.jpg"
                  }
                  width={200}
                  height={200}
                  alt="Card 03"
                />
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-slate-200 font-bold mb-1">
                  Amazing Integration
                </h2>
                <p className="text-sm text-slate-500">
                  Quickly apply filters to refine your issues lists and create
                  custom views.
                </p>
              </div>
              <a
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                <svg
                  className="fill-slate-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                >
                  <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                </svg>
                <span>Connect</span>
              </a>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>
    </section>
  );
};

export default TopPicks;
