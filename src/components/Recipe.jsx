import styles from "./Recipe.module.css";
import RecipeHead from "./RecipeHead";
import RecipeDetails from "./RecipeDetails";
import IngredientsList from "./IngredientsList";
import { memo } from "react";
import RecipeDirections from "./RecipeDirections";

function Recipe() {
  return (
    <div className={styles.recipe}>
      <RecipeHead />
      <RecipeDetails />
      <IngredientsList />
      <RecipeDirections />
    </div>
  );
}

export default memo(Recipe);
