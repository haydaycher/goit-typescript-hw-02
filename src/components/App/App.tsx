import React, { useEffect, useState } from "react";
import { fetchImages, ImageData } from "../../photos.js";
import SearchBar from "../SearchBar/SearchBar.js";
import ImageGallery from "../ImageGallery/ImageGallery.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";
import Loader from "../Loader/Loader.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.js";
import ImageModal from "../ImageModal/ImageModal.js";
import css from "../App/App.module.css";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const { total_pages, results } = await fetchImages(
          searchQuery,
          currentPage
        );
        if (!results.length) {
          setIsEmpty(true);
          return;
        }

        setImages((prevImages) => [...prevImages, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, searchQuery]);

  const handleSubmit = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
    setCurrentPage(1);
    setImages([]);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {error && <ErrorMessage message={error.message} />}
      {isEmpty && <ErrorMessage message="Try again..." />}
      {currentPage >= totalPages && <p>END OF COLLECTION</p>}
      {images.length > 0 && !isLoading && currentPage < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {modalIsOpen && selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
