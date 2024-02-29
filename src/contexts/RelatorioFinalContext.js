import { createContext, useState } from "react";

export const RelatorioFinalContext = createContext();

export const RelatorioFinalContextProvider = ({children}) => {
    const [relatorioFinal, setRelatorioFinal] = useState([{turno: "Turno C"}]);
    return (
        <RelatorioFinalContext.Provider value={{relatorioFinal, setRelatorioFinal}}>
            {children}
        </RelatorioFinalContext.Provider>
    );
};