import { useContext } from "react";
import { ModalContext } from "../global/ModalProvider.jsx";
import MemeJokeQuote from "../components/MemeJokeQuote.jsx";
import { EssenBestellen } from "../components/EssenBestellen.jsx";
import { News } from "../components/News.jsx";
import { WeatherModal } from "../components/weatherModal.jsx";
// Geladen werden nur Components kein Hardcode
// loader=string swtichcase nach string
export const Modal = ({fetchIdent}) => {
    const {setOpen} = useContext(ModalContext)
    let render = ""

    switch (fetchIdent) {
        case 'weather':
            render = <WeatherModal />  
            break;
        case 'news':
            render = <News />
            break;
        case 'chat':
            
            break;
        case 'joke':
            
            break;
        case 'essen':
            
            break;
        case 'bitcoin':
            
            break;
    
        default:
            break;
    }

    return(
        <div className="modal">  <i className="fa-solid fa-circle-xmark close" onClick={()=> setOpen(!open)}></i>
        {render}
        </div>
    )
}