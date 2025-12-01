import styles from "./Contact.module.scss";
import Footer from "./Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IoRocketSharp } from "react-icons/io5";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import cv from "../assets/Abdoulaye_Diallo_2024-2026.pdf";

// Animation config
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Configuration EmailJS
    const serviceID = EMAILJS_CONFIG.SERVICE_ID;
    const templateID = EMAILJS_CONFIG.TEMPLATE_ID;
    const publicKey = EMAILJS_CONFIG.PUBLIC_KEY;

    // Vérification des clés EmailJS
    if (!serviceID || !templateID || !publicKey) {
      console.error('Configuration EmailJS manquante');
      alert("Configuration EmailJS manquante. Veuillez vérifier les clés dans src/config/emailjs.js");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      console.log('Tentative d\'envoi avec EmailJS...', { serviceID, templateID, publicKey });
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('Email envoyé avec succès:', result);
      alert("Votre message a été envoyé avec succès !");
      
      // Réinitialiser le formulaire
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Erreur EmailJS détaillée:', error);
      
      // Messages d'erreur plus spécifiques
      if (error.text) {
        alert(`Erreur EmailJS: ${error.text}`);
      } else if (error.message) {
        alert(`Erreur: ${error.message}`);
      } else {
        alert("Erreur lors de l'envoi du message. Vérifiez votre configuration EmailJS.");
      }
    }
  };

  return (
      <div className={styles.contact__container}>
        {/* 👇 ID scroll cible ici */}
        <motion.div
            id="contact-section"
            className={styles.contact__subContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
        >
          <div className={styles.contact__leftContainer}>
            <p className={styles.contact__leftContainerTag}>contact</p>
            <h3>Discutons ensemble</h3>
            <p className={styles.contact__leftContainerText}>
              Construisons un web créatif, interactif et accessible !
            </p>
          </div>
          <div className={styles.contact__rightContainer}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">NOM</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message">MESSAGE</label>
                <br />
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.contact__rightContainerBottom}>
                <div className={styles.contact__leftBottom}>
                  <a href="mailto:abdoulayekabelediallo@gmail.com" className={styles.emailContent}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.envelop} />
                    <p className={styles.email}>abdoulayekabelediallo@gmail.com</p>
                  </a>
                  <div className={styles.contact__buttonsRow}>
                    <a href={cv} download="Abdoulaye_Diallo_2024-2026.pdf" className={styles.cvDownload}>
                      <FaDownload className={styles.downloadIcon} />
                      <p className={styles.cvText}>Télécharger mon CV</p>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/abdoulaye-kabele-diallo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinLink}
                    >
                      <FaLinkedin className={styles.linkedinIcon} />
                    </a>
                  </div>
                </div>
                <button type="submit">
                  Envoyer
                  <IoRocketSharp className={styles.rocket} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <Footer />
      </div>
  );
}

export default Contact;
