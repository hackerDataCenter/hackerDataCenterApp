import { useContext } from "react";
import { ModalContext } from "../global/ModalProvider.jsx";
import { EssenBestellen } from "../components/EssenBestellen.jsx";
import Wetter from "../components/Wetter.jsx";
import { News } from "../components/News.jsx";
// Geladen werden nur Components kein Hardcode
// loader=string swtichcase nach string
export const Modal = ({fetchIdent}) => {
    const {setOpen, } = useContext(ModalContext)
    let render = ""
    if (fetchIdent === "weather"){
      render = (<Wetter/>) 
    }else if (fetchIdent === "essen"){
        render = (<EssenBestellen/>)
    }else if (fetchIdent === "news"){
        render = (<News/>)
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