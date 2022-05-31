import useComidas from "../hooks/useComidas";
import ImagenInstruccion from "../imgs/Instrucciones.webp";

const Modal = () => {
  const { setModalActiva } = useComidas();
  return (
    <div className="modal">
      <div className="contenedor-modal">
        <h2 className="sub-titulo">Instrucciones</h2>
        <h3>
          ¡Desliza las comidas para <span>editar</span> o <span>eliminar</span>!
        </h3>
        <img
          src={ImagenInstruccion}
          alt="Imagen de instrucciones"
          className="imagen-instruccion sombra"
        />
        <div className="cerrar-modal" onClick={() => setModalActiva(false)}>
          &#215;
        </div>
      </div>
    </div>
  );
};

export default Modal;
