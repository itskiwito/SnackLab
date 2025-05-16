import { useNavigate, Link } from 'react-router-dom';
import './TelasPagamento.css'
import { ChevronLeftIcon} from "lucide-react";

function AddCartão2() {

    const navigate = useNavigate();

  return (
  <div className="Principal-Container">
    <div className='Principal'>
        <button className='Voltar' onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
        <div className="Titulo">
            <h1>ADICIONAR <br />CARTÃO</h1>
            <h3>adicione seu cartão de débito</h3>
        </div>
        <div className="cartaoInfo">
            <h6>Nome do cartão</h6>
            <input type="text" />
        </div>
        <div className="cartaoInfo">
            <h6>Número do cartão</h6>
            <input type="number" />
        </div>
        <div className="linhaDupla">
          <div className="cvv">
            <h6>CVV</h6>
            <input type="number" placeholder="123" />
          </div>
          <div className="Validade">
            <h6>Validade</h6>
            <input type="date" />
          </div>
        </div>
        <div className="cartaoInfo">
            <input type="checkbox" />
            <label>Salvar cartão para futuras compras</label>
        </div>
       
      </div>
      <div>
            <button className='ContinuarButton'><Link to="/Carrinho-Confirmar-Compra">Adicionar cartão</Link></button>
        </div>
    </div>
  )
}

export default AddCartão2
