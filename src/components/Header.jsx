import styles from "./Header.module.css";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchBar />
      <NavButtons />
    </div>
  );
}

export default Header;
