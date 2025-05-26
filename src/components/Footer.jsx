import styles from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.fadingLine}></div>
      <ul className={styles.footer__list}>
        <li>
          <a href="#about">à propos</a>
        </li>
        <li>
          <a href="#works">réalisations</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      
      <div className={styles.fadingLine}></div>

      <div className={styles.footerBottom}>
        <p className={styles.footerBottom__date}>© 2025 Abdoulaye Diallo</p>
        <div className={styles.footerBottom__socialIcons}>
          <a
            href="https://github.com/GregoireSand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.footerBottom__icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/gregoire-sandrock/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.footerBottom__icon} />
          </a>
        </div>
        <div className={styles.footerBottom__emptyLayout}></div>
      </div>
    </div>
  );
}

export default Footer;
