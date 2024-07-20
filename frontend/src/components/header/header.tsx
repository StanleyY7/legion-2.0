import Nav from "../nav/nav";
import SearchBar from "../searchbar/searchbar";
import styles from "./header.module.scss";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.topHeader}>Free Delivery on orders $50+</div>
        <div className={styles.mainHeader}>
          <Nav></Nav>
          <SearchBar></SearchBar>
        </div>
      </div>
    </>
  );
}

export default Header;
