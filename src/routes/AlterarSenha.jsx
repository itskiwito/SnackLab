import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import Footer from './footer';

function AlterarSenha() {

    const navigate = useNavigate();

  return (
    <div className='AltSenha'>
       <button className="Voltar" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
       <div className="Titulo">
        <h1>SENHA</h1>
        <h5>alterar senha</h5>

        <div className="infoInput">
            <label>Senha atual</label>
            <input
             type="senha"
             placeholder='********'
              />
        </div>

        <div className="infoInput">
            <label>Nova senha</label>
            <input
             type="senha"
             placeholder='********'
              />
        </div>

        <div className="infoInput">
            <label>Confirmar senha</label>
            <input
             type="senha"
             placeholder='********'
              />
        </div>
        <div className="obrigatorio">
            <h5>Sua senha deverá conter</h5>
<br />
            <p>Uma letra maiúscula</p>
            <h5>um número</h5>
            <h5>Um carácter especial</h5>
            <h5>minímo de 8 caractéres</h5>
        </div>
       </div>
       

       <Footer/>
    </div>
  )
}

export default AlterarSenha
