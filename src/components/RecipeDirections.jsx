import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./RecipeDirections.module.css";

function RecipeDirections() {
  const { recipeDetails } = useRecipies();

  return (
    <div className={styles.directions}>
      <h2 className={styles.title}>How to cook it</h2>
      <p className={styles.text}>
        Yhis recipe was carefully designed and tested by{" "}
        <strong>{recipeDetails.publisher}</strong>. Please check out directions
        at their website.
      </p>
      <a className={styles.link} href={recipeDetails.source_url}>
        Directions &rarr;
      </a>
    </div>
  );
}

export default RecipeDirections;
