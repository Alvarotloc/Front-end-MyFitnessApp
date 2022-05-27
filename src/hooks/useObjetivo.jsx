import { useContext } from "react";
import ObjetivoContext from "../context/ObjetivoProvider";

// custom hook para poder sacar directamente los valores del provider

const useObjetivo = () => useContext(ObjetivoContext);

export default useObjetivo;