import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon } from "lucide-react";
import Footer from './footer';

function InfoLogin() {
    const navigate = useNavigate();

    return (
        <div className='Container-Infoperfil'>
            <button className="Voltar" onClick={() => navigate(-1)}>
                <ChevronLeftIcon/>
            </button>
            
            <div className="Titulo">
                <h1>LOGIN</h1>
                <h3>informações de login</h3>
            
                <div className="infoInput">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder='carlo@gmail.com'
                    />
                </div>

                <div className="infoInput">
                    <label>Senha</label>
                    <input
                        type="password"  // Corrigido
                        placeholder='********'
                    />
                    <Link to="/Perfil-Alterar-Senha">redefinir senha</Link>
                </div>

                <div className="infoInput">
                    <label>Telefone</label>
                    <input
                        type="number"
                        placeholder='(**) *****-**78'
                    />
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}

export default InfoLogin;