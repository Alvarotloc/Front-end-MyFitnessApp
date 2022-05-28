import Alerta from "../components/Alerta";
import Objetivo from "../components/Objetivo";
import useObjetivo from "../hooks/useObjetivo";
import useObjetivoPage from "../hooks/useObjetivoPage";

const ObjetivoPage = () => {
  const {
    KcalDiarias,
    setKcalDiarias,
    peso,
    setPeso,
    fecha,
    setFecha,
    error,
    handleSubmit,
  } = useObjetivoPage();
  const { objetivo } = useObjetivo(); // traemos los datos de los providers

  return (
    <section className="formulario">
      <h2 className="sub-titulo">Objetivo Personal</h2>
      {Object.keys(objetivo).length !== 0 && <Objetivo />}{" "}
      {/* si hay un objetivo, mostramos el componente Objetivo */}
      <form className="sombra" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            {Object.keys(objetivo).length !== 0
              ? "Cambiar Objetivo"
              : "Crear Objetivo"}
          </legend>
          {error && <Alerta />}{" "}
          {/* si hay un error, mostramos el componente Alerta */}
          <div className="campo">
            <label htmlFor="kcal">Kcal Consumir</label>
            <input
              type="number"
              name="kcal"
              id="kcal"
              value={KcalDiarias}
              onChange={(evento) => setKcalDiarias(evento.target.value)} // para que se actualice el state, two way data binding
              placeholder="Ingrese el número de kcal a consumir"
            />
          </div>
          <div className="campo">
            <label htmlFor="peso">Peso Conseguir</label>
            <input
              type="number"
              name="peso"
              id="peso"
              value={peso}
              onChange={(evento) => setPeso(evento.target.value)}
              placeholder="Ingrese el peso a conseguir"
            />
          </div>
          <div className="campo">
            <label htmlFor="fecha">Fecha a Conseguir</label>
            <input
              type="date"
              name="fecha"
              id="fecha"
              value={fecha}
              onChange={(evento) => setFecha(evento.target.value)}
            />
          </div>
          <input
            type="submit"
            value={
              Object.keys(objetivo).length !== 0
                ? "Cambiar Objetivo"
                : "Crear Objetivo"
            }
            className="boton"
          />
        </fieldset>
      </form>
    </section>
  );
};

export default ObjetivoPage;
