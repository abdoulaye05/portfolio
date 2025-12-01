import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [inWorksSection, setInWorksSection] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Vérifier si on est sur une page de compétences, projets ou blog
    const isCompetencePage = location.pathname.includes('/skills');
    const isWorksPage = location.pathname.includes('/works');
    // const isBlogPage = location.pathname.includes('/blog'); // Commenté temporairement
    const isSubPage = isCompetencePage || isWorksPage; // || isBlogPage - Commenté temporairement

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const worksEl = document.getElementById("works-section");
            if (worksEl) {
                const start = worksEl.offsetTop - 100;
                const end = worksEl.offsetTop + worksEl.clientHeight;
                setInWorksSection(window.scrollY >= start && window.scrollY < end);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll vers la section À propos
    const handleScrollToAbout = (e) => {
        e.preventDefault();
        if (isSubPage) {
            // Si on est sur une sous-page, naviguer vers la page d'accueil puis scroller
            navigate('/');
            setTimeout(() => {
                const aboutSection = document.getElementById("about-section");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const aboutSection = document.getElementById("about-section");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Navigation vers la page des réalisations ou scroll
    const handleScrollToWorks = (e) => {
        e.preventDefault();
        if (isSubPage) {
            // Si on est sur une sous-page, naviguer vers la page des projets
            navigate('/works');
        } else {
            const worksSection = document.getElementById("works-section");
            worksSection?.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Scroll vers la section Contact
    const handleScrollToContact = (e) => {
        e.preventDefault();
        if (isSubPage) {
            // Si on est sur une sous-page, naviguer vers la page d'accueil puis scroller
            navigate('/');
            setTimeout(() => {
                const contactSection = document.getElementById("contact-section");
                contactSection?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const contactSection = document.getElementById("contact-section");
            contactSection?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={classNames(styles.header, {
                [styles.scrolled]: isScrolled,
            })}
        >
            <nav className={styles.header__links}>
                <a onClick={handleScrollToAbout} className={styles.link}>
                    A PROPOS
                </a>

                <a
                    onClick={handleScrollToWorks}
                    className={classNames(styles.link, {
                        [styles.activeLink]: inWorksSection,
                    })}
                >
                    RÉALISATIONS
                </a>

                {/* <Link to="/blog" className={styles.link}>
                    BLOG
                </Link> */}
            </nav>

            <Link to="/" className={styles.header__names}>
                <p className={styles.header__firstName}>Abdoulaye</p>
                <p className={styles.header__lastName}>Diallo</p>
            </Link>

            <a onClick={handleScrollToContact} className={styles.header__contact}>
                Contactez-moi
            </a>
        </header>
    );
}
