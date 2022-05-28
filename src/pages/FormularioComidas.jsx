import { useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import useComidas from "../hooks/useComidas";
import useFormularioComidas from "../hooks/useFormularioComidas";
import useObjetivo from "../hooks/useObjetivo";

const FormularioComidas = () => {
  //importamos todo lo necesario de los custom hooks
  const { objetivo } = useObjetivo();
  const { comidaEditar } = useComidas();
  const {
    nombre,
    gramos,
    kcal,
    proteinas,
    grasas,
    hidratos,
    categoria,
    error,
    handleSubmit,
    setNombre,
    setGramos,
    setKcal,
    setProteinas,
    setGrasas,
    setHidratos,
    setCategoria,
  } = useFormularioComidas();

  const navigate = useNavigate(); // para redireccionar a la pagina de dieta

  const categorias = [
    // para mostrar las categorias en el formulario
    "Pasta",
    "Carne",
    "Pescado",
    "Verduras",
    "Comida Rapida",
    "Fruta",
  ];

  if (Object.keys(objetivo).length !== 0) {
    return (
      // si hay un objetivo, mostramos el formulario
      <section className="formulario">
        <h2 className="sub-titulo">
          {Object.keys(comidaEditar).length > 0 // si hay una comida a editar, mostramos el titulo de editar comida, si no, el de agregar comida
            ? "Editar Comida"
            : "Agregar Comida"}
        </h2>
        <form className="sombra" onSubmit={handleSubmit}>
          {error && <Alerta />} {/* si hay un error, mostramos la alerta */}
          <fieldset>
            <div className="campo">
              <label htmlFor="nombre">Nombre comida</label>
              <input
                type="text"
                placeholder="Ingrese el nombre de la comida"
                name="nombre"
                id="nombre"
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)} // para actualizar el nombre de la comida, two way binding
              />
            </div>
            <div className="campo">
              <label htmlFor="gramos">Gramos de comida</label>
              <input
                type="number"
                placeholder="Ingrese los gramos de la comida"
                name="gramos"
                id="gramos"
                value={gramos}
                onChange={(evento) => setGramos(evento.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="kcal">Kcal de comida</label>
              <input
                type="number"
                placeholder="Ingrese los kcal de la comida"
                name="kcal"
                id="kcal"
                value={kcal}
                onChange={(evento) => setKcal(evento.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="proteinas">Proteinas comida</label>
              <input
                type="number"
                placeholder="Ingrese las proteinas de la comida (g)"
                name="proteinas"
                id="proteinas"
                value={proteinas}
                onChange={(evento) => setProteinas(evento.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="grasas">Grasas comida</label>
              <input
                type="number"
                placeholder="Ingrese las grasas de la comida (g)"
                name="grasas"
                id="grasas"
                value={grasas}
                onChange={(evento) => setGrasas(evento.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="hidratos">Hidratos comida</label>
              <input
                type="number"
                placeholder="Ingrese los hidratos de la comida"
                name="hidratos"
                id="hidratos"
                value={hidratos}
                onChange={(evento) => setHidratos(evento.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="categoria">Categoria comida</label>
              <select
                name="categoria"
                id="categoria"
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
              >
                <option value="">-- Seleccione Categoria --</option>
                {categorias.map(
                  (
                    categoria,
                    index // mostramos las categorias de comidas
                  ) => (
                    <option key={index} value={categoria}>
                      {categoria}
                    </option>
                  )
                )}
              </select>
            </div>
            <input
              type="submit"
              value={
                Object.keys(comidaEditar).length > 0 // si hay una comida a editar, mostramos el boton de editar, si no, el de agregar comida
                  ? "Editar Comida"
                  : "Agregar Comida"
              }
              className="boton"
            />
          </fieldset>
        </form>
      </section>
    );
  }

  return ( // si no hay un objetivo, mostramos el mensaje de que no hay objetivo por default
    <div className="not-objetivo">
      <h1>
        Antes de agregar <span>comidas</span> debes crear un{" "}
        <span>objetivo</span>
      </h1>
      <button type="button" onClick={() => navigate("/objetivo")}>
        Crear Objetivo
      </button>
    </div>
  );
};

export default FormularioComidas;
