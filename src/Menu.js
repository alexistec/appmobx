import React from "react";
import {inject,observer} from 'mobx-react';

class Menu extends React.Component{
    idRef = React.createRef();
    nombreRef = React.createRef();
    imagenRef = React.createRef();
    
    render(){
        
        const {TortasStore} = this.props;
        return (
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();


                    TortasStore.agregarTortas({
                        id : this.idRef.current.value,
                        nombre : this.nombreRef.current.value,
                        imagen : this.imagenRef.current.value,
                    })

                    e.target.reset();
                }}>
                    <input
                        type="number"
                        placeholder="id"
                        ref={this.idRef}
                    />
                    <input
                        type="text"
                        placeholder="nombre"
                        ref={this.nombreRef}
                    />
                    <input
                        type="text"
                        placeholder="imagen"
                        ref={this.imagenRef}
                    />
                    <button type="submit">Agregar</button>
                </form>                
                <ul>
                    {
                    TortasStore.tortas.map((torta)=>
                        <li  key={torta.id}>
                            {torta.nombre} 
                        </li>   
                    )
                    }
                </ul>
            </div>
        )
    }
}


export default inject("TortasStore")(observer(Menu));