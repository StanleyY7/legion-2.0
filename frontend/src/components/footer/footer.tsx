import amexImg from "../../assets/paymentMethods/amex.svg";
import appleImg from "../../assets/paymentMethods/apple.svg";
import giftcardImg from "../../assets/paymentMethods/gift-card.svg";
import googleImg from "../../assets/paymentMethods/google-pay.svg";
import klarnaImg from "../../assets/paymentMethods/klarna.svg";
import mastercardImg from "../../assets/paymentMethods/mastercard.svg";
import paypalImg from "../../assets/paymentMethods/paypal.svg";
import stripeImg from "../../assets/paymentMethods/stripe.svg";
import visaImg from "../../assets/paymentMethods/visa.svg";

import FooterImage from "./footerImage/footerImage";
import styles from "./footer.module.scss";

export type FooterImageType = {
  id: string;
  source: string;
  altText: string;
};

function Footer() {
  const footerImages = [
    { id: "1", source: visaImg, altText: "Visa" },
    { id: "2", source: mastercardImg, altText: "MasterCard" },
    { id: "3", source: amexImg, altText: "Amex" },
    { id: "4", source: stripeImg, altText: "Stripe" },
    { id: "5", source: paypalImg, altText: "Paypal" },
    { id: "6", source: giftcardImg, altText: "Gift" },
    { id: "7", source: appleImg, altText: "Apple" },
    { id: "8", source: googleImg, altText: "Google" },
    { id: "9", source: klarnaImg, altText: "Klarna" },
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
