import { createContext } from "react";

const ComidasContext = createContext();

const ComidasProvider = ({children}) => {
    return (
        <ComidasContext.Provider value={{
            prueba : 'Probando'
        }}>
            {children}
        </ComidasContext.Provider>
     )
}

export {ComidasProvider};

export default ComidasContext;