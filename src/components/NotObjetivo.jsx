import { Link } from "react-router-dom"

const NotObjetivo = () => { // Creamos un componente para poder reutilizarlo cuando no tengamos objetivo
  return (
    <div className="not-objetivo">
    <h1>
      Antes de agregar <span>comidas</span> debes crear un{" "}
      <span>objetivo</span>
    </h1>
    <Link to='/objetivo' className="boton">
      Crear Objetivo
    </Link>
  </div>
  )
}

export default NotObjetivo