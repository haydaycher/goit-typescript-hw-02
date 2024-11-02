import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.js";
import { ImageData } from "../../photos.js";

interface ImageGalleryProps {
  images: ImageData[];
  openModal: (image: ImageData) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => openModal(image)}
            className={css.listItem}
          >
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
