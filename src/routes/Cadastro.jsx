import { useForm } from "react-hook-form";
import validator from 'validator'
import './Login.css'
import { Link } from "react-router-dom"
import { HelpCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import './Cadastro.css'

const Cadastro = () => {
    const { register, handleSubmit, formState: { errors} } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="app-container">
      <div className="Help">
        <Link to="/ajuda"><HelpCircleIcon/></Link>
      </div>

      <button className="Voltar"><Link to="/"> <ChevronLeftIcon/> </Link></button>

      <div className="form-group">
        <h1>CADASTRO</h1>
        <h5>insira seus dados para criar uma conta</h5>
        <label>EMAIL</label>
        <input
           className={errors?.email && "input-error"}
          type="text"
          placeholder="Seu Email"
          {...register("email", 
            {required: true,
            validate:(value) => validator.isEmail(value),})}
        />
        
        {errors?.email?.type == 'required' && (<p className="error-message">Digite um E-mail</p>)}

        {errors?.email?.type == 'validate' && (<p className="error-message">E-mail inválido</p>)}

      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input
           className={errors?.number && "input-error"}
          type="number"
          placeholder="ex: 11 99000-0000"
          {...register("number", 
            {required: true,
            validate:(value) => validator.isNumeric(value),})}
        />
        
        {errors?.number?.type == 'required' && (<p className="error-message">Digite um número de telefone</p>)}

        {errors?.number?.type == 'validate' && (<p className="error-message">Número inválido</p>)}

      </div>
      

      <div className="form-group">
        <label>Senha</label>
        <input
          className={errors?.senha && "input-error"}
          type="senha"
          placeholder="Sua senha"
          {...register("senha", {required: true, minLength: 7,
            validate: {
              hasSpecialChar: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Deve conter caractere especial",
              hasCapitalLetter: (value) => /[A-Z]/.test(value) || "Deve conter letra maiúscula"
            }
           })}
        />
        {errors?.senha?.type == 'minLength' && (<p className="error-message">Necessita de 7 dígitos</p>)}

        {errors?.senha?.type == 'required' && (<p className="error-message">Necessita de Senha</p>)}

        {errors?.senha?.message && ( <p className="error-message">{errors.senha.message}</p>)}
      </div>

   

      <button onClick={() => handleSubmit(onSubmit)()} className="Icon"><Link to="/CadastroCriado"><ChevronRightIcon/></Link></button>
    </div>
  );
}

export default Cadastro

