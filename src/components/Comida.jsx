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

const Comida = ({ comida }) => {
  //comida es un objeto con todos los datos de la comida
  const { _id, nombre, categoria, gramos, proteinas, grasas, hidratos, kcal } = comida; //destructuring de los datos de la comida
  const { comidas, setComidas, setComidaEditar } = useComidas(); //destructuring de los datos del provider
  const navigate = useNavigate(); //para redireccionar a la pagina de editar / agregar comida

  const imagenesCategoria = {
    //Creamos un diccionario relacionando categorias con iconos
    Pasta: IconoPasta,
    Carne: IconoCarne,
    Pescado: IconoPescado,
    Verduras: IconoVerduras,
    "Comida Rapida": IconoComidaRapida,
    Fruta: IconoFruta,
  };

  const editarComida = () => {
    setComidaEditar(comida); //seteamos la comida que se va a editar en el provider
    navigate("/agregar"); //redireccionamos a la pagina de agregar comida
  };
  const eliminarComida = async () => {
    try {
      //eliminamos la comida de la base de datos
      await axios.delete(process.env.REACT_APP_BACKEND_URL_COMIDAS, {
        data: { id: _id },
      });
      const comidasFiltradas = comidas.filter((comida) => comida._id !== _id); //filtramos las comidas para quitar la eliminada
      setComidas(comidasFiltradas); //seteamos las comidas filtradas en el provider
    } catch (error) {
      console.log(error);
    }
  };
  const leadingActions = () => (
    //funcion para editar la comida con el drag de swipeable list
    <LeadingActions>
      <SwipeAction onClick={editarComida}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    //funcion para eliminar la comida con el drag de swipeable list
    <TrailingActions>
      <SwipeAction onClick={eliminarComida} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="comida sombra">
          <div className="contenido-comida">
            <h3 className="nombre-comida">
              {nombre} <span>{gramos}g</span>
            </h3>
            <div className="macros-contenedor">
              <MacroNutriente macro="Proteina" gramos={proteinas} />
              <MacroNutriente macro="Hidratos" gramos={hidratos} />
              <MacroNutriente macro="Grasas" gramos={grasas} />
              <MacroNutriente macro="Kcal" gramos={kcal} />
            </div>
          </div>
          <img
            src={imagenesCategoria[categoria]} //obtenemos la imagen de la categoria mediante el diccionario de categorias
            alt="Imagen de la comida"
            className="imagen-comida"
          />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Comida;
