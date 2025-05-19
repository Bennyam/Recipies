import { useRecipies } from "../contexts/RecipiesContext";
import RecipePreview from "./RecipePreview";
import styles from "./ResultsList.module.css";

function ResultsList() {
  const { recipies, resultsPerPage, curPage } = useRecipies();
  return (
    <ul className={styles.list}>
      {recipies
        .slice((curPage - 1) * resultsPerPage, curPage * resultsPerPage)
        .map((recipe) => (
          <RecipePreview recipe={recipe} key={recipe.id} />
        ))}
    </ul>
  );
}

export default ResultsList;
