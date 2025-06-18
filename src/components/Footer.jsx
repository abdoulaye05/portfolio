import styles from "./Footer.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.fadingLine}></div>
      <ul className={styles.footer__list}>
        <li>
          <Link to="/" onClick={() => {
            setTimeout(() => {
              const aboutSection = document.getElementById("about-section");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}>à propos</Link>
        </li>
        <li>
          <a href="#works">réalisations</a>
        </li>
        <li>
          <Link to="/" onClick={() => {
            setTimeout(() => {
              const contactSection = document.getElementById("contact-section");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}>contact</Link>
        </li>
      </ul>
      
      <div className={styles.fadingLine}></div>

      <div className={styles.footerBottom}>
        <p className={styles.footerBottom__date}>© 2025 Abdoulaye Diallo</p>
        <div className={styles.footerBottom__socialIcons}>
          <a
            href="https://www.linkedin.com/in/abdoulaye-kabele-diallo/"
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
