import styles from "./socials.module.scss";

function Socials() {
  return (
    <>
      <div className={styles.socialsContainer}>
        <div className={styles.socialsImgContainer}>
          <img></img>
        </div>
        <div className={styles.socialsTxtContainer}>
          <p>Join the Legion.</p>
        </div>
      </div>
    </>
  );
}

export default Socials;
