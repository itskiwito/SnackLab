import { useNavigate, Link } from 'react-router-dom';
import './DescItem.css'
import { ChevronLeftIcon} from "lucide-react";
import CocaGrande from '../assets/CocaGrande.png'
import Fav from '../assets/Favoritos.png'
import Mais from '../assets/plusGrande.png'
import Footer from './footer';



function DescItem() {

    const navigate = useNavigate();

  return (
    <div className='Desc-Container'>
      <button className="Voltar" onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
      <div className="imgContainer">
        <div className="Big">
            <img src={CocaGrande} alt="" />
        </div>
        <div className="BotoesIcones">
          <button className='Favoritos'>
            <img src={Fav} alt="" />
          </button>
          <button className='Adiciona'>
            <img src={Mais} alt="" />
          </button>
        </div>
       
      </div>
      <div className="InfoProduto">
        <h2>COCA-COLA LATA</h2>
        <h2>R$6,00</h2>
      </div>
      <div className="Descricao">
        <h6>descrição</h6>

        <h5>Coca-cola em lata 200ml.</h5>

        <h5>10 unidades disponíveis</h5>
      </div>
      <div className="Tabela">
        <h4>VALOR ENERGÉTICO</h4>
        <h4>AÇUCARES</h4>
        <h4>GORDURAS TOTAIS</h4>
      </div>

      <Footer/>
    </div>
  )
}

export default DescItem
