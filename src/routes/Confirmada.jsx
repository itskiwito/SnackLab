import { useNavigate, Link } from 'react-router-dom';
import './TelasPagamento.css'
import { ChevronLeftIcon} from "lucide-react";
import validator from 'validator'
import { useForm } from "react-hook-form";



function Confirmada() {
 
    const navigate = useNavigate();

    const { register, formState: { errors} } = useForm();

  return (
    <div className='Principal'>
       <button className="Voltar" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
       <div className="Titulo">
        <h1>COMPRA <br />CONFIRMADA!</h1>
        <h3>sua compra foi confirmada com sucesso</h3>

        <div className="item">
            <h6>você comprou</h6>
            <h3>LANCHE NATURAL ATUM 01x <br />COCA-COLA LATA 02x</h3>
        </div>
        <div className="codigoUnico">
            <h6>Seu pedido logo estará pronto para retirada</h6>
            <h6>Informe o código abaixo para retirar</h6>

            <input         
                      className={errors?.number && "input-error"}
                      type="number"
                      id="troco"
                     {...register("number",
                     {validate:(value) => validator.isNumeric(value),})}
                   />
                      {errors?.number?.type == 'validate' && (<p className="error-message">Número inválido</p>)}     

            <h3>cancelar pedido</h3>
        </div>
        <div>
          <button className="ContinuarButton"><Link to="/Principal">Voltar ao menu</Link></button>
        </div>
       </div>
    </div>
  )
}

export default Confirmada
