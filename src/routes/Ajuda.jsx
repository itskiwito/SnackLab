import './Ajuda.css'
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';


function Ajuda() {

  const navigate = useNavigate();

  return (
    <div className="App-container">
       <button className="Voltar" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>

       <div className='Topics'>
          <h1>AJUDA</h1>
          <h5>central de ajuda</h5>
          <input type="text"
          placeholder="Qual é sua duvida?"
          id="aaa" />
          <div className='Options'>
            <p>Quero excluir minha conta</p>
            <p>Quero adicionar meu cartão de débito no aplicativo</p>
            <p>Quero cancelar um pedido</p>
            <p>Quero alterar dados da minha conta</p>
            <p>Quero reembolso</p>
            <p>Quero remover o meu cartão do aplicativo</p>
          </div>
       </div>
     </div>
  )
}

export default Ajuda
