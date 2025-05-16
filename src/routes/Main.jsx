import Lanche from '../assets/Lanche.png'
import Bebida from '../assets/Bebidas.png'
import './main.css'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Footer from './footer'


function Main() {
  return (
    <div className='main-container'>      
        <div className="Pesquisa">
            <input 
            type="text" 
            name="searchBar"
            placeholder='Qual a sua fome de hoje?'
              />
        </div>

        <div className='Categorias'>
          <div className='container'>
            <div className="container-box">
              <Link >
                <img src={Lanche} alt="" /> 
              </Link>
                <h2>Lanches</h2>
            </div>

            <div className="container-box">
             <Link >
              <img src={Bebida} alt="" />
             </Link>
              <h2>Bebidas</h2>
            </div>

            </div>
            <div className='Subcategorias'>
              <h4>Doces</h4>
              </div>
              <div className='Subcategorias' id='salgado'>
                <h4>Salgados</h4>
              </div>
              <div className='Subcategorias'>
                <h4>Balas</h4>
              </div>
        </div>

        <div className="filtros">
          <h5>filtrar por •</h5>
            <button>menor preço</button>
            <button>maior preço</button>
            <button>ofertas</button>
            
            <div className='checkbox-filtro'>
            <input type="checkbox"/>
            <h5>mostrar apenas disponiveis</h5>
            </div>
            <div className="cardapio">
              <h1>Vamos pedir?</h1>
              <h3>disponíveis no momento</h3>
              
              <div className='linguica'>a</div>
              <div className='linguica'></div>
              <div className='linguica'></div>
              <div className='linguica'></div>
              <div className='linguica'></div>

              <div>
            <Link to="/Cardápio">  <ChevronDown/></Link>
              </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Main
