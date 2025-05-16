import COCA from '../assets/CocaCola.png'
import Sanduba from '../assets/Sanduba.png'
import MAIS from '../assets/plus.png'
import MENOS from '../assets/minus.png'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon} from "lucide-react";
import './QuaseLa.css'




function QuaseLa2() {

  const navigate = useNavigate();

    return (
      <div className='Quase-Container'>
        <button className='Voltar' onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
        <div className="Titulo">
          <h1>QUASE LÁ!</h1>
          <h4>revise e confirme seu pedido</h4>
        </div>
  
        <div className="container-pedido">
          <div className="pedido">
             <div className="Fundo">
                 <img src={Sanduba} alt="" id='Sanduba' />
              </div>
              <div className="anota">
                  <h5>LANCHE NATURAL ATUM</h5>
                  <h6>pão, atum, alface, tomate.</h6>
  <br />
                  <div className="qtd">
                    <h6>R$6,00</h6>
                    <h6>01x</h6>
                  </div>
           
              </div>
              <div className="botoes2">
                <button> <img src={MAIS} alt="" id='Mais' /></button>
                <button className='Subtrair'><img src={MENOS} alt="" id='Menos '/></button>
              </div>
          </div>
  
          <div className="pedido">
              <div className="Fundo">
                 <img src={COCA} alt="" />
              </div>
  
              <div className="anota">
                 <h5>COCA-COLA LATA</h5>
                 <h6>Coca-cola em lata 200ml.</h6>
  <br />
                  <div className="qtd">
                    <h6>R$6,00</h6>
                    <h6>01x</h6>
                  </div>
              </div>
              <div className="botoes3">
                <button> <img src={MAIS} alt="" id='Mais' /></button>
                <button className='Subtrair'><img src={MENOS} alt="" id='Menos '/></button>
              </div>
          </div>
  
        
        </div>
  
        <div className="Cupom">
          <h3>Possui um cupom?</h3>
          <input 
              type="text" 
              name="cupons"
              placeholder='Insira o código do seu cupom'
                />
        </div>
        <div className="PagamentoForma">
                <h3>Forma de Pagamento</h3>
                  <h5>Pagar pelo APP</h5>
                  
                  <button><Link to="/Pix">PIX</Link></button>
                  <button><Link to="/Adicionar-Cartão">Cartão de Débito ou Crédito</Link></button>
                  
                  <h5>Pagar na retirada</h5>
                    <button><Link to="/Dinheiro">Dinheiro</Link></button>
                    <button><Link to="/Aguardando-Resposta">Máquina de Cartão</Link></button>

                  <h5>Pagamento automático</h5>
                    <button><Link>Apple Pay</Link></button>
                    <button><Link>Google Pay</Link></button>       
           </div>
      </div>
    )
}

export default QuaseLa2
