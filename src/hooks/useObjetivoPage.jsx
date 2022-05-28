import axios from "axios";
import { useState } from "react";
import useObjetivo from "./useObjetivo";

const useObjetivoPage = () => {
  // creamos un custom hook para sacar la lógica de la pagina de objetivo

  // creamos los states para los inputs del formulario
  const [KcalDiarias, setKcalDiarias] = useState("");
  const [peso, setPeso] = useState("");
  const [fecha, setFecha] = useState("");

  const [error, setError] = useState(false); // para mostrar los errores

  const { objetivo, setObjetivo } = useObjetivo(); // traemos los datos del provider

  const { _id } = objetivo; // traemos el id del objetivo

  const handleSubmit = async (evento) => {
    evento.preventDefault(); // para que no se recargue la pagina
    if ([KcalDiarias, peso, fecha].includes("")) {
      // si hay un campo vacio, mostramos un error
      setError(true);
      return;
    }
    if (Object.keys(objetivo).length === 0) {
      // si no hay un objetivo, creamos uno nuevo
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_BACKEND_URL_OBJETIVO,
          {
            KcalDiarias,
            peso,
            fecha,
          }
        );
        setObjetivo(data);
        setKcalDiarias("");
        setPeso("");
        setFecha("");
        setError(false); // para que no se muestre el error
      } catch (error) {
        console.log(error);
      }
      return;
    }

    const { data } = await axios.put(
      process.env.REACT_APP_BACKEND_URL_OBJETIVO,
      {
        // si hay un objetivo, actualizamos los datos del objetivo
        id: _id,
        KcalDiarias,
        peso,
        fecha,
      }
    );
    setObjetivo(data);
    setKcalDiarias("");
    setPeso("");
    setFecha("");
    setError(false); // para que no se muestre el error
  };

  return {
    KcalDiarias,
    setKcalDiarias,
    peso,
    setPeso,
    fecha,
    setFecha,
    error,
    handleSubmit,
  };
};

export default useObjetivoPage;
