import axios from "axios";
import { useState } from "react";
import Alerta from "../components/Alerta";
import Objetivo from "../components/Objetivo";
import useObjetivo from "../hooks/useObjetivo";

const ObjetivoPage = () => {
  const {objetivo,setObjetivo} = useObjetivo();
  const [KcalDiarias, setKcalDiarias] = useState('');
  const [peso, setPeso] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState(false);

  const {_id} = objetivo;

  const handleSubmit = async evento => {
    evento.preventDefault();
    if([KcalDiarias,peso,fecha].includes('')){
      setError(true);
      return;
    }
    if(Object.keys(objetivo).length === 0){
      try {
        const {data} = await axios.post(process.env.REACT_APP_BACKEND_URL_OBJETIVO,{
          KcalDiarias,
          peso,
          fecha
        }); 
        setObjetivo(data);
        setKcalDiarias('');
        setPeso('');
        setFecha('');
        setError(false);
      } catch (error) {
        console.log(error)
      }
      return;
    }
    const {data} = await axios.put(process.env.REACT_APP_BACKEND_URL_OBJETIVO,{
      id : _id,
      KcalDiarias,
      peso,
      fecha
    });
    setObjetivo(data);
    setKcalDiarias('');
    setPeso('');
    setFecha('');
    setError(false);
  }

  return (
      <section className="formulario">
        <h2 className="sub-titulo">Objetivo Personal</h2>
        { Object.keys(objetivo).length !== 0 && <Objetivo />}
        <form className="sombra" onSubmit={handleSubmit}>
          <fieldset>
            <legend>{ Object.keys(objetivo).length !== 0 ? 'Cambiar Objetivo' : 'Crear Objetivo'}</legend>
            {error && (<Alerta />)}
            <div className="campo">
              <label htmlFor="kcal">Kcal Consumir</label>
              <input
                type="number"
                name="kcal"
                id="kcal"
                value={KcalDiarias}
                onChange={(evento) => setKcalDiarias(evento.target.value)}
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
              <input type="date" name="fecha" id="fecha" value={fecha} onChange={(evento) => setFecha(evento.target.value)}/>
            </div>
            <input type="submit" value={ Object.keys(objetivo).length !== 0 ? 'Cambiar Objetivo' : 'Crear Objetivo'} className="boton" />
          </fieldset>
        </form>
      </section>
  );
};

export default ObjetivoPage;
