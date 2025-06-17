import React from "react";
import { Link } from "react-router-dom";
import worksData from "../datas/datas.json"; // Données de tous les projets
import Carousel from "./Carousel"; // Composant carousel personnalisé
import styles from "./WorksSection.module.scss";

export default function WorksSection() {
    // On sélectionne uniquement les projets phares
    const preview = worksData.filter(w => w.isPhare === true);

    return (
        // 💡 Important : ID utilisé pour le scroll smooth depuis le Header
        <section id="works-section" className={styles.works__container}>

            {/* Titre principal de la section */}
            <div className={styles.works__titles}>
                <h4>Projets</h4>
                <h2>Découvrez mes réalisations</h2>
            </div>

            {/* 🖼️ Zone du carousel avec preview dynamique */}
            <Carousel>
                {preview.map((w) => {
                    // ✅ On choisit la première image disponible pour l'aperçu
                    const thumb = w.pictures?.[0] || w.cover || "/fallback.png";
                    return (
                        <Link
                            key={w.id}
                            to={`/works/${w.id}`}
                            className={styles.slideLink}
                        >
                            <div className={styles.card}>
                                <img src={thumb} alt={w.title} className={styles.thumb} />
                                <div className={styles.card__overlay}>
                                    <div className={styles.card__link}>
                                        <span className={styles.card__titles}>
                                            <h3>{w.title}</h3>
                                            <p>{w.subtitle}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </Carousel>

            {/* 🔗 CTA vers la page des projets complète */}
            <div className={styles.works__ctaContainer}>
                <Link to="/works" className={styles.works__ctaButton}>
                    Voir toutes mes réalisations
                </Link>
            </div>
        </section>
    );
}
