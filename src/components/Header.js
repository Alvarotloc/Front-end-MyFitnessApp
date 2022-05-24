import { Outlet } from "react-router-dom"
import useComidas from "../hooks/useComidas"

const Header = () => {
    const {prueba} = useComidas();
    console.log(prueba);
  return (
    <>
        <h1>Papaia</h1>
        <Outlet />
    </>
  )
}

export default Header