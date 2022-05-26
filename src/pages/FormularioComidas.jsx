import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useComidas from "../hooks/useComidas";
import useObjetivo from "../hooks/useObjetivo";

const FormularioComidas = () => {
  const [nombre, setNombre] = useState('');
  const [gramos, setGramos] = useState('');
  const [kcal, setKcal] = useState('');
  const [proteinas, setProteinas] = useState('');
  const [grasas, setGrasas] = useState('');
  const [hidratos, setHidratos] = useState('');
  const [categoria, setCategoria] = useState('');

  const { objetivo } = useObjetivo();
  const {comidaEditar,setComidaEditar,            comidas,
    setComidas,} = useComidas();

  const navigate = useNavigate();

  const categorias = [
    "Pasta",
    "Carne",
    "Pescado",
    "Verduras",
    "Comida Rapida",
    "Fruta",
  ];

  const handleSubmit = async evento => {
    evento.preventDefault();
    if([nombre,gramos,kcal,proteinas,grasas,hidratos,categoria].includes('')){
      return
    }
    if(Object.keys(comidaEditar).length > 0){
      return;
    }
    try {
      const {data} = await axios.post(process.env.REACT_APP_BACKEND_URL_COMIDAS,{
        nombre,
        gramos,
        kcal,
        grasas,
        proteinas,
        hidratos,
        categoria
      });
  
      setComidas([...comidas,data]); 
      setNombre('');
      setGramos('');
      setKcal('');
      setProteinas('');
      setGrasas('');
      setHidratos('');
      setCategoria('');
    } catch (error) {
      console.log(error)
    }
    navigate('/');
  }

  return Object.keys(objetivo).length !== 0 ? (
    <section className="formulario">
      <h2 className="sub-titulo">Agregar Comida</h2>
      <form className="sombra" onSubmit={handleSubmit}>
        <fieldset>
          <div className="campo">
            <label htmlFor="nombre">Nombre comida</label>
            <input
              type="text"
              placeholder="Ingrese el nombre de la comida"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
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
              onChange={evento => setGramos(evento.target.value)}
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
              onChange={evento => setKcal(evento.target.value)}
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
              onChange={evento => setProteinas(evento.target.value)}
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
              onChange={evento => setGrasas(evento.target.value)}
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
              onChange={evento => setHidratos(evento.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoria comida</label>
            <select name="categoria" id="categoria" value={categoria} onChange={evento => setCategoria(evento.target.value)}>
              <option value="">-- Seleccione Categoria --</option>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Agregar Comida" className="boton" />
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
