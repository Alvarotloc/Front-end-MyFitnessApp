import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ObjetivoContext = createContext();

const ObjetivoProvider = ({children}) => {
    const [objetivo, setObjetivo] = useState({});
    useEffect(() => {
        const getObjetivo = async () => {
            try {
                const {data} = await axios(process.env.REACT_APP_BACKEND_URL_OBJETIVO);
                setObjetivo(data[0]);
            } catch (error) {
                console.log(error)
            }
        }
        getObjetivo()
    },[])
    return (
        <ObjetivoContext.Provider value={{
            objetivo,
            setObjetivo
        }}>
            {children}
        </ObjetivoContext.Provider>
     )
}

export {ObjetivoProvider};

export default ObjetivoContext;