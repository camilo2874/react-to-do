import React from "react";
import './styles/tarea.css';

function Tarea(props) {
  return (
    <li className="tarea">
      <span 
        className={`Icon Icon-check ${props.completada ? "Icon-check--active" : ""}`}
        onClick={props.onEditar} 
      >
        ⟳
      </span>

      <p
        className={`tarea-p ${props.completada ? "tarea--p--completada" : ""}`}
        onClick={props.onCompletado}
      >
        {props.text}
      </p>

      <span
        className="Icon Icon-delete"
        onClick={props.onEliminarTarea}
      >
      X
      </span>
    </li>
  );
}

export { Tarea };
