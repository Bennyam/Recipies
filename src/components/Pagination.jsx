import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./Pagination.module.css";

function Pagination() {
  const { curPage, pages, dispatch } = useRecipies();

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.btn} ${curPage <= 1 && styles.hidden}`}
        onClick={() => dispatch({ type: "pageDown" })}
      >
        &larr; {`Page ${curPage - 1}`}
      </button>
      <button
        className={`${styles.btn} ${curPage >= pages && styles.hidden}`}
        onClick={() => dispatch({ type: "pageUp" })}
      >
        {`Page ${curPage + 1}`} &rarr;
      </button>
    </div>
  );
}

export default Pagination;
