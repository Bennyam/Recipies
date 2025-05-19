import styles from "./Bookmarks.module.css";
import { useRecipies } from "../contexts/RecipiesContext";
import RecipePreview from "./RecipePreview";
import Message from "./Message";

function Bookmarks() {
  const { bookmarks } = useRecipies();
  return (
    <div className="bookmarks">
      <ul className={styles.list}>
        {!bookmarks.length && (
          <Message
            icon="♨️"
            text="No bookmarks yet! Find a nice recipe and bookmark it."
          />
        )}
        {bookmarks.map((bookmark) => (
          <RecipePreview recipe={bookmark} key={bookmark.id} />
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
