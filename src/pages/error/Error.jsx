import styles from "./Error.module.scss";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Error() {
  return (
    <>
      <Header />
      <div className={styles.error}>
        <div className={styles.error__content}>
          <h1 className={styles.error__title}>404</h1>
          <p className={styles.error__tag}>page introuvable</p>
          <h3 className={styles.error__text}>Oups ! Il n'y a rien ici</h3>
          <Link to="/">
            <p className={styles.error__link}>Retour à l'accueil</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
