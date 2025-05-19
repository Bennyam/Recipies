import { useRef, useState } from "react";
import styles from "./SearchBar.module.css";
import { useRecipies } from "../contexts/RecipiesContext";

function SearchBar() {
  const { searchRecipies } = useRecipies();
  const [query, setQuery] = useState("");
  const formEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    searchRecipies(query);
    setQuery("");
    formEl.current.blur();
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search 1.000.000 recipies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={formEl}
      ></input>
      <button className={styles.btn}>Search</button>
    </form>
  );
}

export default SearchBar;
