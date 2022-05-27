import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import useComidas from "../hooks/useComidas";
import MacroNutriente from "./MacroNutriente";
import IconoPasta from "../imgs/Pasta.svg";
import IconoCarne from "../imgs/Carne.svg";
import IconoPescado from "../imgs/Pescado.svg";
import IconoVerduras from "../imgs/Verduras.svg";
import IconoComidaRapida from "../imgs/ComidaRapida.svg";
import IconoFruta from "../imgs/Frutas.svg";


const Comida = ({comida}) => {
  const {_id,nombre,categoria,gramos,proteinas,grasas,hidratos,kcal} = comida;
  const {comidas,setComidas,setComidaEditar} = useComidas();
  const navigate = useNavigate();

  const imagenesCategoria = {
    Pasta: IconoPasta,
    Carne: IconoCarne,
    Pescado: IconoPescado,
    Verduras: IconoVerduras,
    ComidaRapida: IconoComidaRapida,
    Fruta: IconoFruta,
  };



  const editarComida = () => {
    setComidaEditar(comida);
    navigate("/agregar");
  }
  const eliminarComida = async () => {
    try {
      await axios.delete(process.env.REACT_APP_BACKEND_URL_COMIDAS,{data : {id : _id}});
      const comidasFiltradas = comidas.filter(comida => comida._id !== _id);
      setComidas(comidasFiltradas);
    } catch (error) {
      console.log(error)
    }
  }
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={editarComida}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={eliminarComida} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
    <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
    <div className="comida sombra">
      <div className="contenido-comida">
        <h3 className="nombre-comida">
          {nombre} <span>{gramos}g</span>
        </h3>
        <div className="macros-contenedor">
          <MacroNutriente macro='Proteina' gramos={proteinas}/>
          <MacroNutriente macro='Hidratos' gramos={hidratos}/>
          <MacroNutriente macro='Grasas' gramos={grasas}/>
          <MacroNutriente macro='Kcal' gramos={kcal}/>
        </div>
      </div>
      <img
        src={imagenesCategoria[categoria]}
        alt="Imagen de la comida"
        className="imagen-comida"
      />
    </div>
    </SwipeableListItem>
    </SwipeableList>
  );
};

export default Comida;
