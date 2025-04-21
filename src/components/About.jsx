import styles from "./About.module.scss";
import { useState, useEffect } from 'react';
import image from "../assets/about_picture.webp"


const words = ['Globetrotter', 'Créatif', 'Développeur', 'Coffeeholic'];

function Title() {
  const [word, setWord] = useState(words[0]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setWord(words[(words.indexOf(word) + 1) % words.length]);
        setFadeOut(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [word]);

  return <h3 className={`${styles.title} ${fadeOut ? styles.title__fadeOut : ''}`}>{word}</h3>;
}

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__content}>
        <h5 className={styles.about__tag}>à propos</h5>
        <h3><Title /></h3>
        <p>
        Je suis Grégoire, développeur front-end spécialisé dans la création de sites web modernes et accessibles. Mon expertise technique, couplée à un réel enthousiasme pour l'innovation, fait de moi un atout précieux pour tout projet web ambitieux. Dans ce domaine en constante évolution, ma capacité d'adaptation et ma curiosité me permettent de rester à la pointe des dernières tendances et technologies. 
        </p>
      </div>
      <div className={styles.about__picture}>
        <img
          className={styles.about__image}
          src={image}
          alt="Myself, admiring the Dolomites in Italy"
        />
      </div>
    </div>
  );
}

export default About;
