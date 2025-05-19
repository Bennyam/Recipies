import styles from "./RecipeView.module.css";

function RecipeView({ children }) {
  return <div className={styles.recipeView}>{children}</div>;
}

export default RecipeView;
