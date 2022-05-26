const MacroNutriente = ({macro,gramos}) => {
  return (
    <div className="macronutriente">
        <p>{gramos}</p>
        <p>{macro}</p>
    </div>
  )
}

export default MacroNutriente