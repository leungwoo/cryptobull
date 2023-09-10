import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Button from "./Button";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(news);

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
  }, []);

  return (
    <div id="news" className="bg-gradient-to-tr from-tertiary to-pink">
      {loading && <Loading />}

      <div className="flex flex-row flex-wrap gap-5 items-center justify-center mt-10">
        {!loading &&
          news.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] lg:h-[700px] p-5 lg:p-0"
              >
                <div className="flex flex-col items-center justify-center bg-teal bg-opacity-30 border border-teal rounded-b-xl ">
                  <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    className=" object-cover"
                  />
                  <div className="p-5 flex flex-col gap-4">
                    <h1 className="md:text-4xl text-xl font-bold text-center text-white">
                      {item.title}
                    </h1>
                    <p className="text-gray-300 leading-5">
                      {item.description}
                    </p>
                    <a href={`${item.url}`} target="_blank" rel="noreferrer">
                      <Button name={"Read more"} />
                    </a>
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
