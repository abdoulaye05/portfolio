import styles from "./Landing.module.scss";

import cv from "../assets/CV.pdf"

function Landing() {
  return (
    <section className={styles.landing} id="home">
      <h1 className={styles.landing__title}>
        Créons ensemble <br /> des expériences web inoubliables
      </h1>
      <div className={styles.landing__buttons}>
          <a href="#works" className={styles.landing__works}>Mes réalisations</a>
          <a href={cv} download="cv_gs" className={styles.landing__resume}>Télécharger mon CV</a>
      </div>
    </section>
  );
}

export default Landing;
