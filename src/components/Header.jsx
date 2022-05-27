import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation(); //obtenemos la ruta actual
  return (
    <>
      <header className="header-layout">
        <h1 className="titulo-app">My fitness app</h1>
        <nav className="nav-principal">
          <Link
            to="/objetivo"
            className={`${pathname === "/objetivo" ? "activo" : ""}`} //si la ruta actual es la de objetivo, agregamos la clase activo al link
          >
            Objetivo
          </Link>
          <Link to="/" className={`${pathname === "/" ? "activo" : ""}`}>
            Dieta
          </Link>
          <Link
            to="/agregar"
            className={`${pathname === "/agregar" ? "activo" : ""}`}
          >
            Agregar
          </Link>
        </nav>
      </header>
      <div className="contenedor-outlet">
        <Outlet /> {/* el outlet es el contenedor de las rutas */}
      </div>
    </>
  );
};

export default Header;
