import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Landing.module.scss";
import ProtectedLink from "./ProtectedLink";

import cv from "../assets/CV.pdf"

function Landing() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToWorks = (e) => {
    e.preventDefault();
    const worksSection = document.getElementById("works-section");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={styles.landing} id="home">
        <h1 className={styles.landing__title}>
          Bienvenue <br /> dans mon portfolio
        </h1>
        <div className={styles.landing__buttons}>
            <a href="#works-section" onClick={handleScrollToWorks} className={styles.landing__works}>Mes réalisations</a>
            <ProtectedLink to="/skills" className={styles.landing__skills}>Mes compétences</ProtectedLink>
        </div>
      </section>
      <div className={styles.scrollDownContainer}>
        <button className={styles.scrollDown} onClick={handleScrollToAbout}>
          <FaChevronDown />
        </button>
      </div>
    </>
  );
}

export default Landing;
