import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./RecipeHead.module.css";

function RecipeHead() {
  const { recipeDetails } = useRecipies();
  const { title, image_url } = recipeDetails;

  return (
    <figure className={styles.figure}>
      <img className={styles.img} src={image_url} alt={title} />
      <h1 className={styles.title}>
        <span className={styles.span}>{title}</span>
      </h1>
    </figure>
  );
}

export default RecipeHead;
