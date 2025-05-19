import styles from "./NavItem.module.css";

function NavItem({ btnHref, btnText, linkclass, children }) {
  return (
    <div className="navitem">
      <a href={btnHref} className={linkclass}>
        <button className="btn">{btnText}</button>
      </a>
      {children}
    </div>
  );
}

export default NavItem;
