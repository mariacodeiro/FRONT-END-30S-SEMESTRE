import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/login";
import CadastroFilme from "../pages/cadastroFilmes/CadastroFlilme";
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero";
const Rotas = () => {
    return (
      <BrowserRouter   >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filmes" element={<CadastroFilme/>} />
        <Route path="/generos" element={<CadastroGenero/>} />
      </Routes>
      </BrowserRouter>
    )
}

export default Rotas;