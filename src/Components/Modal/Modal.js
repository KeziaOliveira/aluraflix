import React from "react";
import ReactDOM from "react-dom";
import cross from "../../assets/icons/cross.svg";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={cross} alt="Fechar" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
