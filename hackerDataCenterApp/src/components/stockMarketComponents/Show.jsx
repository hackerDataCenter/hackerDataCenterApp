import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { create } from "zustand";
import axios from "axios";


//???????????????????????????????????????????????????????????????????

const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const [graphsRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=100&interval=daily&precision=2`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      ),
    ]);

    const graphData = graphsRes.data.prices.map((price) => {
      const [timeStamp, priceValue] = price;
      const date = new Date(timeStamp).toLocaleDateString("de-de");
      return {
        Date: date,
        Price: priceValue,
      };
    });
      console.log(dataRes);
    set({
      data: dataRes.data, // Set the fetched data to `store.data`
      graphData,
    });
  },
}));

//???????????????????????????????????????????????????????????????????


const Show = () => {
  const store = showStore();
  //to get the coin id from the url
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, []);

  if (!store.data) {
    return <></>;
  }
 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  const Header = () => {
    return (
      <div className="btnContainer">
        <button className="goBackButton">
          <Link to="/">Go back</Link>
        </button>
      </div>
    );
  };
 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

  return (
    <div>
      <Header back />
      <header className="show-header">
        {/* <img src={store.data.image.large} /> */}
        <h2>
          {store.data.name} ({store.data.symbol.toUpperCase()})
        </h2>
      </header>
      <div>
        <div className="width">
          <div className="show-graph">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={store.graphData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Price"
                  stroke="#8884d8"
                  fill="#060072"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show;
