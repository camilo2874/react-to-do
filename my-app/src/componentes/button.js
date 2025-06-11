import './styles/button.css';

import React from "react";

function Button({ text, onClick, disabled }) {
    return (
        <button className="CreateTodoButton" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export { Button };