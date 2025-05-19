import Bookmarks from "./Bookmarks";
import styles from "./NavButtons.module.css";
import NavItem from "./NavItem";

function NavButtons() {
  return (
    <div className={styles.navBtns}>
      <NavItem
        btnText="Forkify owner"
        btnHref="https://github.com/jonasschmedtmann"
      />
      <NavItem btnText="Bookmarks" linkclass="link-bookmarks">
        <Bookmarks />
      </NavItem>
    </div>
  );
}

export default NavButtons;
