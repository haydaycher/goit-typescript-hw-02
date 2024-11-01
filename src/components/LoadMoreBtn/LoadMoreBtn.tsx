import React from "react";
import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css.button}
      aria-label="Load more images"
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
