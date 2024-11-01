import React, { useState, FormEvent, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";

const notify = () => toast.error("Please enter a search term");

interface SearchBarProps {
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      notify();
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery(""); 
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputWrapper}>
          <input
            name="inputSearch"
            type="text"
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleChange}
            className={css.searchInput}
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className={css.btn}>
            <IoSearchOutline className={css.icon} />
            Search
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
