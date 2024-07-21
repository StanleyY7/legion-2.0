import styles from "./socials.module.scss";

function Socials() {
  return (
    <>
      <div className={styles.socialsContainer}>
        <div className={styles.socialsImgContainer}></div>
        <div className={styles.socialsTxtContainer}>
          <a href="https://www.instagram.com/" target="_blank">
            <p>Join the Legion.</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Socials;
