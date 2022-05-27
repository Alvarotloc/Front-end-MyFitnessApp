import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import useComidas from "../hooks/useComidas";
import useObjetivo from "../hooks/useObjetivo";

const FormularioComidas = () => {
  // Creamos los states para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [gramos, setGramos] = useState("");
  const [kcal, setKcal] = useState("");
  const [proteinas, setProteinas] = useState("");
  const [grasas, setGrasas] = useState("");
  const [hidratos, setHidratos] = useState("");
  const [categoria, setCategoria] = useState("");

  const [error, setError] = useState(false); // para mostrar los errores

  // traemos los datos de los providers
  const { objetivo } = useObjetivo();
  const { comidaEditar, setComidaEditar, comidas, setComidas } = useComidas();

  useEffect(() => { // para mostrar los datos de la comida editar en el formulario si es que hay una comida a editar
    if (Object.keys(comidaEditar).length > 0) {
      setNombre(comidaEditar.nombre);
      setGramos(comidaEditar.gramos);
      setKcal(comidaEditar.kcal);
      setProteinas(comidaEditar.proteinas);
      setGrasas(comidaEditar.grasas);
      setHidratos(comidaEditar.hidratos);
      setCategoria(comidaEditar.categoria);
    }
  }, [comidaEditar]);

  const navigate = useNavigate(); // para redireccionar a la pagina de dieta

  const categorias = [ // para mostrar las categorias en el formulario
    "Pasta",
    "Carne",
    "Pescado",
    "Verduras",
    "Comida Rapida",
    "Fruta",
  ];

  const handleSubmit = async (evento) => {
    evento.preventDefault(); // para que no se recargue la pagina
    if ([nombre, gramos, kcal, proteinas, grasas, hidratos, categoria].includes("")){ // si hay un campo vacio, mostramos un error
      setError(true);
      return;
    }

    if (Object.keys(comidaEditar).length > 0) { // si hay una comida a editar, actualizamos los datos de la comida
      try {
        const { data } = await axios.put(
          process.env.REACT_APP_BACKEND_URL_COMIDAS,
          {
            id: comidaEditar._id,
            nombre,
            gramos,
            kcal,
            proteinas,
            grasas,
            hidratos,
            categoria,
          }
        );
        const comidasActualizadas = comidas.map((comida) => // actualizamos la lista de comidas
          comida._id === data._id ? data : comida
        );
        setComidas(comidasActualizadas);
        setComidaEditar({});
        setNombre("");
        setGramos("");
        setKcal("");
        setProteinas("");
        setGrasas("");
        setHidratos("");
        setCategoria("");
        setError(false); // limpiamos el error
        navigate("/"); // redireccionamos a la pagina de dieta
      } catch (error) {
        console.log(error);
      }
      return;
    }
    // si no hay una comida a editar, agregamos una nueva comida
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND_URL_COMIDAS,
        {
          nombre,
          gramos,
          kcal,
          grasas,
          proteinas,
          hidratos,
          categoria,
        }
      );

      setComidas([...comidas, data]);
      setNombre("");
      setGramos("");
      setKcal("");
      setProteinas("");
      setGrasas("");
      setHidratos("");
      setCategoria("");
      setError(false); // limpiamos el error
      navigate("/"); // redireccionamos a la pagina de dieta
    } catch (error) {
      console.log(error);
    }
  };

  return Object.keys(objetivo).length !== 0 ? ( // si hay un objetivo, mostramos el formulario
    <section className="formulario">
      <h2 className="sub-titulo">
        {Object.keys(comidaEditar).length > 0 // si hay una comida a editar, mostramos el titulo de editar comida, si no, el de agregar comida
          ? "Editar Comida"
          : "Agregar Comida"}
      </h2>
      <form className="sombra" onSubmit={handleSubmit}>
        {error && (<Alerta />)} {/* si hay un error, mostramos la alerta */}
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
              {categorias.map((categoria, index) => ( // mostramos las categorias de comidas
                <option key={index} value={categoria}>
                  {categoria}
                </option>
              ))}
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
  ) : (
    <div className="not-objetivo">
      <h1>
        Antes de agregar <span>comidas</span> debes crear un{" "}
        <span>objetivo</span>
      </h1>
      <button onClick={() => navigate("/objetivo")}>Crear Objetivo</button>
    </div>
  );
};

export default FormularioComidas;
