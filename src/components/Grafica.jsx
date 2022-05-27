import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useComidas from "../hooks/useComidas";
import useObjetivo from "../hooks/useObjetivo";
const Grafica = () => {
  const [porcentaje, setPorcentaje] = useState(0);
  const {comidas} = useComidas();
  const {objetivo} = useObjetivo();
  const {KcalDiarias} = objetivo;
  const conseguirPorcentaje = (objetivo,kcal) => kcal * 100 / objetivo;
  useEffect(() => {
    if(comidas.length > 0){
      if(comidas.length === 1){
        setPorcentaje(Number.isInteger(conseguirPorcentaje(KcalDiarias,comidas[0].kcal)) ? conseguirPorcentaje(KcalDiarias,comidas[0].kcal) : conseguirPorcentaje(KcalDiarias,comidas[0].kcal).toFixed(2));
      }else{
        const totalKcal = comidas.reduce((a,b) => a.kcal + b.kcal);
        setPorcentaje(Number.isInteger(conseguirPorcentaje(KcalDiarias,totalKcal)) ? conseguirPorcentaje(KcalDiarias,totalKcal) : conseguirPorcentaje(KcalDiarias,totalKcal).toFixed(2));
      }
    }else{
      setPorcentaje(0);
    }
  },[comidas,KcalDiarias]);
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
