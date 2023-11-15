import { useState, useEffect } from "react";
import axios from "axios";
import './priceTicker.css' 

const PriceTicker = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    const fetchExchangeRates = async () => {
      const assets = ["BTC", "ETH", "XRP"];
      const promises = assets.map((asset) =>
        axios.get(
          `https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=AEDE0107-07C2-4814-9085-2477E3B247BA`
        )
      );
      const responses = await Promise.all(promises);
      const exchangeRates = responses.reduce((acc, response, index) => {
        acc[assets[index]] = response.data.rate;
        return acc;
      }, {});
      setPortfolio(exchangeRates);
    }
    fetchExchangeRates();

    // Fetch exchange rates every 5 seconds
    const intervalId = setInterval(fetchExchangeRates, 5000);

    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="portfolio">
        {Object.entries(portfolio).map(([asset, exchangeRate]) => (
          <li key={asset} className="portfolio-item">
            <span className="asset-name">{asset}/USD: </span>
            <span className="asset-rate"> {exchangeRate.toFixed(2)} $</span>
          </li>
        ))}
      </div>
    </>
  );
};

export default PriceTicker;
