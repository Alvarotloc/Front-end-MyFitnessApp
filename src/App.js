import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ComidasProvider } from "./context/ComidasProvider";
import { ObjetivoProvider } from "./context/ObjetivoProvider";
import DietaMain from "./pages/DietaMain";

const App = () => {
  return (
    <ComidasProvider>
      <ObjetivoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<DietaMain />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ObjetivoProvider>
    </ComidasProvider>
  );
};

export default App;
