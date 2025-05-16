import "./TelaAcesso.css"
import { Link } from "react-router-dom"
import { HelpCircleIcon } from "lucide-react";

const TelaAcesso = () => {
  return (
  <div className="Titulo">
    <div className="Help">
     <Link to="/ajuda"><HelpCircleIcon/></Link>
    </div>
      <h1>CANTINA <br /> ETEC</h1>
      <h5>faça login ou crie sua conta</h5>
    <div> 
        <h3>Já possui uma conta?</h3>
    </div>
    
    <button className="AcessarConta"><Link to="/login">Acessar</Link></button>
    <div>
        <h3>Primeiro acesso? Crie sua conta.</h3>
        <button className="CriarConta"><Link to="/cadastro">Criar conta</Link></button>
    </div>
  </div>
  )
}

export default TelaAcesso
