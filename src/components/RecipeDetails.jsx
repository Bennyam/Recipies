import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./RecipeDetails.module.css";

function RecipeDetails() {
  const { recipeDetails, servings, dispatch } = useRecipies();
  const { cooking_time } = recipeDetails;
  return (
    <div className={styles.details}>
      <div className={styles.info}>
        <span className={styles.icon}>🕐</span>
        <span className={styles.strongText}>{cooking_time}</span>
        <span className={styles.tex}>Minutes</span>
      </div>
      <div className={styles.info}>
        <span className={styles.icon}>👥</span>
        <span className={styles.strongText}>{servings}</span>
        <span className={styles.text}>Servings</span>
        <div className={styles.btns}>
          <button
            className={styles.btn}
            onClick={() => dispatch({ type: "servings/dec" })}
          >
            -
          </button>
          <button
            className={styles.btn}
            onClick={() => dispatch({ type: "servings/inc" })}
          >
            +
          </button>
        </div>
      </div>
      <button
        className={`${styles.bookmark} ${
          recipeDetails.bookmarked ? styles.nobookmark : ""
        }`}
        onClick={() => dispatch({ type: "bookmarks/toggle" })}
      >
        {`${recipeDetails.bookmarked ? "Bookmarked" : "Bookmark"}`}
      </button>
    </div>
  );
}

export default RecipeDetails;
