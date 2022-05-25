import { createContext } from "react";

const ObjetivoContext = createContext();

const ObjetivoProvider = ({children}) => {
    return (
        <ObjetivoContext.Provider value={{

        }}>
            {children}
        </ObjetivoContext.Provider>
     )
}

export {ObjetivoProvider};

export default ObjetivoContext;