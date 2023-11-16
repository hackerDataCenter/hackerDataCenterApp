import "./App.css";
import MemeJokeQuote from "./components/MemeJokeQuote.jsx";
import { News } from "./components/News.jsx";
import Wetter from "./components/Wetter.jsx";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./global/ModalProvider.jsx";
import { Modal } from "./reusable/Modal.jsx";
import { ModalBG } from "./reusable/modalbg.jsx";
import { EssenBestellen } from "./components/EssenBestellen.jsx";

function App() {
  // Komponenten können im Ordner 'components' angelegt und hier im jeweiligen div eingefügt werden
  const {open, setOpen, setLoad} = useContext(ModalContext)
  const [fetchIdent, setFetchIdent] = useState("");
  const modalHaendler = (e, string) => {
   e.preventDefault();

   setFetchIdent(string)
   setOpen(!open)
}
  useEffect(() => {

  },[open])

  return (
    <>
    {open && <div className="modalContainer"> <Modal fetchIdent={fetchIdent} /> <ModalBG/> </div>}
      
      <div className="container">
        <div className="news" onClick={(e) => modalHaendler(e, "news")}>
          <News />
        </div>
        <div className="wetter" onClick={(e) => modalHaendler(e, "weather")}>
          <Wetter />
        </div>
        <div className="matrix">
          <img src="https://www.techgrube.de/wp-content/uploads/2018/09/cmatrix-animated.gif" alt="Matrix terminal" className="matrixterminal" />
        </div>
        <div className="quoteJokeFact">
          <MemeJokeQuote /> 
        </div>
        <div className="orderPizza" onClick={(e) => modalHaendler(e, "essen")}>
        <EssenBestellen/>
        </div>
        <div className="chat"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "chat")}></button></div>
        <div className="erde">
          <img src="https://cdn.pixabay.com/animation/2022/11/13/07/16/07-16-41-513_512.gif" alt="erde" className='erdegif' />
          </div>
        <div className="sthCoolLikeNasa"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "bitcoin")}>Bitcoin</button></div>
        <div className="darknetMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "darknetMarket")}>darknetMarket</button></div>
        <div className="stockMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "stockMarket")}>stockMarket</button></div>
        {/* <div className="tinder"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "tinder")}></button></div> */}
      </div>
    </>
  );
}

export default App;