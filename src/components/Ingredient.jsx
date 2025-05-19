import fracty from "fracty";
import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./Ingredient.module.css";

function Ingredient({ ingredients, devider }) {
  const { servings } = useRecipies();
  const { quantity, unit, description } = ingredients;

  console.log(quantity, unit, description, devider);

  return (
    <li className={styles.ingredient}>
      <span className={styles.icon}>&#10003;</span>
      <span className={styles.quantity}>
        {quantity > 0 && fracty((quantity / devider) * servings)}
      </span>
      <div className={styles.descriptionContainer}>
        <span className={styles.unit}>{unit}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </li>
  );
}

export default Ingredient;
