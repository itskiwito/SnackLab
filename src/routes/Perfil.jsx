import Footer from './footer'
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon} from "lucide-react";
import './Perfil.css'
import Pig from '../assets/Pig.jpg'

function Perfil() {

    const navigate = useNavigate();

  return (
    <div className='Container-perfil'>
        <button className='Voltar' onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
      <div className="Titulo">
        <h1>PERFIL</h1>
        <h6>página do usuário</h6>
      </div>
      <div className="FotoPerfil">
        <img src={Pig} alt="" />
      </div>
      <div className="NomePerfil">
        <h3>Carlinhos</h3>
      </div>
      <div className="BotoesPerfil">
      <Link to="/Informações-de-Login"><button> login</button></Link>
      <Link><button>cartões salvos</button></Link>
      <Link><button>histórico de compras</button></Link>
      <Link><button>favoritos</button></Link>
      <Link to="/Cupons"><button>cupons</button></Link>
      <Link to="/Configurações"><button>configurações</button></Link>
      <Link to="/"><button>sair</button></Link>
      </div>
<Footer/>
    </div>
  )
}

export default Perfil
