import React, { useState, useEffect } from "react";
import styles from "./About.module.scss";
import aboutPicture from "../assets/about_picture.webp";

function About() {
  const keywords = [
    "créatif",
    "passionné",
    "rigoureux",
    "innovant",
    "curieux"
  ];

  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        setFadeOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <section className={styles.about} id="about-section">
      <div className={styles.about__content}>
        <span className={styles.about__tag}>À propos</span>
        <h3 className={styles.title}>
          Développeur Full Stack <span className={`${styles.keyword} ${fadeOut ? styles.keyword__fadeOut : ""}`}>{keywords[currentKeyword]}</span>
        </h3>
        <p>
          Actuellement en BUT Informatique et alternant chez MobyDev, je me spécialise 
          dans le développement d'applications web modernes. Ma passion pour le code me 
          pousse à explorer constamment de nouvelles technologies et à relever des défis 
          techniques innovants.
        </p>
        <p>
          De React à Node.js en passant par PostgreSQL et AWS, je travaille sur l'ensemble 
          de la stack pour concevoir des solutions complètes. Mon objectif : transformer 
          des idées ambitieuses en applications concrètes et performantes.
        </p>
      </div>
      <div className={styles.about__picture}>
        <img
          src={aboutPicture}
          alt="Abdoulaye Diallo"
          className={styles.about__image}
        />
      </div>
    </section>
  );
}

export default About;

