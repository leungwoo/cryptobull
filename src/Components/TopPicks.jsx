import { useEffect, useState } from "react";
import axios from "axios";
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
    <div id="toppicks">
      <h2>TopPicks</h2>
      <ol>
        {data.slice(0, 10).map((item, index) => (
          <li key={index}>
            <p>ID:{item.id}</p>
            <p>Symbol: {item.symbol}</p>
            <p>Name: {item.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopPicks;
