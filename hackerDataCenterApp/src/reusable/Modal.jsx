import { useContext } from "react";
import { ModalContext } from "../global/ModalProvider.jsx";
// Geladen werden nur Components kein Hardcode
// loader=string swtichcase nach string
export const Modal = () => {
    const {setOpen, loader} = useContext(ModalContext)
    return(
        <div className="modal">Test<i className="fa-solid fa-circle-xmark close" onClick={()=> setOpen(!open)}></i></div>
        
    )
}