import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useComidas from "./useComidas";

const useFormularioComidas = () => { // Creamos un custom hook para separar toda la lógica de la página de formulario de comidas

      // Creamos los states para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [gramos, setGramos] = useState("");
  const [kcal, setKcal] = useState("");
  const [proteinas, setProteinas] = useState("");
  const [grasas, setGrasas] = useState("");
  const [hidratos, setHidratos] = useState("");
  const [categoria, setCategoria] = useState("");

  const [error, setError] = useState(false); // para mostrar los errores

  const navigate = useNavigate(); // para redireccionar a la pagina de dieta

    // traemos los datos de los providers
    const { comidaEditar, setComidaEditar, comidas, setComidas,setModalActiva } = useComidas();
  
    useEffect(() => {
      // para mostrar los datos de la comida editar en el formulario si es que hay una comida a editar
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

    const handleSubmit = async (evento) => {
        evento.preventDefault(); // para que no se recargue la pagina
        if ([nombre, gramos, kcal, proteinas, grasas, hidratos, categoria].includes("")) {
          // si hay un campo vacio, mostramos un error
          setError(true);
          return;
        }
    
        //* EDITAR COMIDA
        if (Object.keys(comidaEditar).length > 0) {
          // si hay una comida a editar, actualizamos los datos de la comida
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
            const comidasActualizadas = comidas.map(
              (
                comida // actualizamos la lista de comidas
              ) => (comida._id === data._id ? data : comida)
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


        //* CREAR COMIDA
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
          if(comidas.length === 0){
            setModalActiva(true);
          }
          navigate("/"); // redireccionamos a la pagina de dieta
        } catch (error) {
          console.log(error);
        }
      };

      return {
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
        setCategoria
        };
}

export default useFormularioComidas