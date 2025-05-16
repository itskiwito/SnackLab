import { useNavigate, Link } from 'react-router-dom';
import './TelasPagamento.css'
import { ChevronLeftIcon} from "lucide-react";


function Resposta() {

  const navigate = useNavigate();

  return (
    <div className='PrincipalSemInput'>
      <div className="Titulo" onClick={() => {
      navigate('/Compra-Confirmada');
    }} >
        <h1>AGUARDANDO <br />RESPOSTA</h1>
        <h3>sua compra está sendo confirmada</h3>
        <div className="item">
            <h6>você comprou</h6>
            <h3>LANCHE NATURAL ATUM 01x <br />
            COCA-COLA LATA
            </h3>
        </div> 
      </div>
      <div className='Cancelar'>
        <button> <Link to="/Carrinho-Alterar-Pagamento"><h3>cancelar pedido</h3></Link></button>
         
        </div>
    </div>
  )
}

export default Resposta
