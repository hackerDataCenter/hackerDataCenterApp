import { useEffect } from "react";
import { Link } from "react-router-dom";
import { create } from "zustand";
import axios from "axios";

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",
  searched: false,

  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    const { query, trending } = homeStore.getState();

    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });

      set({ coins, searched: true });
    } else {
      set({ coins: trending, searched: false });
    }
  }, 500),

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
      ),
    ]);

    const btcPrice = btcRes.data.bitcoin.usd;
    console.log(btcPrice);

    const coins = res.data.coins.map((coin) => {
      return {
        id: coin.item.id,
        name: coin.item.name,
        image: coin.item.large,
        priceBtc: coin.item.price_btc.toFixed(10),
        priceUsd: (coin.item.price_btc * btcPrice).toFixed(10),
      };
    });

    console.log(coins);

    set({ coins, trending: coins });
  },
}));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const Home = () => {

  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <header className="btnContainer">
        {/* <button className="goBackButton">
          {//ToDo -> nur anzeigen auf <Home /> 
          }
          <Link to="/">&#9166;</Link>
        </button> */}
      </header>
      <main className="home-search">
        <div className="width">
          {/* <p>Search coins</p> */}
          <div className="home-search-input">
            <input
              type="text"
              placeholder="Search"
              value={store.query}
              onChange={store.setQuery}
            />
          </div>
        </div>
      </main>
      <div className="home-cryptos">
        <div className="width">
          <h2> {!store.searched ? "Trending Coins" : "Search Results"}</h2>
          {store.coins.map((coin) => {
            return (
              <div key={coin.id} className="home-crypto">
                <Link to={`/${coin.id}`}>
                  <span className="home-crypto-image">
                    <img src={coin.image} />
                  </span>
                  <span className="home-crypto-name">{coin.name}</span>
                  <span className="home-crypto-prices">
                    <span className="home-crypto-btc">{coin.priceUsd} $</span>
                    <span className="home-crypto-usd">{coin.priceBtc}BTC</span>
                  </span>
                </Link>
              </div>
            )})}
        </div>
      </div>
    </div>
  );
}
export default Home;
