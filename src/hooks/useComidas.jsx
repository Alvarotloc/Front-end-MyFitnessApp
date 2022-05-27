import { useContext } from "react";
import ComidasContext from "../context/ComidasProvider";

//Custom hook para poder sacar directamente los valores del provider

const useComidas = () => useContext(ComidasContext);

export default useComidas;