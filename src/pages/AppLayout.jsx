import Copyright from "../components/Copyright";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Pagination from "../components/Pagination";
import Recipe from "../components/Recipe";
import RecipeView from "../components/RecipeView";
import ResultsList from "../components/ResultsList";
import SearchResults from "../components/SearchResults";
import { useRecipies } from "../contexts/RecipiesContext";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const { isLoading1, isLoading2, error1, error2, selectedID } = useRecipies();
  return (
    <div className={styles.app}>
      <Header />
      <SearchResults>
        {!isLoading1 && error1 && (
          <Message icon={error1.icon} text={error1.text} />
        )}
        {isLoading1 && !error1 && <Loader />}
        {!isLoading1 && !error1 && <ResultsList />}
        <Pagination />
        <Copyright />
      </SearchResults>
      <RecipeView>
        {!selectedID && !error2 && (
          <Message
            icon="♨️"
            text="Start by searching for a recipe or an ingredient. Have fun!"
          />
        )}
        {error2 && <Message icon={error2.icon} text={error2.text} />}
        {isLoading2 && !error2 && <Loader />}
        {selectedID && !error2 && !isLoading2 && <Recipe />}
      </RecipeView>
    </div>
  );
}

export default AppLayout;
