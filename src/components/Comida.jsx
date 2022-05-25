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
        <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" className="imagen-comida" />
    </div>
  )
}

export default Comida