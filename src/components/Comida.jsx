import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import MacroNutriente from "./MacroNutriente";

const Comida = () => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true}>
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
          Pollito frito <span>150g</span>
        </h3>
        <div className="macros-contenedor">
          <MacroNutriente />
          <MacroNutriente />
          <MacroNutriente />
          <MacroNutriente />
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
