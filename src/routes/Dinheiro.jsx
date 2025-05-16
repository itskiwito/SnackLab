import { ChevronLeftIcon} from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';
import validator from 'validator'
import { useForm } from "react-hook-form";
import './TelasPagamento.css'


const Dinheiro =()=> {

    const navigate = useNavigate();

    const { register, formState: { errors} } = useForm();
    

  return (
    <div >
        <div className="Principal">
         <button className="Voltar" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
         
         <div className="Titulo">
            <div className="Perguntas">
              <h1>DINHEIRO</h1>
              <h3>precisa de troco?</h3>
            </div>
         </div>

        </div>
        <div className="ValorInput">
            <div className="Titulo">
              <h3>Sim? Quanto?</h3>
            </div>
        <input         
            className={errors?.number && "input-error"}
            type="number"
            id="troco"
            placeholder="R$"
           {...register("number",
           {validate:(value) => validator.isNumeric(value),})}
         />
            {errors?.number?.type == 'validate' && (<p className="error-message">Número inválido</p>)}     

        </div>

        <div>
          <button className="ContinuarButton"><Link to="/Aguardando-Resposta">Confirmar e continuar</Link></button>
        </div>
    </div>
  )
}

export default Dinheiro
