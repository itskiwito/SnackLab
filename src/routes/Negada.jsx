import { useNavigate, Link } from 'react-router-dom';
import './TelasPagamento.css'
import { ChevronLeftIcon} from "lucide-react";


function Negada() {

    const navigate = useNavigate();

  return (
    <div className='PrincipalSemInput'>
      <button className="Voltar" onClick={()=> navigate=(-1)}><ChevronLeftIcon/></button>
      <div className="Titulo">
        <h1>COMPRA <br />NEGADA!</h1>
        <h3>Lamentamos! Sua compra foi <br />recusada.</h3>
        <div className="item">
            <h6>Justificativa</h6>
            <h6>O item Lanche Natural Atum, está indisponível no <br />momento</h6>
        </div>
        <div>
        <button className="ContinuarButton"><Link to="/">Voltar ao Menu</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Negada
