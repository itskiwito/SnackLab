import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      usuario: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3003/sistema/usuarios`)
    .then(usuario =>
      usuario.json().then(usuario => this.setState({usuario}))
    )
  }

  render() {
    const {usuario} = this.state;

    return usuario.map((usuario, index) =>(
        <div className="usuario-list">
            <div key={index}>
                <h5>{usuario.nm_cliente}</h5>
                <article>
                    <strong>{usuario.eml_institucional}</strong>
                    <p><Link to ={`/usuarios/${usuario.cd_cliente}`}></Link></p>
                </article>
            </div>
        </div>
    ))
  }
}