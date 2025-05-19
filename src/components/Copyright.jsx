import styles from "./Copyright.module.css";

function Copyright() {
  return (
    <p className={styles.copyright}>
      &copy; Copyright by Ben Ameryckx. Built in React as a learning project
      based on the Forkify app by{" "}
      <a className={styles.link} href="https://github.com/jonasschmedtmann">
        Jonas Schmedtmann
      </a>
      .
    </p>
  );
}

export default Copyright;
