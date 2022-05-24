import { useContext } from "react";
import ComidasContext from "../context/ComidasProvider";

const useComidas = () => useContext(ComidasContext);

export default useComidas;