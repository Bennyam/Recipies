import styles from "./SearchResults.module.css";

function SearchResults({ children }) {
  return <div className={styles.resultsView}>{children}</div>;
}

export default SearchResults;
