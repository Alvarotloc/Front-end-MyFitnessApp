import Comida from "../components/Comida"
import Grafica from "../components/Grafica"

const DietaMain = () => {
  return (
    <main className="dieta-main">
      <Grafica />
        <div className="comidas">
          <Comida />
          <Comida />
          <Comida />
          <Comida />
        </div>
    </main>
  )
}

export default DietaMain