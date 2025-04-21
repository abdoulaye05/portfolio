import styles from "../sophie/Sophie.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import image from "../../assets/sophie_large.png";
import image2 from "../../assets/sophie_page1.png";
import image3 from "../../assets/sophie_page2.png";
import image4 from "../../assets/sophie_page3.png";
import image5 from "../../assets/sophie_page4.png";
import { useRef } from "react";

function Sophie() {
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
        <h6 className={styles.work__date}>mars 2024</h6>
        <h2 className={styles.work__title}>Sophie Bluel</h2>
        <p className={styles.work__description}>
        Gestion des interactions utilisateur et <span className={styles.description__strong}>manipulation du DOM</span> avec JavaScript. Le projet comprend le <span className={styles.description__strong}>filtrage des travaux en fonction de la sélection, sans rechargement de page</span>, et l'affichage de tous les projets via l'onglet 'Tous'. Les événements de la souris sont ajoutés en JavaScript. La manipulation du DOM inclut la récupération des travaux de l'architecte depuis l'API, ainsi que la possibilité de <span className={styles.description__strong}>supprimer et d'ajouter des travaux pour les utilisateurs connectés</span>, sans rechargement de page. La <span className={styles.description__strong}>gestion des formulaires et des données utilisateurs</span> est également mise en œuvre. Le formulaire de connexion permet d'accéder à l'interface d'administration du site, avec un message d'erreur en cas de saisie incorrecte. Le formulaire d'ajout de nouveau travail fonctionne de manière <span className={styles.description__strong}>asynchrone</span> et nécessite que toutes les informations soient renseignées pour être validé.
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

export default Sophie;
