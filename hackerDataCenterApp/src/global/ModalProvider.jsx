import { createContext, useState } from "react";

export const ModalContext = createContext();
export const ModalProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState("");
    return (
        <ModalContext.Provider value={{open, setOpen, load, setLoad}}>{children}</ModalContext.Provider>
    )
}