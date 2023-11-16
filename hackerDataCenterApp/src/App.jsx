import "./App.css";
import MemeJokeQuote from "./components/MemeJokeQuote.jsx";
import PriceTicker from "./components/PriceTicker.jsx";
import { News } from "./components/News.jsx";
import Wetter from "./components/Wetter.jsx";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./global/ModalProvider.jsx";
import { Modal } from "./reusable/Modal.jsx";
import { ModalBG } from "./reusable/modalbg.jsx";
import { EssenBestellen } from "./components/EssenBestellen.jsx";

//! stockMarket imports
import Home from "./components/stockMarketComponents/Home.jsx";
import Show from "./components/stockMarketComponents/Show.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import './components/stockMarketComponents/styles.scss'
import ChatBot from "./components/ChatBot.jsx";


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
      <div className="newsTicker">
        <PriceTicker />
      </div>
        <div className="news" onClick={(e) => modalHaendler(e, "news")}>
          <News />
        </div>
        <div className="wetter" onClick={(e) => modalHaendler(e, "weather")}>
          <Wetter />
        </div>
        <div className="boerse"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "joke")}></button></div>
        <div className="quoteJokeFact">
          <MemeJokeQuote /> 
        </div>
        <div className="orderPizza" onClick={(e) => modalHaendler(e, "essen")}>
        <EssenBestellen/>
        </div>
        <div className="chat" >
          <ChatBot />
        </div>
        <div className="deepL"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "deepl")}></button ></div>
        <div className="sthCoolLikeNasa"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "bitcoin")}>Bitcoin</button></div>
        <div className="darknetMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "darknetMarket")}>darknetMarket</button></div>
        <div className="stockMarket">
          <BrowserRouter>
            <ChakraProvider>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/:id" element={<Show />} />
              </Routes>
            </ChakraProvider>
          </BrowserRouter>
        </div>
        {/* <div className="tinder"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "tinder")}></button></div> */}
      </div>
    </>
  );
}

export default App;