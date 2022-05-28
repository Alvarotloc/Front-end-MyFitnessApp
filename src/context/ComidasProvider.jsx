import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ComidasContext = createContext(); // creamos el contexto de comidas

const ComidasProvider = ({children}) => {
    //creamos los dos states del provider
    const [comidas, setComidas] = useState([]);
    const [comidaEditar, setComidaEditar] = useState({});
    const [modalActiva, setModalActiva] = useState(false);  
    useEffect(() => {
        // cuando el componente cargue, hacemos la peticion para traer las comidas de la base de datos
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
        <ComidasContext.Provider value={{ //enviamos los datos del provider al componente hijo
            comidas,
            setComidas,
            comidaEditar,
            setComidaEditar,
            modalActiva,
            setModalActiva
        }}>
            {children}
        </ComidasContext.Provider>
     )
}

export {ComidasProvider};

export default ComidasContext;