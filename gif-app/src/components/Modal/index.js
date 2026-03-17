import React from "react";

export default function Modal ({ children, onClose }) {
    return <div className="modal">
        <div className="modal-contenido">
            <button onClick={onClose}>X</button>
            {children}
        </div>
    </div>
}