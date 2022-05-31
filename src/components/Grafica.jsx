import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useComidas from "../hooks/useComidas";
import useObjetivo from "../hooks/useObjetivo";
const Grafica = () => {
  const [porcentaje, setPorcentaje] = useState(0); //porcentaje de la grafica
  //destructuring de los datos de los providers
  const { comidas } = useComidas();
  const { objetivo } = useObjetivo();

  const { KcalDiarias } = objetivo; //KcalDiarias es el objetivo de la persona

  const conseguirPorcentaje = (objetivo, kcal) => (kcal * 100) / objetivo; //funcion helper para conseguir el porcentaje de la grafica
  useEffect(() => {
    if (comidas.length > 0) { 
      if (comidas.length === 1) { // si solo hay una comida no se hace el reduce, por lo que se aplica directamente desde sus kcal
        setPorcentaje(
          Number.isInteger(conseguirPorcentaje(KcalDiarias, comidas[0].kcal))
            ? conseguirPorcentaje(KcalDiarias, comidas[0].kcal)
            : conseguirPorcentaje(KcalDiarias, comidas[0].kcal).toFixed(2) //redondeamos el porcentaje a dos decimales si no es entero
        );
      } else {
        const arrayKcal = comidas.map((comida) => comida.kcal); //array de los kcal de las comidas
        const totalKcal = arrayKcal.reduce((a, b) => a + b,0); //reduce los kcal de todas las comidas
        setPorcentaje(
          Number.isInteger(conseguirPorcentaje(KcalDiarias, totalKcal))
            ? conseguirPorcentaje(KcalDiarias, totalKcal)
            : conseguirPorcentaje(KcalDiarias, totalKcal).toFixed(2)
        );
      }
    } else {
      setPorcentaje(0); //si no hay comidas se setea el porcentaje a 0
    }
  }, [comidas, KcalDiarias]); //se ejecuta cuando cambia la lista de comidas o las kcal del objetivo
  return (
    <CircularProgressbar
      value={porcentaje}
      text={`${porcentaje}% conseguido`}
      styles={buildStyles({
        pathColor: "#00CA71",
        trailColor: "#F5F5F5",
        pathTransitionDuration: 0.5,
        textColor: "#191919",
      })}
    />
  );
};

export default Grafica;
