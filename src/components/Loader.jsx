import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <p className={styles.text}>
        <span className={styles.emoji}>♨️</span>Loading...
      </p>
    </div>
  );
}

export default Loader;
