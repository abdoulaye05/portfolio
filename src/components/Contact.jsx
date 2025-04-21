import styles from "./Contact.module.scss";
import Footer from "./Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IoRocketSharp } from "react-icons/io5";
import { db, collection, addDoc } from "./Firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
      });
      alert("Votre message a été envoyé !");
    } catch (error) {
      alert(error.message);
    }
  
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__subContainer} id="contact">
        <div className={styles.contact__leftContainer}>
          <p className={styles.contact__leftContainerTag}>contact</p>
          <h3>Et si on travaillait ensemble ?</h3>
          <p className={styles.contact__leftContainerText}>
            Construisons un web créatif, interactif et accessible !
          </p>
        </div>
        <div className={styles.contact__rightContainer}>
          <form action="/submit-form" method="post" onSubmit={handleSubmit}>
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
              <a href="mailto:sandrockgregoire@gmail.com" className={styles.emailContent}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.envelop} />
                <p className={styles.email}>sandrockgregoire@gmail.com</p>
              </a>
              <button type="submit">
                Envoyer
                <IoRocketSharp className={styles.rocket} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
