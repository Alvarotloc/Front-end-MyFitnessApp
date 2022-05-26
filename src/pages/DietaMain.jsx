import Comida from "../components/Comida";
import Grafica from "../components/Grafica";
import { Link,useNavigate } from "react-router-dom";
import useObjetivo from "../hooks/useObjetivo";

const DietaMain = () => {
  const {objetivo} = useObjetivo();
  const navigate = useNavigate()
  return (
    Object.keys(objetivo).length !== 0 ? 
    <main className="dieta-main">
      <div className="contenedor-grafica sombra">
        <h2 className="sub-titulo">Objetivo Diario</h2>
        <Grafica />
        <button className="boton">
          <Link to="/agregar">Agregar Comida</Link>
        </button>
      </div>
      <div className="comidas">
        <Comida />
        <Comida />
        <Comida />
      </div>
    </main> : (
        <div className="not-objetivo">
        <h1>Antes de agregar <span>comidas</span> debes crear un <span>objetivo</span></h1>
        <button onClick={() => navigate('/objetivo')}>Crear Objetivo
        </button>
        </div>
      )
  );
};

export default DietaMain;
