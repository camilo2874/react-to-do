
import './styles/listar.css';

import React from "react";
function ListarTareas(props) {
    return (
        <ul className="ListarTareas">
            
            {props.children}
        </ul>
    );
}

export { ListarTareas };
