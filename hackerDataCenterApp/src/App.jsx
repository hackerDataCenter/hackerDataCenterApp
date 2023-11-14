import "./App.css";
import MemeJokeQuote from "./components/MemeJokeQuote.jsx";
import Wetter from "./components/Wetter.jsx";

function App() {
  // Komponenten können im Ordner 'components' angelegt und hier im jeweiligen div eingefügt werden
  return (
    <>
      <div className="container">
        <div className="news"></div>
        <div className="wetter">
          <Wetter />
        </div>
        <div className="Börse"></div>
        <div className="quoteJokeFact">
          <MemeJokeQuote /> 
        </div>
        <div className="orderPizza"></div>
        <div className="chat"></div>
        <div className="deepL"></div>
        <div className="sthCoolLikeNasa"></div>
        <div className="darknetMarket"></div>
        <div className="stockMarket"></div>
        <div className="tinder"></div>
      </div>
    </>
  );
}

export default App;