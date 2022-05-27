import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ComidasProvider } from "./context/ComidasProvider";
import { ObjetivoProvider } from "./context/ObjetivoProvider";
import DietaMain from "./pages/DietaMain";
import FormularioComidas from "./pages/FormularioComidas";
import ObjetivoPage from "./pages/ObjetivoPage";

const App = () => { // Componente principal de la aplicacion, contiene las rutas y los providers
  return (
    <ComidasProvider>
      <ObjetivoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<DietaMain />} />
              <Route path="/agregar" element={<FormularioComidas />} />
              <Route path="/objetivo" element={<ObjetivoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ObjetivoProvider>
    </ComidasProvider>
  );
};

export default App;
