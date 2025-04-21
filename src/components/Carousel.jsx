import styles from "./Carousel.module.scss";
import kasaCover from "../assets/kasa_cover_phone_resized.png";
import sophieCover from "../assets/sophie_bluel_small.png";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <>
      <Link to="/kasa">
      <div className={styles.card}>
        <img src={kasaCover} alt="Photo de couverture" />
        <div className={styles.card__overlay}>
          <div className={styles.card__link}>
            <span className={styles.card__titles}>
              <h3>Kasa</h3>
              <p>Agence immobilière</p>
            </span>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/sophiebluel">
      <div className={styles.card}>
        <img src={sophieCover} alt="Photo de couverture" />
        <div className={styles.card__overlay}>
          <div className={styles.card__link}>
            <span className={styles.card__titles}>
              <h3>Sophie Bluel</h3>
              <p>Site de photographe</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default Carousel;
