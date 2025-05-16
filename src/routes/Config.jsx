import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeftIcon } from "lucide-react";
import Footer from './footer';
import MAIS from '../assets/+.png'
import MENOS from '../assets/-.png'
import './Config.css'

function Config() {

    const navigate = useNavigate();

  return (
    <div className='Config-Container'>
      <button className="Voltar" onClick={()=> navigate(-1)}><ChevronLeftIcon/></button>
      <div className="Config-Titulo">
        <h1>CONFIGURAÇÕES</h1>
        <h6>defina suas configurações</h6>
      </div>
      <div className="Tema">
        
      </div>
      <div className="Acessibilidade">
        <div className="Title">
        <h6>acessibilidade</h6>
        </div>
     
        <div className="Tamanho">
            <h5>tamanho da letra</h5>
         <button><img src={MAIS} alt="" /></button> 
         <button className='menos'><img src={MENOS} alt="" /></button>
            
        </div>
        <div className="Idioma">
            <h5>idioma</h5>
            <div className='Idioma-Options'>
                <h5>português</h5>
                <h5>inglês</h5>
                <h5>espanhol</h5>
            </div>
        </div>
        <div className="Daltonismo">
            <h5>modo daltônico</h5>
            <div className="Dalto-Options">
                <h5>protanomolia</h5>
                <h5>deuteranomalia</h5>
                <h5>tritanomalia</h5>
                <h5>acromatopsia</h5>
                <h5>protanomia</h5>
                <h5>deuteranomia</h5>
                <h5>tritanomia</h5>
            </div>
        </div>
      </div>
      <Footer/> 
    </div>
  )
}

export default Config
