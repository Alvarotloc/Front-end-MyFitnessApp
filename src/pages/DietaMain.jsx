import Comida from "../components/Comida";
import Grafica from "../components/Grafica";
import { Link, useNavigate } from "react-router-dom";
import useObjetivo from "../hooks/useObjetivo";
import useComidas from "../hooks/useComidas";

const DietaMain = () => {
  const { objetivo } = useObjetivo();
  const { comidas } = useComidas();
  const navigate = useNavigate();
  return Object.keys(objetivo).length !== 0 ? (
    <main className="dieta-main">
      <div className="contenedor-grafica sombra">
        <h2 className="sub-titulo">Objetivo Diario</h2>
        <Grafica />
        <button className="boton" onClick={() => navigate('/agregar')}>Agregar Comida</button>
      </div>
      <div className="comidas">
        {comidas.length !== 0 ? (
          comidas.map((comida) => <Comida key={comida._id} comida={comida} />)
        ) : (
          <h2 className="sub-titulo">No hay comidas en la lista</h2>
        )}
      </div>
    </main>
  ) : (
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
