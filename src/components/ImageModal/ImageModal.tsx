import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageData } from "../../photos.js";
import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: ImageData | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) {
    return null;
  }

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={urls.regular} alt={alt_description} className={css.image} />
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
        <button onClick={onRequestClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
