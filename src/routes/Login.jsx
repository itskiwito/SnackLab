import { useForm } from "react-hook-form";
import validator from 'validator'
import './Login.css'
import { Link } from "react-router-dom"
import { HelpCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Login = () => {
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
        <h1>Login</h1>
        <h5>insira seu E-mail e Senha para login</h5>
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
        <label>Senha</label>
        <input
          className={errors?.senha && "input-error"}
          type="senha"
          placeholder="Sua senha"
          {...register("senha", {required: true, minLength: 7 })}
        />
        {errors?.senha?.type == 'minLength' && (<p className="error-message">Necessita de 7 dígitos</p>)}

        {errors?.senha?.type == 'required' && (<p className="error-message">Necessita de Senha</p>)}
      </div>

   
        <button onClick={() => handleSubmit(onSubmit)()} className="Icon"><Link to="/Principal"><ChevronRightIcon/></Link></button>

    </div>
  );
}

export default Login
