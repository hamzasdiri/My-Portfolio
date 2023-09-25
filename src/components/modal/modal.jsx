import React from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = isOpen ? { display: "block" } : { display: "none" };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
