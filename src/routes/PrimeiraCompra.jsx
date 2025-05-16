import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon} from "lucide-react";
import './Cupom.css'

function PrimeiraCompra() {

    const navigate = useNavigate();

  return (
    <div className='Container-cupons'>
      <button className="Voltar" onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
      <div className="Titulo">
        <h1>CUPONS</h1>
        <h3>regras de uso do cupom 'Primeira compra'</h3>
        <div className="Regra">
            <h5>Primeira compra</h5>
            <ol>
                <li>Lorem Eligendi ipsum deleniti possimus esse molestiae consectetur, maiores culpa enim amet cum expedita quia impedit eaque vero eos ipsam. Commodi, aliquid eligendi.</li>
                <li>Sum deleniti possimus esse molestiae consectetur, maiores culpa enim amet cum expedita quia impedit eaque vero eos ipsam. liuid igendi.</li>
                <li>Lorem Eligendi ipsum deleniti possimus esse molestiae consectetur, maiores culpa enim amet cum expedita quia impedit eaque vero eos ipsam. </li>
                <li>Lopa enim amet cum expedita quia impedit eaque vero eos ipsam. Commodi, aliquid eligendi.</li>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default PrimeiraCompra
