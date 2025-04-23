// src/pages/works/works.jsx

import { useParams, Link } from "react-router-dom";
import styles    from "./work.module.scss";
import worksData from "../../datas/datas.json";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import Header    from "../../components/Header";
import ErrorPage from "../error/Error";

export default function Works() {
    const { id } = useParams();

    // 1) Sans ID → liste de tous les projets
    if (!id) {
        return (
            <>
                <Header />
                <section className={styles.listContainer}>
                    <h1 className={styles.listTitle}>Mes réalisations</h1>
                    <ul className={styles.list}>
                        {worksData.map((w) => (
                            <li key={w.id} className={styles.listItem}>
                                <Link to={`/works/${w.id}`} className={styles.projectLink}>
                                    {w.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        );
    }

    // 2) Avec ID → détail
    const selected = worksData.find((w) => w.id === id);
    if (!selected) {
        return <ErrorPage />;
    }

    return (
        <div className={styles.workContainer}>
            <Header />

            {/* Retour à la liste en haut */}
            <Link to="/works" className={styles.work__linkBackTop}>
                <GoArrowLeft className={styles.work__linkBackArrowTop} />
                <span>Retour aux projets</span>
            </Link>

            <h6 className={styles.work__date}>{selected.date}</h6>
            <h2 className={styles.work__title}>{selected.title}</h2>
            <p className={styles.work__description}>{selected.description}</p>
            <div className={styles.work__separation} />

            {/* Descendre vers la galerie */}
            <Link to="#pictures" className={styles.work__button}>
                <FaArrowDown className={styles.work__buttonArrow} />
            </Link>

            {/* Galerie d’images */}
            <div className={styles.work__pictures} id="pictures">
                {selected.pictures.map((src, idx) => (
                    <img key={idx} src={src} alt={`Image ${idx + 1}`} />
                ))}
            </div>

            {/* Retour à la liste en bas */}
            <div className={styles.work__linkBackArrowBottomContainer}>
                <Link to="/works" className={styles.work__linkBackBottom}>
                    <GoArrowLeft className={styles.work__linkBackArrowBottom} />
                    <span>Retour aux projets</span>
                </Link>
            </div>
        </div>
    );
}
