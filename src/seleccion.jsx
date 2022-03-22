import React, { Component } from "react";

export default class seleccion extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:'algo',
            id:'',
            precio:'',
        };
        this.cambio = this.cambio.bind(this);
        this.handleSubmit = this.mostrarCambio.bind(this);
    }

    cambio(event){
       this.setState({
           value: event.target.value,
        })
    }
    
    mostrarCambio(event) {
        alert('Se ha agregado: ' + this.state.value +' a su carrito');
        event.preventDefault();
      }

        render(){
            return(
            <div>
                <form className='seleccion' onSubmit={this.mostrarCambio}>
                    <label className='cabeza'>Escoja su producto
                        <select clasname="lista" value={this.state.value} onChange={this.cambio} >
                            <option value="camisa">Camisa</option>
                            <option value="Pantalo">Pantalo</option>
                            <option value="Blusa">Blusa</option>
                            <option value="Calcetas">Calcetas</option>
                            <option value="Ropa interio">Ropa interio</option>
                            <option value="Bufanda">Bufanda</option>
                            <option value="Saco">Saco</option>
                            <option value="Camison">Camison</option>
                            <option value="Vestido">Vestido</option>
                            <option value="Corbata">Corbata</option>
                        </select>
                    </label>
                    <input className="boton" type="submit" value="Submit"/>
                </form>


                <div className='nota'>
                <h4>Nota de Venta</h4>
                    <table class="default">
                        <tr>
                            <th>Articulo</th>
                            <th>Id</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>{this.state.value}</td>
                            <td>{this.state.id}</td>
                            <td>{this.state.precio}</td>
                        </tr>
                        </table>
                    <input className='boton' type="button" value="Eliminar"/>
                    <input className='boton' type="button" value="Enviar"/>
                    </div>  
            </div>);
        }
}

