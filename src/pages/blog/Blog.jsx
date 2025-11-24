import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Blog.module.scss";

export default function Blog() {
    const articles = [
        {
            id: 1,
            title: "ChatGPT-4 Turbo : IA générative révolutionnaire",
            date: "Novembre 2024",
            category: "IA",
            description: "OpenAI lance GPT-4 Turbo avec fenêtre contextuelle 128K tokens, vision multimodale, et performances améliorées à moindre coût pour les développeurs.",
            tags: ["IA", "ChatGPT", "OpenAI"],
            link: "https://openai.com/blog/new-models-and-developer-products-announced-at-devday"
        },
        {
            id: 2,
            title: "Quantum Computing : Google Willow révolutionne le calcul",
            date: "Décembre 2024",
            category: "Hardware",
            description: "Google présente Willow, une puce quantique capable de résoudre en 5 minutes des problèmes nécessitant 10 septillions d'années aux supercalculateurs.",
            tags: ["Quantique", "Google", "Innovation"],
            link: "https://blog.google/technology/research/google-willow-quantum-chip/"
        },
        {
            id: 3,
            title: "Cybersécurité : Failles critiques Zero-Day 2024",
            date: "Octobre 2024",
            category: "Sécurité",
            description: "Découverte de vulnérabilités critiques dans Chrome, Apache, et Log4j. Patchs urgents et bonnes pratiques pour sécuriser vos applications.",
            tags: ["Sécurité", "Zero-Day", "Vulnérabilités"],
            link: "https://www.cert.ssi.gouv.fr/"
        },
        {
            id: 4,
            title: "AWS re:Invent 2024 : Nouveautés Cloud",
            date: "Décembre 2024",
            category: "Cloud",
            description: "AWS annonce des instances EC2 Graviton4, amélioration de Lambda, et nouveaux services IA. Le cloud devient plus performant et économique.",
            tags: ["AWS", "Cloud", "Infrastructure"],
            link: "https://aws.amazon.com/blogs/aws/category/events/reinvent/"
        },
        {
            id: 5,
            title: "React 19 : Server Components en production",
            date: "Décembre 2024",
            category: "Frontend",
            description: "React 19 stable est sorti ! Server Components, hook use(), Actions, et optimisations majeures pour des applications web ultra-performantes.",
            tags: ["React", "Frontend", "JavaScript"],
            link: "https://react.dev/blog/2024/04/25/react-19"
        }
    ];

    return (
        <>
            <Header />
            <main className={styles.blog}>
                <div className={styles.blog__hero}>
                    <h1 className={styles.blog__title}>Blog & Veille Technologique</h1>
                    <p className={styles.blog__subtitle}>
                        Mes découvertes, apprentissages et réflexions sur les technologies web modernes
                    </p>
                </div>

                <div className={styles.blog__container}>
                    <div className={styles.blog__grid}>
                        {articles.map((article) => (
                            <article key={article.id} className={styles.article}>
                                <div className={styles.article__header}>
                                    <span className={styles.article__category}>{article.category}</span>
                                    <span className={styles.article__date}>{article.date}</span>
                                </div>
                                
                                <h2 className={styles.article__title}>{article.title}</h2>
                                <p className={styles.article__description}>{article.description}</p>
                                
                                <div className={styles.article__tags}>
                                    {article.tags.map((tag, index) => (
                                        <span key={index} className={styles.article__tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <a href={article.link} className={styles.article__link}>
                                    Lire l'article →
                                </a>
                            </article>
                        ))}
                    </div>

                    <aside className={styles.blog__sidebar}>
                        <div className={styles.sidebar__section}>
                            <h3 className={styles.sidebar__title}>Catégories</h3>
                            <ul className={styles.sidebar__list}>
                                <li>IA</li>
                                <li>Hardware</li>
                                <li>Sécurité</li>
                                <li>Cloud</li>
                                <li>Frontend</li>
                            </ul>
                        </div>

                        <div className={styles.sidebar__section}>
                            <h3 className={styles.sidebar__title}>Sources de veille</h3>
                            <ul className={styles.sidebar__list}>
                                <li><a href="https://openai.com/blog" target="_blank" rel="noopener noreferrer">OpenAI Blog</a></li>
                                <li><a href="https://blog.google/technology" target="_blank" rel="noopener noreferrer">Google Tech Blog</a></li>
                                <li><a href="https://www.cert.ssi.gouv.fr" target="_blank" rel="noopener noreferrer">CERT-FR</a></li>
                                <li><a href="https://aws.amazon.com/blogs" target="_blank" rel="noopener noreferrer">AWS Blog</a></li>
                                <li><a href="https://react.dev/blog" target="_blank" rel="noopener noreferrer">React Blog</a></li>
                                <li><a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer">TechCrunch</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </>
    );
}

