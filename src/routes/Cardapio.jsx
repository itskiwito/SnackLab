import { useNavigate, Link } from 'react-router-dom';
import { ChevronUp } from "lucide-react";
import Footer from './footer';
import COCA from '../assets/CocaCola.png'
import AddFav from '../assets/FavPequeno.png'
import Mais from '../assets/plus.png'
import Sanduba from '../assets/Sanduba.png'
import Brigadeiro from '../assets/Brigadeiro.png'
import FantaUva from '../assets/FantaUva.png'
import LanchePres from '../assets/LanchePresunto.png'
import freeGells from '../assets/freegells.png'
import Bala7 from '../assets/bala7belo.png'
import './Cardapio.css'

function Cardapio() {
    
    const navigate = useNavigate();
  return (
    <div className='cardapio-Container'>
      <button className="Voltar" onClick={() => navigate(-1)}><ChevronUp/></button>
      <div className="Disponiveis">
      
    <div className="TipoItem" onClick={() =>{
      navigate('/Descrição-Item')
    }}>
      <img src={COCA} alt="Coca-Cola" />
      <div className="conteudoItem">
        <h5>COCA-COLA LATA</h5>
        <h6>R$6,00</h6>
      </div>
      <div className="acoes">
        <button className='FavIcon'><img src={AddFav} alt="Favoritar" /></button>
        <button className='Adicionar'><img src={Mais} alt="Adicionar" /></button>
      </div>
    </div>

    <div className="TipoItem">
      <img src={Sanduba} alt="Lanche de Atum" />
      <div className="conteudoItem">
        <h5>LANCHE NATURAL ATUM</h5>
        <h6>R$6,00</h6>
      </div>
      <div className="acoes">
        <button className='FavIcon'><img src={AddFav} alt="Favoritar" /></button>
        <button className='Adicionar'><img src={Mais} alt="Adicionar" /></button>
      </div>
    </div>

    <div className="TipoItem" >
      <img src={FantaUva} alt="Fanta Uva" />
      <div className="conteudoItem">
        <h5>FANTA UVA LATA</h5>
        <h6>R$6,00</h6>
      </div>
      <div className="acoes">
        <button className='FavIcon'><img src={AddFav} alt="Favoritar" /></button>
        <button className='Adicionar'><img src={Mais} alt="Adicionar" /></button>
      </div>
    </div>

    <div className="TipoItem">
      <img src={Brigadeiro} alt="Brigadeiro de colher" />
      <div className="conteudoItem">
        <h5>BRIGADEIRO DE COLHER</h5>
        <h6>R$2,00</h6>
      </div>
      <div className="acoes">
        <button className='FavIcon'><img src={AddFav} alt="Favoritar" /></button>
        <button className='Adicionar'><img src={Mais} alt="Adicionar" /></button>
      </div>
    </div>
        
      </div>
      <div className="Indisponiveis">
            <p>•</p>
            <h1>INDISPONÍVEIS</h1>
            <h6>sentimos muito! Em breve esses itens retornarão ao cardápio</h6>
            <h6>notificar quando estiverem disponíveis</h6>

            <div className="ItemIndisponivel" onClick={()=> {
              navigate('/Item-Indisponível')
            }}>
                <img src={LanchePres} alt="" />
                <div className="InfoIndisp">
                  <h5>LANCHE PRESUNTO E QUEIJO</h5>
                  <h6>R$6,00</h6>
                </div>
               
                <button className='AddAosFavs'><img src={AddFav} alt="" /></button>
            </div>
            <div className="ItemIndisponivel">
                <img src={freeGells} alt="" />
                <div className="InfoIndisp">
                  <h5>FREEGELLS CEREJA</h5>
                  <h6>R$6,00</h6>
                </div>
              
               
                <button className='AddAosFavs'><img src={AddFav} alt="" /></button>
            </div>
            <div className="ItemIndisponivel">
                <img src={Bala7} alt="" />
                <div className="InfoIndisp">
                  <h5>03 BALA 7BELO</h5>
                  <h6>R$6,00</h6>
                </div>
              
                
                <button className='AddAosFavs'><img src={AddFav} alt="" /></button>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Cardapio
