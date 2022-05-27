import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ObjetivoContext = createContext(); //creamos el contexto de objetivo

const ObjetivoProvider = ({children}) => {
    //creamos el state del provider
    const [objetivo, setObjetivo] = useState({});

    useEffect(() => {
        // cuando el componente cargue, hacemos la peticion para traer el objetivo de la base de datos
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
        <ObjetivoContext.Provider value={{ // enviamos los datos del provider al componente hijo
            objetivo,
            setObjetivo
        }}>
            {children}
        </ObjetivoContext.Provider>
     )
}

export {ObjetivoProvider};

export default ObjetivoContext;