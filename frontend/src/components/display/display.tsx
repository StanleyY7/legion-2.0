import styles from "./display.module.scss";
import test from "../../assets/displayIMG.png";

function Display() {
  return (
    <>
      <div className={styles.displayContainer}>
        <div className={styles.giftCardsContainer}>
          <div className={styles.giftCards}>
            <p>THE PERFECT GIFT.</p>
            <a href="https://google.com.au">
              <p>→ SHOP GIFT CARDS.</p>
            </a>
          </div>
        </div>
        <div className={styles.displayKitContainer}>
          <div className={styles.textContainer}>
            <a href="https://google.com.au">
              <p>PEEP THE KIT.</p>
            </a>
          </div>
          <img src={test}></img>
        </div>
      </div>
    </>
  );
}

export default Display;
