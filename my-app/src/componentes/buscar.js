
import './styles/buscar.css'; 

import React from "react";
function BuscarTarea(props) {
  
    return (
        <div>
            <input 
                placeholder="Buscar tarea"
                className="BuscarTarea"
                value={props.buscarTarea}
                onChange={(event)=>props.setBusacarTarea(event.target.value)}
            />
        </div>
    );
}

export { BuscarTarea };
