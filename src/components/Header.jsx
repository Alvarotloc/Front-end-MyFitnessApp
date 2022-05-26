import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className="header-layout">
        <h1 className="titulo-app">My fitness app</h1>
        <nav className="nav-principal">
          <Link
            to="/objetivo"
            className={`${pathname === "/objetivo" ? "activo" : ""}`}
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
            Macros
          </Link>
        </nav>
      </header>
      <div className="contenedor-outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
