import styles from "./footerImage.module.scss";

function FooterImage({ footerImage }: any) {
  return (
    <>
      <img
        className={styles.footerImg}
        src={footerImage.source}
        alt={footerImage.altText}
      ></img>
    </>
  );
}

export default FooterImage;
