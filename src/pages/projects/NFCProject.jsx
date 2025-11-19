import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProtectedLink from "../../components/ProtectedLink";
import { GoArrowLeft } from "react-icons/go";
import styles from "./ProjectDetail.module.scss";

export default function NFCProject() {
    return (
        <>
            <Header />
            <div className={styles.projectDetailContainer}>
                <Link to="/works" className={styles.backLink}>
                    <GoArrowLeft />
                    <span>Retour aux projets</span>
                </Link>

                <div className={styles.projectHeader}>
                    <h1 className={styles.projectTitle}>Cartes NFC connectées</h1>
                    <p className={styles.projectSubtitle}>Connecter le physique au web</p>
                    <span className={styles.projectDate}>Septembre 2024</span>
                </div>

                <section className={styles.projectContent}>
                    <div className={styles.section}>
                        <h2>Contexte du besoin</h2>
                        <p>
                            Mobydev souhaitait proposer une solution innovante de cartes de visite permettant
                            à ses clients de partager leurs informations professionnelles de manière moderne et écologique.
                            L'objectif était de créer une expérience fluide, sans application à installer.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>Objectif métier</h2>
                        <p>
                            Permettre aux professionnels de partager instantanément leurs coordonnées et portfolio
                            via un simple scan NFC sur smartphone, avec un taux d'ouverture de 100% et un temps
                            d'accès inférieur à 3 secondes.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>Déroulé technique</h2>
                        <ul>
                            <li>Sélection et programmation des puces NFC NTAG216 (888 octets)</li>
                            <li>Encodage NDEF avec URL unique par carte</li>
                            <li>Développement du mini-site avec React/Vite</li>
                            <li>Optimisation mobile-first et PWA</li>
                            <li>Hébergement sur AWS S3 avec CloudFront CDN</li>
                            <li>Analytics intégrés pour tracking des scans</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>Défis rencontrés</h2>
                        <p>
                            La principale difficulté fut d'assurer la compatibilité entre iOS et Android.
                            iOS nécessitait une approche spécifique pour la lecture en arrière-plan.
                            J'ai également dû optimiser la taille des données NDEF pour maximiser
                            la vitesse de lecture tout en conservant toutes les informations nécessaires.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>Résultats</h2>
                        <div className={styles.results}>
                            <div className={styles.resultItem}>
                                <h3>⚡ 1.2s</h3>
                                <p>Temps moyen de scan</p>
                            </div>
                            <div className={styles.resultItem}>
                                <h3>📱 98%</h3>
                                <p>Taux de compatibilité</p>
                            </div>
                            <div className={styles.resultItem}>
                                <h3>🔄 85%</h3>
                                <p>Taux de conversion</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mediaSection}>
                        <h2>Médias</h2>
                        <div className={styles.mediaGrid}>
                            <div className={styles.mediaItem}>
                                <img src="/assets/nfc-card.png" alt="Carte NFC" />
                                <p>Carte NFC avec design personnalisé</p>
                            </div>
                            <div className={styles.mediaItem}>
                                <img src="/assets/nfc-site.png" alt="Mini-site" />
                                <p>Interface du mini-site responsive</p>
                            </div>
                            <div className={styles.mediaItem}>
                                <img src="/assets/nfc-diagram.png" alt="Diagramme" />
                                <p>Diagramme de séquence du scan</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.competencesSection}>
                        <h2>Compétences mobilisées</h2>
                        <div className={styles.competencesList}>
                            <ProtectedLink to="/skills/ue1" className={styles.competenceTag}>
                                C 1 – Développer une application
                            </ProtectedLink>
                            <ProtectedLink to="/skills/ue4" className={styles.competenceTag}>
                                C 4 – Gérer des données
                            </ProtectedLink>
                            <ProtectedLink to="/skills/ue6" className={styles.competenceTag}>
                                C 6 – Collaborer au sein d'une équipe informatique
                            </ProtectedLink>
                        </div>
                    </div>
                </section>

                <Link to="/works" className={styles.backLinkBottom}>
                    <GoArrowLeft />
                    <span>Retour aux projets</span>
                </Link>
            </div>
            <Footer />
        </>
    );
} 