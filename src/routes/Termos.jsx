import { useNavigate } from 'react-router-dom';
import "./Termos.css"
import { ChevronLeftIcon } from "lucide-react";


function Termos() {

const navigate = useNavigate();

  return (
    <div className="app-container">

    <button className="Voltar" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
      
      <div className="TermosTitulo">
        <h1>TERMOS E <br /> CONDIÇÕES DE USO</h1>
      </div>
      <div className="TermosLista">
        <ol>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error iure perspiciatis minima labore ducimus dolore!
            <br />Id fuga deleniti sint, quod, quo praesentium fugit quia vel dolorem illum nisi animi explicabo?
            </li>
            <li> Vel iusto quod molestias eius dolorem autem quisquam iste id est repellat error dolor in dolore deleniti perspiciatis doloremque, at recusandae! Numquam?
                <br /> dolor sit amet consectetur adipisicing elit. Voluptate, necessitatibus corrupti reiciendis suscipit similique 
            </li>
            <li>
              Temporibus rerum suscipit nisi quisquam, adipisci quod non quo ducimus vero sit voluptas? Quam reiciendis laboriosam natus aliquam fugit.
            </li>
            

        </ol>
      </div>
    </div>
  )
}

export default Termos
