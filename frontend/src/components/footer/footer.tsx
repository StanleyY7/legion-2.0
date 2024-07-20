import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contactSectionContainer}></div>
      <div className={styles.subFooterContainer}>
        <p>We Accept: </p>
        <div className={styles.paymentMethodContainer}>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
