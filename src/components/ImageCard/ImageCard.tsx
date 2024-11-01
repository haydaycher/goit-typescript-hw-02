import css from "./ImageCard.module.css";
import React from "react";
import { ImageData } from "../../photos";

interface ImageCardProps {
  image: ImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
