import "./App.css";
import MemeJokeQuote from "./components/MemeJokeQuote.jsx";
import PriceTicker from "./components/PriceTicker.jsx";
import Wetter from "./components/Wetter.jsx";

function App() {
  // Komponenten können im Ordner 'components' angelegt und hier im jeweiligen div eingefügt werden
  return (
    <>
<div className="container">
  <div className="newsTicker">
    <PriceTicker />
  </div>
  <div className="sthCoolLikeNasa">Nasa Shit</div>
  <div className="chat">Chat</div>
  <div className="quoteJokeFact">
    <MemeJokeQuote />
  </div>
  <div className="orderPizza">orderPizza</div>
  <div className="darknetMarket">darknet Market</div>
  <div className="stockMarket">
    stock Market
    

    
    </div>
  <div className="deepL">deep L </div>
  <div className="wetter">
    <Wetter />
  </div>
  <div className="news">News</div>
  <div className="kontaktBörse">Tinmder</div>
</div>
    </>
  );
}

export default App;