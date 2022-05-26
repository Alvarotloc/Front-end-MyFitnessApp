const ObjetivoPage = () => {
  return (
    <section className="formulario">
        <h2 className="sub-titulo">Objetivo Personal</h2>
        <form className="sombra">
            <fieldset>
                <div className="campo">
                    <label htmlFor="kcal">Kcal Consumir</label>
                    <input type="number" name="kcal" id="kcal" placeholder="Ingrese el número de kcal a consumir" autoFocus/>
                </div>
                <div className="campo">
                    <label htmlFor="peso">Peso Conseguir</label>
                    <input type="number" name="peso" id="peso" placeholder="Ingrese el peso a conseguir" />
                </div>
                <div className="campo">
                    <label htmlFor="fecha">Fecha a Conseguir</label>
                    <input type="date" name="fecha" id="fecha" />
                </div>
                <input type="submit" value="Crear Objetivo" className="boton" />
            </fieldset>
        </form>
    </section>
  )
}

export default ObjetivoPage