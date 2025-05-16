import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainUsuario from './routes/usuario/main';

const RoutesComponent = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MainUsuario />} />
      </Routes>
    </BrowserRouter>
);

export default RoutesComponent;