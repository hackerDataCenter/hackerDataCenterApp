import { useContext } from "react";
import { ModalContext } from "../global/ModalProvider.jsx";
import MemeJokeQuote from "../components/MemeJokeQuote.jsx";
import { EssenBestellen } from "../components/EssenBestellen.jsx";
// Geladen werden nur Components kein Hardcode
// loader=string swtichcase nach string
export const Modal = ({fetchIdent}) => {
    const {setOpen, } = useContext(ModalContext)
    let render = ""
    if (fetchIdent === "weather"){
      render = (<h1>Platzhalter</h1>) 
    }else if (fetchIdent === "essen"){
        render = (<EssenBestellen/>)
    }else if (fetchIdent === "news"){
        render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "hallo"){
            render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "chat"){
        render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "chat"){
        render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "deepl"){
        render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "sthcoolLikeNasa"){
        render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "darknetMarket"){
        render = (<h2>Platzhalter</h2>)
    }else if (fetchIdent === "stockMarket"){
        render = (<h2>Platzhalter</h2>)
    }
    return(
        <div className="modal">  <i className="fa-solid fa-circle-xmark close" onClick={()=> setOpen(!open)}></i>
        {render}
        </div>

        
         
        
        
        
    )
}