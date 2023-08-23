import React from 'react';
import './modal.css'; // Import your custom modal CSS file

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
