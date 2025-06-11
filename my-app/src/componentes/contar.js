
import './styles/contar.css';

import React from "react";
function ContarTareas(props) {
    console.log(props.tareasCompletas);
    return (
        <h3 className="ContarTareas">
            Has Completado {props.completas} De {props.total}
        </h3>
    );
}

export { ContarTareas };
