import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./work.module.scss";
import worksData from "../../datas/datas.json";
import { GoArrowLeft } from "react-icons/go";
import { 
    FaCode, FaProjectDiagram, FaDatabase, FaChartLine, FaTasks, FaUsers,
    FaRocket, FaClock, FaCheckCircle, FaLightbulb, FaCog, FaHeart,
    FaGithub, FaExternalLinkAlt, FaTrophy, FaTools, FaPlay, FaCheck,
    FaArrowRight, FaHistory, FaCamera
} from "react-icons/fa";
import Header from "../../components/Header";
import ErrorPage from "../error/Error";
import ImageCarousel from "../../components/ImageCarousel";

// Mapping des UE vers leurs détails
const ueDetails = {
    "ue1": {
        title: "UE 1 – Développer une application",
        icon: <FaCode />,
        description: "Compétences en développement d'applications web modernes",
        color: "#4F46E5"
    },
    "ue2": {
        title: "UE 2 – Optimiser des applications", 
        icon: <FaChartLine />,
        description: "Optimisation des performances et de l'expérience utilisateur",
        color: "#059669"
    },
    "ue3": {
        title: "UE 3 – Administrer des systèmes communicants",
        icon: <FaDatabase />,
        description: "Gestion et sécurisation des infrastructures",
        color: "#DC2626"
    },
    "ue4": {
        title: "UE 4 – Gérer des données de l'information",
        icon: <FaDatabase />,
        description: "Modélisation et exploitation des données",
        color: "#7C3AED"
    },
    "ue5": {
        title: "UE 5 – Conduire un projet",
        icon: <FaTasks />,
        description: "Pilotage de projets informatiques",
        color: "#EA580C"
    },
    "ue6": {
        title: "UE 6 – Collaborer au sein d'une équipe",
        icon: <FaUsers />,
        description: "Travail en équipe et collaboration",
        color: "#0891B2"
    }
};

// Fonction pour obtenir l'icône et la couleur du statut
const getStatusInfo = (status) => {
    switch (status) {
        case "En production":
            return { icon: <FaPlay />, color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)" };
        case "Terminé":
            return { icon: <FaCheck />, color: "#6b7280", bgColor: "rgba(107, 114, 128, 0.1)" };
        default:
            return { icon: <FaClock />, color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)" };
    }
};

// Données des traces par projet et UE
const projectTraces = {
    "nfc-connectees": {
        "ue1": [
            {
                type: "code",
                title: "Composant React CardForm",
                description: "Formulaire de création de cartes avec React Hook Form",
                content: `// CardForm.jsx
import { useForm } from 'react-hook-form';

export default function CardForm({ onSubmit }) {
  const { register, handleSubmit, watch } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} />
      <input {...register('company')} />
      <button type="submit">Créer</button>
    </form>
  );
}`
            }
        ],
        "ue4": [
            {
                type: "diagram",
                title: "Modèle de données NFC",
                description: "Structure de la base de données pour les cartes NFC",
                content: "Schéma relationnel avec tables users, cards, scans"
            }
        ],
        "ue6": [
            {
                type: "process",
                title: "Workflow collaboratif",
                description: "Organisation du travail en équipe avec Git Flow",
                content: "Branches feature, code reviews, intégration continue"
            }
        ]
    },
    "app-interne-mobydev": {
        "ue1": [
            {
                type: "code",
                title: "API Routes Express",
                description: "Routes CRUD pour la gestion des projets",
                content: `// projectRoutes.js
router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);`
            }
        ],
        "ue4": [
            {
                type: "database",
                title: "Schéma PostgreSQL",
                description: "Base de données relationnelle optimisée",
                content: "Tables projects, users, tasks avec relations et index"
            }
        ],
        "ue5": [
            {
                type: "planning",
                title: "Gestion de projet Agile",
                description: "Sprints de 2 semaines avec Scrum",
                content: "Backlog, user stories, burndown charts"
            }
        ],
        "ue6": [
            {
                type: "collaboration",
                title: "Code Reviews",
                description: "Processus de révision de code en équipe",
                content: "Pull requests, feedback constructif, standards"
            }
        ]
    },
    "mousow": {
        "ue4": [
            {
                type: "database",
                title: "MCD dénormalisé",
                description: "Modèle conceptuel optimisé pour les performances",
                content: "Entités Product, Client, Order avec dénormalisation"
            }
        ],
        "ue1": [
            {
                type: "code",
                title: "Interface CRUD",
                description: "Interface de gestion des produits",
                content: "Formulaires React avec validation et API calls"
            }
        ]
    },
    "mobydev-v1": {
        "ue1": [
            {
                type: "code",
                title: "Site responsive",
                description: "HTML/CSS/JS vanilla optimisé",
                content: "Structure sémantique, CSS Grid, animations"
            }
        ]
    },
    "mobydev-v2": {
        "ue2": [
            {
                type: "optimization",
                title: "Migration vers Next.js",
                description: "Amélioration des performances et du SEO",
                content: "SSR, optimisation images, Core Web Vitals"
            }
        ]
    }
};

export default function Works() {
    const { id } = useParams();
    const location = useLocation();
    const [highlightedUE, setHighlightedUE] = useState(null);
    
    // États pour les filtres
    const [filterType, setFilterType] = useState('');
    const [filterProject, setFilterProject] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(worksData);

    // Détecter l'UE à mettre en avant depuis le hash
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash && ueDetails[hash]) {
            setHighlightedUE(hash);
            setTimeout(() => {
                const element = document.getElementById(`ue-section-${hash}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location.hash]);

    // Effet pour filtrer les projets
    useEffect(() => {
        let filtered = worksData;

        if (filterType) {
            if (filterType === 'phare') {
                filtered = filtered.filter(project => project.isPhare);
            } else if (filterType === 'recent') {
                filtered = filtered.filter(project => project.status === 'En production');
            } else if (filterType === 'completed') {
                filtered = filtered.filter(project => project.status === 'Terminé');
            }
        }

        if (filterProject) {
            filtered = filtered.filter(project => 
                project.title.toLowerCase().includes(filterProject.toLowerCase()) ||
                project.subtitle.toLowerCase().includes(filterProject.toLowerCase()) ||
                project.technologies.some(tech => 
                    tech.toLowerCase().includes(filterProject.toLowerCase())
                )
            );
        }

        setFilteredProjects(filtered);
    }, [filterType, filterProject]);

    // Fonction pour réinitialiser les filtres
    const resetFilters = () => {
        setFilterType('');
        setFilterProject('');
    };

    if (!id) {
        return (
            <>
                <Header />
                <section className={styles.projectsContainer}>
                    <div className={styles.projectsHeader}>
                        <h1 className={styles.projectsTitle}>Mes Réalisations</h1>
                        <p className={styles.projectsSubtitle}>
                            Découvrez mes projets les plus significatifs, des solutions innovantes 
                            développées avec passion et apprentissage technique.
                        </p>
                    </div>

                    {/* Filtres */}
                    <div className={styles.filtersContainer}>
                        <div className={styles.filterGroup}>
                            <label htmlFor="typeFilter" className={styles.filterLabel}>Type :</label>
                            <select 
                                id="typeFilter"
                                value={filterType} 
                                onChange={(e) => setFilterType(e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="">Tous les projets</option>
                                <option value="phare">Projets phares</option>
                                <option value="recent">En production</option>
                                <option value="completed">Terminés</option>
                            </select>
                        </div>

                        <div className={styles.filterGroup}>
                            <label htmlFor="projectFilter" className={styles.filterLabel}>Recherche :</label>
                            <input
                                id="projectFilter"
                                type="text"
                                value={filterProject}
                                onChange={(e) => setFilterProject(e.target.value)}
                                placeholder="Nom, description, technologie..."
                                className={styles.filterInput}
                            />
                        </div>

                        {(filterType || filterProject) && (
                            <button 
                                onClick={resetFilters} 
                                className={styles.resetButton}
                            >
                                Réinitialiser
                            </button>
                        )}

                        <div className={styles.filterInfo}>
                            <span>{filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}</span>
                            {(filterType || filterProject) && (
                                <span className={styles.filterActive}>• Filtres actifs</span>
                            )}
                        </div>
                    </div>
                    
                    <div className={styles.projectsGrid}>
                        {filteredProjects.map((project) => {
                            const statusInfo = getStatusInfo(project.status);
                            
                            return (
                                <div key={project.id} className={styles.projectCard}>
                                    {project.isPhare && (
                                        <div className={styles.phareBadge}>
                                            <FaTrophy /> Projet Phare
                                        </div>
                                    )}
                                    
                                    <div className={styles.projectImageContainer}>
                                        <img 
                                            src={project.cover} 
                                            alt={project.title} 
                                            className={styles.projectImage}
                                        />
                                        <div className={styles.projectOverlay}>
                                            <div className={styles.techStack}>
                                                {project.technologies?.slice(0, 3).map((tech, idx) => (
                                                    <span key={idx} className={styles.techBadge}>{tech}</span>
                                                ))}
                                                {project.technologies?.length > 3 && (
                                                    <span className={styles.techMore}>+{project.technologies.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.projectContent}>
                                        <div className={styles.projectMeta}>
                                            <span className={styles.projectDate}>{project.date}</span>
                                            <div className={styles.projectStatus} style={{ 
                                                color: statusInfo.color, 
                                                backgroundColor: statusInfo.bgColor 
                                            }}>
                                                {statusInfo.icon}
                                                <span>{project.status}</span>
                                            </div>
                                        </div>

                                        <div className={styles.competenceBadges}>
                                            {project.competences.map((comp, idx) => {
                                                const ueNumber = comp.match(/UE (\d)/)?.[1];
                                                const ueKey = `ue${ueNumber}`;
                                                const ueInfo = ueDetails[ueKey];
                                                return (
                                                    <span 
                                                        key={idx} 
                                                        className={styles.competenceBadge}
                                                        style={{ backgroundColor: ueInfo?.color }}
                                                    >
                                                        {comp}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectSubtitle}>{project.subtitle}</p>
                                        
                                        {project.metrics && (
                                            <div className={styles.projectMetrics}>
                                                {Object.entries(project.metrics).slice(0, 2).map(([key, value], idx) => (
                                                    <div key={idx} className={styles.metric}>
                                                        <span className={styles.metricValue}>{value}</span>
                                                        <span className={styles.metricLabel}>{key}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <Link to={`/works/${project.id}`} className={styles.projectLink}>
                                            <span>Découvrir le projet</span>
                                            <FaExternalLinkAlt />
                                    </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </>
        );
    }

    const selected = worksData.find((w) => w.id === id);

    if (!selected) {
        return <ErrorPage />;
    }

    const statusInfo = getStatusInfo(selected.status);

    return (
        <div className={styles.workContainer}>
            <Header />

            {/* Navigation retour */}
            <Link to="/works" className={styles.backLink}>
                <GoArrowLeft />
                <span>Retour aux projets</span>
            </Link>

            {/* En-tête du projet */}
            <section className={styles.projectHero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroMeta}>
                        <span className={styles.heroDate}>{selected.date}</span>
                        <div className={styles.heroStatus} style={{ 
                            color: statusInfo.color, 
                            backgroundColor: statusInfo.bgColor 
                        }}>
                            {statusInfo.icon}
                            <span>{selected.status}</span>
                        </div>
                        {selected.isPhare && (
                            <span className={styles.heroPhare}>
                                <FaTrophy /> Projet Phare
                            </span>
                        )}
                    </div>
                    
                    <h1 className={styles.heroTitle}>{selected.title}</h1>
                    <p className={styles.heroSubtitle}>{selected.subtitle}</p>
                    <p className={styles.heroDescription}>{selected.description}</p>
                    
                    {/* Description détaillée */}
                    {selected.detailedDescription && (
                        <div className={styles.detailedDescription}>
                            <p>{selected.detailedDescription}</p>
                        </div>
                    )}

                    {/* Technologies */}
                    <div className={styles.heroTechnologies}>
                        <h4>Technologies utilisées</h4>
                        <div className={styles.techGrid}>
                            {selected.technologies?.map((tech, idx) => (
                                <span key={idx} className={styles.techItem}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {selected.cover && (
                    <div className={styles.heroImage}>
                        <img src={selected.cover} alt={selected.title} />
                    </div>
                )}
            </section>

            {/* Évolution du projet (pour les projets avec versions) */}
            {selected.evolution && (
                <section className={styles.evolutionSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaHistory /> Évolution du projet
                    </h2>
                    <div className={styles.evolutionTimeline}>
                        <div className={styles.evolutionStep}>
                            <div className={styles.evolutionIcon}>V1</div>
                            <div className={styles.evolutionContent}>
                                <h3>Version 1 - {selected.evolution.v1.period}</h3>
                                <p className={styles.evolutionFocus}>{selected.evolution.v1.focus}</p>
                                <div className={styles.evolutionTech}>
                                    {selected.evolution.v1.tech.map((tech, idx) => (
                                        <span key={idx} className={styles.evolutionTechItem}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.evolutionArrow}>
                            <FaArrowRight />
                        </div>
                        
                        <div className={styles.evolutionStep}>
                            <div className={styles.evolutionIcon}>V2</div>
                            <div className={styles.evolutionContent}>
                                <h3>Version 2 - {selected.evolution.v2.period}</h3>
                                <p className={styles.evolutionFocus}>{selected.evolution.v2.focus}</p>
                                <div className={styles.evolutionTech}>
                                    {selected.evolution.v2.tech.map((tech, idx) => (
                                        <span key={idx} className={styles.evolutionTechItem}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Spécifications techniques */}
            {selected.technicalSpecs && (
                <section className={styles.technicalSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaCog /> Spécifications techniques
                    </h2>
                    <div className={styles.technicalGrid}>
                        {Object.entries(selected.technicalSpecs).map(([key, value], idx) => (
                            <div key={idx} className={styles.technicalCard}>
                                <div className={styles.technicalLabel}>{key}</div>
                                <div className={styles.technicalValue}>{value}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Métriques clés */}
            {selected.metrics && (
                <section className={styles.metricsSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaChartLine /> Métriques & Performance
                    </h2>
                    <div className={styles.metricsGrid}>
                        {Object.entries(selected.metrics).map(([key, value], idx) => (
                            <div key={idx} className={styles.metricCard}>
                                <div className={styles.metricValue}>{value}</div>
                                <div className={styles.metricLabel}>{key}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Défis & Solutions */}
            {selected.challenges && (
                <section className={styles.challengesSection}>
                    <div className={styles.challengesGrid}>
                        <div className={styles.challengesColumn}>
                            <h2 className={styles.columnTitle}>
                                <FaRocket /> Défis relevés
                            </h2>
                            <ul className={styles.challengesList}>
                                {selected.challenges.map((challenge, idx) => (
                                    <li key={idx} className={styles.challengeItem}>
                                        <FaClock />
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.resultsColumn}>
                            <h2 className={styles.columnTitle}>
                                <FaCheckCircle /> Résultats obtenus
                            </h2>
                            <ul className={styles.resultsList}>
                                {selected.results?.map((result, idx) => (
                                    <li key={idx} className={styles.resultItem}>
                                        <FaTrophy />
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* Apprentissages */}
            {selected.learnings && (
                <section className={styles.learningsSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaLightbulb /> Apprentissages & Compétences
                    </h2>
                    <div className={styles.learningsGrid}>
                        <div className={styles.learningCard}>
                            <div className={styles.learningIcon}>
                                <FaLightbulb />
                            </div>
                            <h3>Savoir</h3>
                            <p>{selected.learnings.savoir}</p>
                        </div>
                        
                        <div className={styles.learningCard}>
                            <div className={styles.learningIcon}>
                                <FaCog />
                            </div>
                            <h3>Savoir-faire</h3>
                            <p>{selected.learnings.savoirFaire}</p>
                        </div>
                        
                        <div className={styles.learningCard}>
                            <div className={styles.learningIcon}>
                                <FaHeart />
                            </div>
                            <h3>Savoir-être</h3>
                            <p>{selected.learnings.savoirEtre}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Compétences UE */}
            {selected.competences && (
                <section className={styles.competencesSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaTools /> Compétences mobilisées
                    </h2>
                    <div className={styles.competencesGrid}>
                        {selected.competences.map((comp, idx) => {
                            const ueNumber = comp.match(/UE (\d)/)?.[1];
                            const ueKey = `ue${ueNumber}`;
                            const ueInfo = ueDetails[ueKey];
                            // Pas de traces spécifiques pour le moment
                            const isHighlighted = highlightedUE === ueKey;

                            if (!ueInfo) return null;

                            return (
                                <div 
                                    key={idx} 
                                    className={`${styles.competenceCard} ${isHighlighted ? styles.highlighted : ''}`}
                                    style={{ borderColor: ueInfo.color }}
                                >
                                    <div 
                                        className={styles.competenceIcon}
                                        style={{ backgroundColor: ueInfo.color }}
                                    >
                                        {ueInfo.icon}
                                    </div>
                                    <div className={styles.competenceContent}>
                                        <h3>{ueInfo.title}</h3>
                                        <p>{ueInfo.description}</p>
                                        <Link 
                                            to={`/skills/${ueKey}`}
                                            className={styles.competenceLink}
                                            style={{ color: ueInfo.color }}
                                        >
                                            Voir les détails →
            </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Galerie d'images avec carousel */}
            {selected.pictures && selected.pictures.length > 0 && (
                <section className={styles.gallerySection}>
                    <h2 className={styles.sectionTitle}>
                        <FaCamera /> Captures & Visuels
                    </h2>
                    <ImageCarousel images={selected.pictures} autoPlay={true} interval={5000} />
                </section>
            )}

            {/* Navigation vers autres projets */}
            <section className={styles.navigationSection}>
                <h2 className={styles.sectionTitle}>Autres projets</h2>
                <div className={styles.otherProjects}>
                    {worksData
                        .filter(project => project.id !== selected.id)
                        .slice(0, 3)
                        .map((project) => {
                            const projectStatusInfo = getStatusInfo(project.status);
                            return (
                                <Link 
                                    key={project.id} 
                                    to={`/works/${project.id}`}
                                    className={styles.otherProjectCard}
                                >
                                    <img src={project.cover} alt={project.title} />
                                    <div className={styles.otherProjectContent}>
                                        <div className={styles.otherProjectMeta}>
                                            <h4>{project.title}</h4>
                                            <div className={styles.otherProjectStatus} style={{ 
                                                color: projectStatusInfo.color 
                                            }}>
                                                {projectStatusInfo.icon}
                                            </div>
                                        </div>
                                        <p>{project.subtitle}</p>
                                    </div>
                                </Link>
                            );
                        })
                    }
            </div>
            </section>

            {/* Retour en bas */}
            <div className={styles.bottomNavigation}>
                <Link to="/works" className={styles.backLink}>
                    <GoArrowLeft />
                    <span>Retour aux projets</span>
                </Link>
            </div>
        </div>
    );
}
