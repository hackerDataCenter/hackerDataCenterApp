import "./App.css";
import MemeJokeQuote from "./components/MemeJokeQuote.jsx";
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
        <div className="news"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "news")}></button></div>
        <div className="wetter">
          <Wetter /><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "weather")}></button>
        </div>
        <div className="boerse"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "hallo")}></button></div>
        <div className="quoteJokeFact">
          <MemeJokeQuote /> 
        </div>
        <div className="orderPizza"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "essen")}></button>
        <EssenBestellen/>
        </div>
        <div className="chat"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "chat")}></button></div>
        <div className="deepL"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "deepl")}></button ></div>
        <div className="sthCoolLikeNasa"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "sthcoolLikeNasa")}></button></div>
        <div className="darknetMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "darknetMarket")}></button></div>
        <div className="stockMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "stockMarket")}></button></div>
        {/* <div className="tinder"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "tinder")}></button></div> */}
      </div>
    </>
  );
}

export default App;