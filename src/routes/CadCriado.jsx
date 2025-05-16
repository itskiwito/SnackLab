import { Link } from "react-router-dom"
import "./CadCriado.css"
import { HelpCircleIcon } from "lucide-react";

function CadastroCriado() {
  return (
    <div className='app-container'>
        
      <div className="Titulo">
        <h1>Cadastro <br />criado</h1>
      <div className="SubTitulo">
           <h5>obrigado por usar Cantina etec. <br /> Para prosseguir, leia nossos termos <br /> e condições.</h5>
      </div>
      <div className="Help">
        <Link to="/ajuda"><HelpCircleIcon/></Link>
      </div>

      </div>
      <div>
        <button className="Termos"><Link to="/Termos">Termos e condições</Link></button>
      </div>
      <div>
       

      </div>
      <div className="Boto">
      <button className="Prosseguir"><Link to="/Principal">Prosseguir</Link></button>
      </div>
    </div>
    
  )
}

export default CadastroCriado
