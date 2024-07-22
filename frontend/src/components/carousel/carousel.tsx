import styles from "./carousel.module.scss";
import test from "../../assets/socialsIMG.svg";

function Carousel() {
  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTxtWrapper}>
          <p>Trending</p>
        </div>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselLeft}>
            <p>{"<"}</p>
          </div>
          <div className={styles.carouselMiddle}>
            <div className={styles.carouselItemContainer}>
              <img className={styles.carouselImg} src={test}></img>
              <p>Test Item</p>
            </div>
            <div className={styles.carouselItemContainer}>
              <img className={styles.carouselImg} src={test}></img>
              <p>Test Item</p>
            </div>
            <div className={styles.carouselItemContainer}>
              <img className={styles.carouselImg} src={test}></img>
              <p>Test Item</p>
            </div>
          </div>
          <div className={styles.carouselRight}>
            <p>{">"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
