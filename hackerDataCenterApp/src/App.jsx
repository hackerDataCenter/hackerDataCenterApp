import "./App.css";
import MemeJokeQuote from "./components/MemeJokeQuote.jsx";
import Wetter from "./components/Wetter.jsx";
import { useContext, useEffect } from "react";
import { ModalContext } from "./global/ModalProvider.jsx";
import { Modal } from "./reusable/Modal.jsx";
import { ModalBG } from "./reusable/modalbg.jsx";

function App() {
  // Komponenten können im Ordner 'components' angelegt und hier im jeweiligen div eingefügt werden
  const {open, setOpen, setLoad} = useContext(ModalContext)
  const modalHaendler = (e, loader) => {
   e.preventDefault();
   setLoad(loader)
   setOpen(!open)
}
  useEffect(() => {

  },[open])

  return (
    <>
    {open && <div className="modalContainer"> <Modal/> <ModalBG/></div>}
      
      <div className="container">
        <div className="news"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e, "test")}></button></div>
        <div className="wetter">
          <Wetter /><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button>
        </div>
        <div className="Börse"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button></div>
        <div className="quoteJokeFact">
          <MemeJokeQuote /> 
        </div>
        <div className="orderPizza"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button></div>
        <div className="chat"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button ></div>
        <div className="deepL"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button ></div>
        <div className="sthCoolLikeNasa"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button></div>
        <div className="darknetMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button></div>
        <div className="stockMarket"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button></div>
        <div className="tinder"><button className="placeHolder-Button" onClick={(e) => modalHaendler(e)}></button></div>
      </div>
    </>
  );
}

export default App;