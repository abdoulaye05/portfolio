import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [inWorksSection, setInWorksSection] = useState(false);

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
        const aboutSection = document.getElementById("about-section");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll vers la section Réalisations
    const handleScrollToWorks = (e) => {
        e.preventDefault();
        const worksSection = document.getElementById("works-section");
        worksSection?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll vers la section Contact
    const handleScrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact-section");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={classNames(styles.header, {
                [styles.scrolled]: isScrolled,
            })}
        >
            <nav className={styles.header__links}>
                <a onClick={handleScrollToAbout} className={styles.link}>
                    A propos
                </a>

                <a
                    onClick={handleScrollToWorks}
                    className={classNames(styles.link, {
                        [styles.activeLink]: inWorksSection,
                    })}
                >
                    Réalisations
                </a>
            </nav>

            <a href="/" className={styles.header__names}>
                <p className={styles.header__firstName}>Abdoulaye</p>
                <p className={styles.header__lastName}>Diallo</p>
            </a>

            <a onClick={handleScrollToContact} className={styles.header__contact}>
                Contactez-moi
            </a>
        </header>
    );
}
