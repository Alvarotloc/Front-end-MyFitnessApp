import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Grafica = () => {
  return (
    <CircularProgressbar
      value={0}
      text={`${0}% conseguido`}
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
