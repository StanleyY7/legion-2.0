import styles from "./footer.module.scss";
import FooterImage from "./footerImage/footerImage";

export type FooterImageType = {
  id: string;
  source: string;
  altText: string;
};

function Footer() {
  const footerImages = [
    { id: "1", source: "", altText: "Visa" },
    { id: "2", source: "", altText: "MasterCard" },
    { id: "3", source: "", altText: "Amex" },
    { id: "4", source: "", altText: "Paypal" },
    { id: "5", source: "", altText: "Paypal" },
    { id: "6", source: "", altText: "Paypal" },
    { id: "7", source: "", altText: "Paypal" },
    { id: "8", source: "", altText: "Paypal" },
    { id: "9", source: "", altText: "Paypal" },
  ];
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contactSectionContainer}>
        <div className={styles.footerLinksContainer}>
          <div>
            <p>Need Help?</p>
            <ul>
              <li>
                <a href="https://google.com.au">Size Guide</a>
              </li>
              <li>
                <a href="https://google.com.au">Return Policy</a>
              </li>
              <li>
                <a href="https://google.com.au">Refund Policy</a>
              </li>
              <li>
                <a href="https://google.com.au">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Explore</p>
            <ul>
              <li>
                <a href="https://google.com.au">Our Brands</a>
              </li>
              <li>
                <a href="https://google.com.au">Charity</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Contact Us</p>
            <ul>
              <li>
                <a href="https://google.com.au">LinkedIn</a>
              </li>
              <li>
                <a href="https://google.com.au">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLogoContainer}></div>
      </div>
      <div className={styles.subFooterContainer}>
        <p className={styles.subFooterTxtMain}>We Accept: </p>
        <p className={styles.subFooterTxtAlt}>Payments Accepted: HERE 😎</p>
        <div className={styles.paymentMethodContainer}>
          {footerImages.map((footerImage: FooterImageType) => {
            return (
              <>
                <FooterImage
                  key={footerImage.id}
                  footerImage={footerImage}
                ></FooterImage>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
