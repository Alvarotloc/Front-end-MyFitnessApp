const MacroNutriente = ({macro,gramos}) => { //componente para mostrar la macronutriente de la comida
  return (
    <div className="macronutriente">
        <p>{gramos}</p>
        <p>{macro}</p>
    </div>
  )
}

export default MacroNutriente