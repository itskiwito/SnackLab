import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon} from "lucide-react";
import './Cupom.css'

function Cupom() {

    const navigate = useNavigate();

  return (
    <div className='Container-cupons'>
        <button className="Voltar" onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
        <div className="Titulo">
            <h1>CUPONS</h1>
            <h5>verifique seus cupons disponíveis</h5>

            <div className="Cupons">
                <h5>Cupom primeira compra</h5>

                <div className="validade">
                  <h6>válido para a primeira compra no app</h6>
                </div>

                <div className="code">
                    <h5>APP50FF</h5>
                </div>

                <div className="desconto">
                  <h5>5% OFF</h5>
                </div>


                <div className="linkRegra">
                    <Link to="/Cupons-Primeira-Compra">confira aqui as regras de uso</Link>
                </div>
            </div>
            <div className="Cupons">
                <h5>Cupom fidelidade</h5>

                <div className="validade">
                  <h6>válido até 15/05/25</h6>
                </div>

                <div className="code">
                    <h5>FID15</h5>
                </div>
                
                <div className="desconto">
                  <h5>15% OFF</h5>
                </div>


                <div className="linkRegra">
                    <Link to="/Cupons-Fidelidade">confira aqui as regras de uso</Link>
                </div>
            </div>
            <div className="Cupons">
                <h5>Brinde de compra</h5>

                <div className="validade">
                  <h6>válido até 14/05/25</h6>
                </div>

                <div className="code">
                    <h5>BRIN01</h5>
                </div>
                
                <div className="desconto">
                  <h5>01 paçoca</h5>
                </div>


                <div className="linkRegra">
                    <Link to="/Cupons-Brinde-Compra">confira aqui as regras de uso</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cupom