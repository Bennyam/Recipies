import { memo } from "react";
import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./RecipePreview.module.css";

function RecipePreview({ recipe }) {
  const { dispatch, selectedID } = useRecipies();
  const selected = recipe.id === selectedID;

  return (
    <li onClick={() => dispatch({ type: "select/recipe", payload: recipe.id })}>
      <div className={`${styles.item} ${selected ? styles.selected : ""}`}>
        <figure className={styles.figure}>
          <img
            className={styles.img}
            src={recipe.image_url}
            alt={recipe.title}
          />
        </figure>
        <div className={styles.previewData}>
          <h4 className={styles.title}>{recipe.title}</h4>
          <p className={styles.publisher}>{recipe.publisher}</p>
        </div>
      </div>
    </li>
  );
}

export default memo(RecipePreview);
