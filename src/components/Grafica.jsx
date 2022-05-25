import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Grafica = () => {
  return (
    <div className="contenedor-grafica">
      <h2 className="sub-titulo">Objetivo Diario</h2>
      <CircularProgressbar
        value={50}
        text={`${50}% conseguido`}
        styles={buildStyles({
          pathColor: "#00CA71",
          trailColor: "#F5F5F5",
          pathTransitionDuration: 0.5,
          textColor: "#191919",
        })}
      />
    </div>
  );
};

export default Grafica;
