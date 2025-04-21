import styles from "../kasa/Kasa.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import image from "../../assets/kasa_cover_desktop.png";
import image2 from "../../assets/kasa_accomodation_1.png";
import image3 from "../../assets/kasa_accomodation_2.png";
import image4 from "../../assets/kasa_about.png";
import image5 from "../../assets/kasa_error.png";
import { useRef } from "react";

function Kasa() {
  const picturesRef = useRef(null);

  const scrollToPictures = (e) => {
    e.preventDefault();
    picturesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.workContainer}>
      {/* Fond d'écran avec overlay */}
      <div className={styles.work__background}>
        <img src={image} alt="Background" />
        <div className={styles.work__background__overlay}></div>
      </div>

      <div className={styles.work}>
        <Header />
        <span className={styles.illegalSpan}></span>
        <Link to="/#works" className={styles.work__linkBackTop}>
          <GoArrowLeft className={styles.work__linkBackArrowTop} />
          <p>Retour</p>
        </Link>
        <h6 className={styles.work__date}>avril 2024</h6>
        <h2 className={styles.work__title}>Kasa</h2>
        <p className={styles.work__description}>
        Navigation du projet configurée avec <span className={styles.description__strong}>React Router</span>. Les routes sont gérées dans un fichier dédié. Une page 404 est implémentée pour les URL invalides. <span className={styles.description__strong}>Affichage dynamique</span> des détails en fonction de l'ID dans l'URL. Logique de <span className={styles.description__strong}>composants React réutilisables</span> (Collapse et Gallery). Utilisation des <span className={styles.description__strong}>props et hooks</span> (useState et useEffect). Récupération et manipulation des données depuis un fichier JSON. Utilisation de <span className={styles.description__strong}>Sass et réalisation d'animations</span> pour des éléments spécifiques (Collapse).
        </p>
        <div className={styles.work__separation}></div>
        <button onClick={scrollToPictures} className={styles.work__button}>
          <FaArrowDown className={styles.work__buttonArrow} />
        </button>
        <br />
        <div ref={picturesRef} className={styles.work__pictures} id="pictures">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </div>
      <div className={styles.work__linkBackArrowBottomContainer}>
        <Link to="/" className={styles.work__linkBackBottom}>
          <GoArrowLeft className={styles.work__linkBackArrowBottom} />
          <p>Retour</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Kasa;
