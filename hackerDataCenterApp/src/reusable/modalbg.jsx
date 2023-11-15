import { useContext } from "react"
import { ModalContext } from "../global/ModalProvider.jsx"

export const ModalBG = () => {
    const {open, setOpen} = useContext(ModalContext)
    return <div className="modalBG" onClick={()=> setOpen(!open)}></div> 
}