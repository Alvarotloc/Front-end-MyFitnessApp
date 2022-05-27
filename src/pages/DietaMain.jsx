import Comida from "../components/Comida";
import Grafica from "../components/Grafica";
import { useNavigate } from "react-router-dom";
import useObjetivo from "../hooks/useObjetivo";
import useComidas from "../hooks/useComidas";

const DietaMain = () => {
  // traemos los datos de los providers
  const { objetivo } = useObjetivo();
  const { comidas } = useComidas();

  const navigate = useNavigate(); // para redireccionar a la pagina de objetivo

  return Object.keys(objetivo).length !== 0 ? ( // si hay datos del objetivo, mostramos la pagina completa
    <main className="dieta-main">
      <div className="contenedor-grafica sombra">
        <h2 className="sub-titulo">Objetivo Diario</h2>
        <Grafica />
        <button className="boton" onClick={() => navigate('/agregar')}>Agregar Comida</button>
      </div>
      <div className="comidas">
        {comidas.length !== 0 ? ( // si hay comidas, las mostramos
          comidas.map((comida) => <Comida key={comida._id} comida={comida} />)
        ) : (
          <h2 className="sub-titulo">No hay comidas en la lista</h2> // si no hay comidas, mostramos un mensaje
        )}
      </div>
    </main>
  ) : ( // si no hay datos del objetivo, mostramos un mensaje
    <div className="not-objetivo"> 
      <h1>
        Antes de agregar <span>comidas</span> debes crear un{" "}
        <span>objetivo</span>
      </h1>
      <button onClick={() => navigate("/objetivo")}>Crear Objetivo</button>
    </div>
  );
};

export default DietaMain;
