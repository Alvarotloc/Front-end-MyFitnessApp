import axios from "axios";
import useObjetivo from "../hooks/useObjetivo";
import Grafica from "./Grafica";

const Objetivo = () => {
  const {objetivo,setObjetivo} = useObjetivo(); //destructuring de los datos del provider
  const {_id,KcalDiarias,fecha,peso} = objetivo; //destructuring de los datos del objetivo

  const handleEliminar = async () => {
    try {
      await axios.delete(process.env.REACT_APP_BACKEND_URL_OBJETIVO,{data : {id : _id}}); //eliminamos el objetivo de la base de datos
      setObjetivo({}); //seteamos el objetivo en el provider en vacio
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="contenedor-objetivo sombra dos-columnas">
      <Grafica />
      <div className="contenido-objetivo">
        <button className="reset-app" type="button" onClick={handleEliminar}>
          Resetear Objetivo
        </button>
        <p>
          <span>Kcal Diarias: </span> {KcalDiarias}
        </p>
        <p>
          <span>Peso Deseado: </span> {peso}
        </p>
        <p>
          <span>Fecha: </span> {new Date(fecha).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Objetivo;
