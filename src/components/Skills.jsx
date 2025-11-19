import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PasswordProtection from "./PasswordProtection";
import { FaCode, FaTachometerAlt, FaServer, FaDatabase, FaTasks, FaUsers } from "react-icons/fa";
import styles from "./Skills.module.scss";

const ueData = [
  { 
    id: "ue1", 
    title: "C 1 – Développer une application", 
    description: "Construire des applications web modernes et maintenables.",
    icon: <FaCode />,
    traces: 9,
    focus: true 
  },
  { 
    id: "ue2", 
    title: "C 2 – Optimiser des applications", 
    description: "Améliorer performances et expérience utilisateur.",
    icon: <FaTachometerAlt />,
    traces: 4
  },
  { 
    id: "ue3", 
    title: "C 3 – Administrer des systèmes communicants complexes", 
    description: "Gérer et sécuriser des infrastructures réseau.",
    icon: <FaServer />,
    traces: 4
  },
  { 
    id: "ue4", 
    title: "C 4 – Gérer des données de l'information", 
    description: "Concevoir et optimiser les bases de données.",
    icon: <FaDatabase />,
    traces: 9,
    focus: true
  },
  { 
    id: "ue5", 
    title: "C 5 – Conduire un projet", 
    description: "Planifier et coordonner des projets informatiques.",
    icon: <FaTasks />,
    traces: 3
  },
  { 
    id: "ue6", 
    title: "C 6 – Collaborer au sein d'une équipe informatique", 
    description: "Travailler efficacement en équipe de développement.",
    icon: <FaUsers />,
    traces: 5
  }
];

export default function Skills() {
  return (
    <PasswordProtection correctPassword="competences2024">
      <Header />
      <section className={styles.skills} id="skills-section">
        <div className={styles.skills__container}>
          <div className={styles.skills__grid}>
            {ueData.map((ue) => (
              <Link 
                key={ue.id} 
                to={`/skills/${ue.id}`} 
                className={styles.skills__card}
              >
                {ue.focus && (
                  <div className={styles.skills__badge}>Focus</div>
                )}
                
                <div className={styles.skills__icon}>
                  {ue.icon}
                </div>
                
                <h3 className={styles.skills__title}>{ue.title}</h3>
                <p className={styles.skills__description}>{ue.description}</p>
                
                <div className={styles.skills__traces}>
                  <span className={styles.skills__dot}>•</span>
                  <span className={styles.skills__count}>
                    {ue.traces} trace{ue.traces > 1 ? 's' : ''}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PasswordProtection>
  );
} 