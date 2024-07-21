import styles from "./nav.module.scss";

function Nav() {
  return (
    <>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navLogo}>Legion</li>
          <li>Kit</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
