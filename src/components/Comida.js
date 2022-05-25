import MacroNutriente from "./MacroNutriente"

const Comida = () => {
  return (
    <div className="comida">
        <div className="contenido-comida">
            <h3 className="nombre-comida">Pollito frito <span>150g</span></h3>
            <div className="macros-contenedor">
                <MacroNutriente />
                <MacroNutriente />
                <MacroNutriente />
                <MacroNutriente />
            </div>
        </div>
        <div className="circulo"></div>
    </div>
  )
}

export default Comida