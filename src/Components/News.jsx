import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Button from "./Button";
import NothingLoading from "./NothingLoading";
import withSocialIcons from "./withSocialIcons";

const dummyNewsData = [
  {
    url: "https://www.coindesk.com/policy/2023/02/08/crypto-exchange-bitstamp-registers-in-france/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Crypto Exchange Bitstamp Registers in France",
    description:
      "The exchange joins Binance, Bitpanda and Société Générale in securing recognition from one of the most sophisticated regimes in the EU.",
    thumbnail:
      "https://www.coindesk.com/resizer/eblN6NsVqLeX8MvkJ76z27jOEpY=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/RDCXEGZK4FGGBPWNR6CDUTGDIU.jpg",
    createdAt: "Wed, 08 Feb 2023 14:09:00 +0000",
  },
  {
    url: "https://example.com/article2",
    title: "Sample Article 2",
    description: "Description for Sample Article 2.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3J5cHRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    createdAt: "Thu, 09 Feb 2023 10:30:00 +0000",
  },
  {
    url: "https://example.com/article3",
    title: "Sample Article 3",
    description: "Description for Sample Article 3.",
    thumbnail:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    createdAt: "Fri, 10 Feb 2023 15:45:00 +0000",
  },
  {
    url: "https://example.com/article4",
    title: "Sample Article 4",
    description: "Description for Sample Article 4.",
    thumbnail:
      "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3J5cHRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    createdAt: "Sat, 11 Feb 2023 08:20:00 +0000",
  },
  {
    url: "https://example.com/article5",
    title: "Sample Article 5",
    description: "Description for Sample Article 5.",
    thumbnail:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    createdAt: "Sun, 12 Feb 2023 17:55:00 +0000",
  },
  {
    url: "https://example.com/article6",
    title: "Sample Article 6",
    description: "Description for Sample Article 6.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670249421308-15ae3965c326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    createdAt: "Mon, 13 Feb 2023 12:10:00 +0000",
  },
  {
    url: "https://example.com/article7",
    title: "Sample Article 7",
    description: "Description for Sample Article 7.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670249419932-a7027d9003f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    createdAt: "Tue, 14 Feb 2023 19:30:00 +0000",
  },
  {
    url: "https://example.com/article8",
    title: "Sample Article 8",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quod praesentium dignissimos id facere exercitationem vero qui sapiente quisquam! In excepturi obcaecati vero eum similique praesentium, cupiditate quibusdam officiis odio?",
    thumbnail:
      "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    createdAt: "Wed, 15 Feb 2023 14:45:00 +0000",
  },
];

const News = () => {
  const [news, setNews] = useState([]);
  const [apiFetchedData, setApiFetchedData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newsLoadingMessage, setNewsLoadingMessage] = useState(
    "Hang in there we are working on getting you the latest news 👀"
  );
  //console.log(news);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setNewsLoadingMessage(
        "It appears we are having trouble getting the latest news. Please try again later"
      );
    }, 15000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const options = {
        method: "GET",
        url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
        headers: {
          "X-RapidAPI-Key":
            "9ea0101f77msh5ed0ff4528c6926p15db84jsn0ee898e01cd6",
          "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
        },
      };
      const includeWords = [
        "bitcoin",
        "cspr",
        "xrp",
        "altcoin",
        "ethereum",
        "xtp",
        "qnt",
      ];
      try {
        const response = await axios.request(options);
        const apiData = response.data.data;
        // Filter news items containing any of the includeWords
        const filteredData = apiData.filter((item) =>
          includeWords.some((word) =>
            item.title.toLowerCase().includes(word.toLowerCase())
          )
        );
        if (filteredData.length >= 8) {
          setNews(filteredData.slice(0, 8));
        } else {
          setNews(filteredData);
        }
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, [apiFetchedData]);

  return (
    <div
      id="news"
      className="bg-gradient-to-tr from-tertiary to-pink flex flex-col gap-5 items-center pt-10 pb-10"
    >
      {loading && (
        <h1 className="text-teal text-xl font-bold p-5 items-center">
          {newsLoadingMessage}
        </h1>
      )}
      <button
        className="bg-teal px-4 py-2 text-lg font-semibold rounded-xl"
        onClick={() => setApiFetchedData(!apiFetchedData)}
      >
        {" "}
        Refresh
      </button>
      <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
        {loading && <Loading />}
        {!loading && dummyNewsData.length === 0 ? <NothingLoading /> : null}
        {!loading &&
          dummyNewsData.map((item, index) => {
            return (
              <div key={index} className=" max-w-lg  py-5 px-10 ">
                <div className="hover:shadow-lg hover:shadow-white transition-all duration-200 ease-in-out p-5 shadow-md shadow-white h-[580px] gap-4 flex flex-col items-center bg-teal bg-opacity-30  rounded-br-3xl rounded-tr-3xl ">
                  <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    className=" w-full h-[300px] object-cover rounded-tr-3xl border-2 border-teal"
                  />
                  <div className=" flex flex-col gap-2 px-4 items-center">
                    <p className="xl:text-4xl text-2xl font-bold text-center text-white">
                      {item.title.slice(0, 30)}
                      {"..."}
                    </p>
                    <p className="text-gray-300 leading-8">
                      {item.description.slice(0, 100)}
                      {"..."}
                    </p>
                    <Button name={"Read more"}>
                      <a href={`${item.url}`} target="_blank" rel="noreferrer">
                        {" "}
                        Read More{" "}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
