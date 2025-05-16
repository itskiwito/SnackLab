import COCA from '../assets/CocaCola.png'
import Sanduba from '../assets/Sanduba.png'
import MAIS from '../assets/plus.png'
import MENOS from '../assets/minus.png'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon} from "lucide-react";
import './QuaseLa.css'




const QuaseLa = () => {

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
              <button > <img src={MAIS} alt="" id='Mais' /></button>
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
      <div className="Pagamento">
        <h3>Forma de pagamento</h3>
        <h5>Cartão de débito VISA(55**)</h5>
      </div>
      <div className="linkPagar">
        <Link to="/Carrinho-Alterar-Pagamento">alterar forma de pagamento</Link>
      </div>
      <div className="Resumo-Pedido">
        <p>Resumo do pedido</p>
        <h5>LANCHE NATURAL ATUM 01x.......R$6,00</h5>
        <h5>COCA-COLA LATA 01x.................R$6,00</h5>
        <button>excluir tudo</button>
        
      </div>

      <div>
      <button className='ContinuarButton'><Link to="/Aguardando-Resposta">Confirmar pedido</Link></button>
      </div>
    </div>
  )
}

export default QuaseLa
