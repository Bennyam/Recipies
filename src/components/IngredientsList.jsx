import { useRecipies } from "../contexts/RecipiesContext";
import Ingredient from "./Ingredient";
import styles from "./IngredientsList.module.css";

function IngredientsList() {
  const { recipeDetails } = useRecipies();

  if (!recipeDetails.ingredients) return <h3>Loading...</h3>;

  return (
    <div className={styles.ingredients}>
      <h2 className={styles.title}>Recipe ingredients</h2>
      <ul className={styles.list}>
        {recipeDetails.ingredients.map((ing, i) => (
          <Ingredient
            ingredients={ing}
            devider={recipeDetails.servings}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
