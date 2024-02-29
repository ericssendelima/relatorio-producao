import { createContext, useState } from "react";

export const ListaContext = createContext();

export const ListaContextProvider = ({children}) => {
    const [lista, setLista] = useState([]);
    return (
        <ListaContext.Provider value={{lista, setLista}}>
            {children}
        </ListaContext.Provider>
    );
};