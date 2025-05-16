import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import QrCode from '../assets/QrPix.png'
import './TelasPagamento.css'


function Pix() {

    const navigate = useNavigate();
    
  return (
    <div className='Pix-Container'>
      <button className="Voltar" onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
      <div className="Titulo-Pix">
        <h1>CÓDIGO PIX</h1>
        <h6>efetue o pagamento e confirme o<br /> pedido</h6>
      </div>
      <div className="QrCode-Container">
        <div className="QrCode">
          <img src={QrCode} alt="" />
        </div>
        <div className="Tempo">
            <h5>Indeterminado...</h5>
        </div>
        <div className="CodeArea">
            <label>Copiar código</label>
            <input 
            type="text"
            placeholder='00020126470014br.gov.bcb.pix0114+55139975018880207Louders52040000530398654040.015802BR5924Marcio Rosario Ribeiro J6008Brasilia62230519daqr4982648885213026304A471' />
        </div>
      </div>
      <div className="PagamentoConfirmado">
        <button className='Confirmado'><Link to="/Aguardando-Resposta">Pagamento confirmado</Link></button>
      </div>
    </div>
  )
}

export default Pix
