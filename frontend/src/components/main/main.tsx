import Carousel from "../carousel/carousel";
import Display from "../display/display";
import Showcase from "../showcase/showcase";
import Socials from "../socials/socials";
import styles from "./main.module.scss";

function Main() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Showcase></Showcase>
        <Display></Display>
        <Socials></Socials>
        <Carousel></Carousel>
      </div>
    </>
  );
}

export default Main;
