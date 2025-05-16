import { useNavigate, Link } from 'react-router-dom';
import './DescItem.css'
import { ChevronLeftIcon} from "lucide-react";
import SandubaGrande from '../assets/SanduGrande.png'
import Fav from '../assets/Favoritos.png'
import Mais from '../assets/plusGrande.png'
import Footer from './footer';



function DescItem2() {

    const navigate = useNavigate();

  return (
    <div className='Desc-Container-ind'>
      <button className="Voltar" onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
      <div className="imgContainer">
        <div className="Big">
            <img src={SandubaGrande} alt="" />
        </div>
        <div className="BotoesIcones">
          <button className='Favoritos2'>
            <img src={Fav} alt="" />
          </button>
        </div>
       
      </div>
      <div className="InfoProduto">
        <h2>LANCHE PRESUNTO 
       <br /> E QUEIJO</h2>
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

export default DescItem2
