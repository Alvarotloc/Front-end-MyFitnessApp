const FormularioComidas = () => {
    const categorias = ['Pasta','Carne','Pescado','Verduras','Comida Rapida','Fruta']
    return (
      <section className="formulario-comidas">
          <h2 className="sub-titulo">Agregar Comida</h2>
          <form>
              <fieldset>
                <div className="campo">
                  <label htmlFor="nombre">Nombre comida</label>
                  <input type="text" placeholder="Ingrese el nombre de la comida" name="nombre" id="nombre" />
                </div>
                <div className="campo">
                  <label htmlFor="gramos">Gramos de comida</label>
                  <input type="number" placeholder="Ingrese los gramos de la comida" name="gramos" id="gramos" />
                </div>
                <div className="campo">
                  <label htmlFor="proteinas">Proteinas comida</label>
                  <input type="number" placeholder="Ingrese las proteinas de la comida (g)" name="proteinas" id="proteinas" />
                </div>
                <div className="campo">
                  <label htmlFor="grasas">Grasas comida</label>
                  <input type="number" placeholder="Ingrese las grasas de la comida (g)" name="grasas" id="grasas" />
                </div>
                <div className="campo">
                  <label htmlFor="hidratos">Hidratos comida</label>
                  <input type="number" placeholder="Ingrese los hidratos de la comida" name="hidratos" id="hidratos" />
                </div>
                <div className="campo">
                  <label htmlFor="categoria">Categoria comida</label>
                  <select name="categoria" id="categoria">
                    <option value="">-- Seleccione Categoria --</option>
                    {categorias.map((categoria,index) => (
                      <option key={index} value={categoria}>{categoria}</option>
                    ))}
                  </select>
                </div>
                <input type="submit" value="Agregar Comida" />
              </fieldset>
          </form>
      </section>
    )
  }
  
  export default FormularioComidas