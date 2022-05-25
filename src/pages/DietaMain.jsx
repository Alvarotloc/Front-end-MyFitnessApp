import Comida from "../components/Comida"
import Grafica from "../components/Grafica"

const DietaMain = () => {
  return (
    <main className="dieta-main">
      <Grafica />
      <div className="contenedor-comidas">
        <div className="comidas">
          <Comida />
          <Comida />
          <Comida />
          <Comida />
          <Comida />
          <Comida />
          <Comida />
          <Comida />
          <Comida />
          <Comida />
        </div>
        <button className="boton">Agregar Comida</button>
      </div>
    </main>
  )
}

export default DietaMain