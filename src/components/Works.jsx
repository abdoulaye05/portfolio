import styles from "./Works.module.scss";
import Carousel from "./Carousel";

function Works() {
  return (
    <div className={styles.works__container} id="works">
      <div className={styles.works__titles}>
        <h4>projets</h4>
        <h2>Découvrez mes réalisations</h2>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel />
      </div>
    </div>
  );
}

export default Works;
