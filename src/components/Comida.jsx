import axios from "axios";
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

const Comida = ({comida}) => {
  const {_id,nombre,categoria,gramos,proteinas,grasas,hidratos,kcal} = comida;
  const {comidas,setComidas} = useComidas()
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
      <SwipeAction>Editar</SwipeAction>
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
        src="https://spoonacular.com/recipeImages/716429-312x231.jpg"
        alt="Imagen de prueba"
        className="imagen-comida"
      />
    </div>
    </SwipeableListItem>
    </SwipeableList>
  );
};

export default Comida;
