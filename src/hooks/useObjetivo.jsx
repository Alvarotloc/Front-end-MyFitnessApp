import { useContext } from "react";
import ObjetivoContext from "../context/ObjetivoProvider";

const useObjetivo = () => useContext(ObjetivoContext);

export default useObjetivo;