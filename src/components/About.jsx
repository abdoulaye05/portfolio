import styles from "./About.module.scss";
import { useState, useEffect } from 'react';
import image from "../assets/about_picture.webp";

const words = ['Polyvalent', 'Ambitieux', 'Développeur', 'Créatif'];

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

    return (
        <h3
            className={`${styles.title} ${fadeOut ? styles.title__fadeOut : ""}`}
        >
            {word}
        </h3>
    );
}

export default function About() {
    return (
        <div className={styles.about} id="about-section">
            <div className={styles.about__content}>
                <h5 className={styles.about__tag}>à propos</h5>
                <Title />

                <p>
                    Je suis <strong>Aboulaye Diallo</strong>, étudiant en informatique en alternance et développeur
                    passionné chez Mobydev. Curieux et motivé, je travaille sur des projets variés allant du web au mobile.
                    J’aime transformer les idées en applications concrètes, avec une approche rigoureuse et innovante.
                </p>2
            </div>
            <div className={styles.about__picture}>
                <img
                    className={styles.about__image}
                    src={image}
                    alt="Aboulaye Diallo devant un paysage inspirant"
                />
            </div>
        </div>
    );
}
