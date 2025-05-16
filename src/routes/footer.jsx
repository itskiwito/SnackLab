import Usuario from '../assets/usuario.png'
import Favorito from '../assets/Favoritos.png'
import Configuracoes from '../assets/Config.png'
import Desconto from '../assets/Ticket.png'
import Carrinho from '../assets/Carrinho.png'
import'./footer.css'
import './main.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <div className="icones">
       <Link to="/Perfil"><img src={Usuario} alt="" /></Link>
       <h6>Perfil</h6>
    </div>

    <div className="icones">
      <Link to="/Cupons"><img src={Desconto} alt="" /></Link>
      <h6>Cupom</h6>
    </div>

    <div className="icones">
    <Link to="/Carrinho-Confirmar-Compra">  <img src={Carrinho} alt="" /></Link>
      <h6>Carrinho</h6>
    </div>

    <div className="icones">
      <img src={Favorito} alt="" />
      <h6>Favoritos</h6>
    </div>

    <div className="icones">
     <Link to="/Configurações"> <img src={Configuracoes} alt="" /></Link>
      <h6>Configurações</h6>
    </div>
 
   </footer>
  )
}

export default Footer
