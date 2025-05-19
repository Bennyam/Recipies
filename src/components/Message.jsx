import styles from "./Message.module.css";

function Message({ icon, text }) {
  return (
    <div className={styles.message}>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Message;
