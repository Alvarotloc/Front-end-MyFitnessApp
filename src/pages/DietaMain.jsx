import Comida from "../components/Comida";
import Grafica from "../components/Grafica";
import { Link } from "react-router-dom";
import useObjetivo from "../hooks/useObjetivo";
import useComidas from "../hooks/useComidas";
import Modal from "../components/Modal";
import NotObjetivo from "../components/NotObjetivo";

const DietaMain = () => {
  // traemos los datos de los providers
  const { objetivo } = useObjetivo();
  const { comidas, modalActiva } = useComidas();

  if(Object.keys(objetivo).length !== 0){
    return ( // si hay datos del objetivo, mostramos la pagina completa
    <main className="dieta-main">
      <div className="contenedor-grafica sombra">
        <h2 className="sub-titulo">Objetivo Diario</h2>
        <Grafica />
        <Link
          to='/agregar'
          className="boton"
        >
          Agregar Comida
        </Link>
      </div>
      <div className="comidas">
        {comidas.length !== 0 ? ( // si hay comidas, las mostramos
          comidas.map((comida) => <Comida key={comida._id} comida={comida} />)
        ) : (
          <h2 className="sub-titulo">No hay comidas en la lista</h2> // si no hay comidas, mostramos un mensaje
        )}
      </div>
      {modalActiva && <Modal />}
    </main>
  )}
  return ( <NotObjetivo /> ); // si no hay un objetivo, mostramos el componente de no objetivo
};

export default DietaMain;
