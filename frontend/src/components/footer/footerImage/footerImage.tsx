import styles from "./footerImage.module.scss";

function FooterImage({ footerImage }: any) {
  const { source, altText } = footerImage;

  return (
    <>
      <div className={styles.footerImgContainer}>
        <img className={styles.footerImg} src={source} alt={altText}></img>
      </div>
    </>
  );
}

export default FooterImage;
