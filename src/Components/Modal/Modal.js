import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // CSS para o modal

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Certifique-se de ter esse elemento no seu index.html
  );
};

export default Modal;
