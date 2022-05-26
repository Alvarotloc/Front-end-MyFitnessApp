import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ComidasContext = createContext();

const ComidasProvider = ({children}) => {
    const [comidas, setComidas] = useState([]);
    const [comidaEditar, setComidaEditar] = useState({});
    useEffect(() => {
        const getComidas = async () => {
            try {
                const {data} = await axios(process.env.REACT_APP_BACKEND_URL_COMIDAS);
                setComidas(data);
            } catch (error) {
                console.log(error)
            }
        }
        getComidas();
    },[])
    return (
        <ComidasContext.Provider value={{
            comidas,
            setComidas,
            comidaEditar,
            setComidaEditar
        }}>
            {children}
        </ComidasContext.Provider>
     )
}

export {ComidasProvider};

export default ComidasContext;