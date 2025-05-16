import { useNavigate, Link } from 'react-router-dom';
import './TelasPagamento.css'
import { ChevronLeftIcon} from "lucide-react";

function AddCartão() {

    const navigate = useNavigate();
  return (
    <div className='PrincipalSemInput'>
        <button className='Voltar' onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
        <div className="Titulo">
            <h1>ADICIONAR <br />CARTÃO</h1>
            <h3>adicione seu cartão de crédito ou <br /> débito para o pagamento</h3>
        </div>
        <div className="botoes">
            <button className='Debito'><Link to="/Adicionar-Cartão-Débito">Cartão de Débito</Link></button>
         </div>
         <div className="botoes">
            <button className='Credito'><Link >Cartão de Crédito</Link></button>
        </div>
    </div>
  )
}

export default AddCartão
