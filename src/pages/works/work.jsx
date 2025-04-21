import { useParams, Link } from "react-router-dom";
import styles from "./work.module.scss";
import works from "../../datas/datas.json";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import image from "../../assets/kasa_cover_desktop.png";
import image2 from "../../assets/kasa_accomodation_1.png";
import image3 from "../../assets/kasa_accomodation_2.png";
import image4 from "../../assets/kasa_about.png";
import image5 from "../../assets/kasa_error.png";
import image6 from "../../assets/kasa_cover_phone_resized.png"

import Header from "../../components/Header";
//import Footer from "../../components/Footer";
import ErrorPage from "../../pages/error/Error";

function Work() {
  const { id } = useParams();

  // Filtre les données pour obtenir uniquement le projet avec l'ID spécifié
  const selectedWork = works.find((w) => w.id === id);
  if (!selectedWork) {
    return <ErrorPage />;
  }


  return (
    <div className={styles.workContainer}>
      
      {/* Fond d'écran avec overlay */}
      {/* <div className={styles.work__background}>
        <img src={image} alt="Background" />
        <div className={styles.work__background__overlay}></div>
      </div> */}

      <div className={styles.work}>
        <Header />
        <span className={styles.illegalSpan}></span>
        <Link to="/#works" className={styles.work__linkBackTop}>
          <GoArrowLeft className={styles.work__linkBackArrowTop} />
          <p>Retour aux projets</p>
        </Link>
        <h6 className={styles.work__date}>{selectedWork.date}</h6>
        <h2 className={styles.work__title}>{selectedWork.title}</h2>
        <p className={styles.work__description}>
        {selectedWork.description}
        </p>
        <div className={styles.work__separation}></div>
        <Link className={styles.work__button} to="#pictures">
          <FaArrowDown className={styles.work__buttonArrow} />
        </Link>
        <br />
        <div className={styles.work__pictures} id="pictures">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </div>
      <div className={styles.work__linkBackArrowBottomContainer}>
        <Link to="/" className={styles.work__linkBackBottom}>
          <GoArrowLeft className={styles.work__linkBackArrowBottom} />
          <p>Retour aux projets</p>
        </Link>
      </div>
    </div>
  );
}

export default Work;
