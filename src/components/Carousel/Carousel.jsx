import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for the modal

const ImageCarousel = ({ isOpen, images, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Carousel"
      className="image-carousel-modal"
      overlayClassName="image-carousel-overlay"
    >
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ImageCarousel;
