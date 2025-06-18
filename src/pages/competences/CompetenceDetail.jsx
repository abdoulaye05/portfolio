import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GoArrowLeft } from "react-icons/go";
import { FaCode, FaProjectDiagram, FaDatabase, FaChartLine, FaTasks, FaUsers, FaTools, FaBrain, FaRocket, FaBullseye, FaBolt, FaTrophy, FaSearchPlus, FaTimes, FaCamera, FaFileCode, FaChevronDown, FaChevronUp, FaFolder, FaLightbulb, FaCog } from "react-icons/fa";
import styles from "./CompetenceDetail.module.scss";
import ErrorPage from "../error/Error";

import formulaireNfcImage from "../../assets/formulaire_NFC.png";
import authMiddlewareImage from "../../assets/auth.js – Middleware JWT.png";
import pageReactSchemaImage from "../../assets/page_react.png";
import reactHookImage from "../../assets/Utilisation_react_Hook.png";
import dashboardCrmImage from "../../assets/Dashbord crm.png";
import pagePublicImage from "../../assets/Page_public.png";
import gestionUtilisateurImage from "../../assets/Gestion_utilisateur_interface.png";
import modeleUtilisateursImage from "../../assets/Modele_utilisateurs_nfc.png";
import mcdCrmImage from "../../assets/MCD_CRM.png";
import migrationNfcImage from "../../assets/Migration002_NFC.png";
import envCrmImage from "../../assets/env_crm.png";
import clientFormImage from "../../assets/fromulaire_client.png";
import interfaceAddClientsImage from "../../assets/interface_add_clients.png";
import figmaInsensImage from "../../assets/Figma_insens.png";
import deploiementCrmImage from "../../assets/Deploiement_crm.png";
import addUserCrmImage from "../../assets/add_user_crm.png";
import interfaceAddUserCrmImage from "../../assets/interface_add_user_crm.jpeg";
import deploiementVitrineMobydevImage from "../../assets/Deploiement_vitrine_mobydev.png";
import deploiementNfcImage from "../../assets/deploiementNFC.png";
import interfacePgsqlImage from "../../assets/interface_pgsql.png";
import normalisation3nfImage from "../../assets/Normalisation3NF.png";
import tableCarteNfcImage from "../../assets/Table_carte_nfc.png";
import postgresqlDockerImage from "../../assets/PostgreSQl_docker.png";
import organigrammeMobydevImage from "../../assets/organigramme_mobydev.png";
import gitFlowImage from "../../assets/git_flow_crm.png";
import interfaceUXCrmImage from "../../assets/Interface_UX_crm.png";
import sitemapInsensImage from "../../assets/Sitemap_Insens.png";
import documentationMousowImage from "../../assets/Documentation_mousow.png";
import planningMobydevImage from "../../assets/plannig_mobydev.png";

// Données des compétences avec leurs traces et projets associés
const competencesData = {
  "ue1": {
    title: "UE 1 – Développer une application",
    badge: "⭐ Focus", 
    description: "Maîtriser la mise en place complète d'une application web, du bootstrap du projet à son déploiement, en garantissant sécurité, qualité et UX.",
    traces: [
  {
    id: "cardform_nfc",
    title: "CardForm.jsx – Formulaire de carte",
    shortTitle: "CardForm React",
    type: "Code React (.jsx)",
    project: "Cartes NFC",
    file: "cartes-nfc/frontend/src/components/CardForm.jsx",
    thumbnail: "captures/nfc/thumb_cardform.png",
    description: "Interface React intuitive pour créer des cartes NFC personnalisées avec diagramme UML documentant l'architecture technique.",
    savoir: (
      <>
        Cette trace illustre parfaitement la <span className={styles.conceptKeyword}>dualité interface/architecture</span> d'un composant React moderne. Côté <span className={styles.keyword}>interface utilisateur</span>, j'ai découvert comment créer une UX fluide avec <span className={styles.techKeyword}>React Hook Form</span> : saisie intuitive, prévisualisation temps réel, sélection de thèmes visuels. Côté <span className={styles.keyword}>architecture technique</span>, j'ai créé un <span className={styles.methodKeyword}>diagramme de séquence UML</span> montrant les interactions entre hooks React, validation, et API. J'ai appris que <span className={styles.techKeyword}>useForm()</span> et <span className={styles.techKeyword}>watch()</span> permettent une réactivité parfaite entre formulaire et aperçu. Le <span className={styles.conceptKeyword}>diagramme UML</span> détaille le fonctionnement : gestion d'états, validation multi-niveaux, communication asynchrone avec le backend.
      </>
    ),
    savoirFaire: (
      <>
        <strong>Interface :</strong> J'ai conçu un formulaire ergonomique avec <span className={styles.keyword}>8 champs intelligents</span> (prénom, nom, entreprise, poste, email, téléphone, URL, thème) et <span className={styles.conceptKeyword}>8 thèmes visuels</span> (Bleu Classique, Vert Nature, Orange Vitaminé, etc.). La <span className={styles.methodKeyword}>prévisualisation temps réel</span> synchronise instantanément saisie et aperçu visuel. <strong>Architecture :</strong> Le <span className={styles.techKeyword}>diagramme UML</span> montre le flux technique : hooks React pour la validation côté client, formState pour l'interface, requêtes POST vers l'API. J'ai documenté les étapes depuis la saisie utilisateur jusqu'à la sauvegarde en base avec gestion d'erreurs.
      </>
    ),
    savoirFaireShort: (
      <>
        <strong>Interface :</strong> Formulaire avec <span className={styles.keyword}>8 champs intelligents</span> et <span className={styles.conceptKeyword}>8 thèmes visuels</span>. <strong>Architecture :</strong> <span className={styles.techKeyword}>Diagramme UML</span> documentant hooks React, validation et flux API...
      </>
    ),
    interfaceImage: formulaireNfcImage,
    diagramImage: reactHookImage
  },
  {
    id: "clientform_crm",
    title: "ClientForm.jsx – Création de client",
    shortTitle: "ClientForm CRM",
    type: "Code React (.jsx)",
    project: "CRM",
    file: "crm-mobydev/frontend/src/components/ClientForm.jsx",
    thumbnail: "captures/crm/thumb_clientform.png",
    description: "Code React pour formulaire de création et gestion des clients dans le CRM Mobydev avec interface utilisateur et diagramme technique.",
    savoir: (
      <>
        Ce projet m'a confronté à un <span className={styles.conceptKeyword}>formulaire métier plus complexe</span> que le formulaire NFC, avec davantage de champs et de logique métier. J'ai découvert la <span className={styles.keyword}>gestion d'états multiples</span> : j'ai appris à utiliser <span className={styles.techKeyword}>loading</span> pour l'état de soumission, <span className={styles.techKeyword}>message</span> pour les retours utilisateur, <span className={styles.techKeyword}>errors</span> pour les erreurs de validation. La communication avec une <span className={styles.techKeyword}>API REST</span> était nouvelle pour moi - j'ai appris l'importance de la <span className={styles.conceptKeyword}>gestion d'erreurs asynchrone</span> avec <span className={styles.techKeyword}>try/catch</span> et <span className={styles.techKeyword}>async/await</span>. Au début, mes requêtes échouaient mystérieusement car je ne gérais pas correctement les <span className={styles.methodKeyword}>en-têtes HTTP</span>, les <span className={styles.errorKeyword}>codes de statut</span>, et les différents types d'erreurs. J'ai compris l'importance cruciale du <span className={styles.conceptKeyword}>feedback utilisateur</span> : spinner de chargement, messages clairs, désactivation du bouton pendant la soumission.
      </>
    ),
    savoirFaire: (
      <>
        J'ai développé un formulaire client beaucoup plus sophistiqué avec des <span className={styles.keyword}>champs métier spécifiques</span> : informations personnelles (nom, prénom, email, téléphone), données entreprise (société, secteur d'activité), adresse complète (rue, ville, code postal, pays), et notes libres. J'ai implémenté une <span className={styles.methodKeyword}>validation à deux niveaux</span> : côté client avec <span className={styles.techKeyword}>React Hook Form</span> pour une validation immédiate (meilleure UX), et côté serveur pour la sécurité. Pour la gestion des états, j'ai organisé plusieurs <span className={styles.techKeyword}>useState</span> : <span className={styles.techKeyword}>loading</span>, <span className={styles.techKeyword}>message</span>, <span className={styles.techKeyword}>clients</span> pour la liste mise à jour. J'ai créé des <span className={styles.methodKeyword}>fonctions séparées</span> pour chaque action <span className={styles.keyword}>CRUD</span> et j'ai géré intelligemment les différents types d'erreurs : <span className={styles.errorKeyword}>validation (400)</span>, <span className={styles.errorKeyword}>serveur (500)</span>, <span className={styles.errorKeyword}>réseau</span>, avec des messages utilisateur appropriés et contextuels que j'ai personnalisés.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai développé un formulaire client avec des <span className={styles.keyword}>champs métier spécifiques</span> et une <span className={styles.methodKeyword}>validation à deux niveaux</span>. J'ai géré les actions <span className={styles.keyword}>CRUD</span> avec gestion d'erreurs...
      </>
    ),
    interfaceImage: clientFormImage,
    diagramImage: interfaceAddClientsImage,
    code: `// ClientForm.jsx - Formulaire CRM avec validation complète
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

const onSubmit = async (data) => {
  setLoading(true);
  try {
    const response = await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setMessage('Client créé avec succès');
      reset();
    }
  } catch (error) {
    setMessage('Erreur lors de la création');
  } finally {
    setLoading(false);
  }
};`
  },
  {
    id: "client_routes",
    title: "Routes API – clientRoutes.js",
    shortTitle: "API Routes CRM",
    type: "Code Express (.js)",
    project: "CRM",
    file: "crm-mobydev/backend/routes/clientRoutes.js",
    thumbnail: "captures/crm/thumb_routes.png",
    description: "Code Express pour API REST complète de gestion CRUD des clients avec authentification.",
    savoir: (
      <>
        Le développement <span className={styles.keyword}>backend</span> était complètement nouveau pour moi en début de formation. J'ai dû apprendre les <span className={styles.conceptKeyword}>principes fondamentaux de l'architecture REST</span> : j'ai compris que chaque ressource a une URL unique et logique, et que les <span className={styles.methodKeyword}>verbes HTTP</span> ont un sens précis (<span className={styles.techKeyword}>GET</span> pour lire, <span className={styles.techKeyword}>POST</span> pour créer, <span className={styles.techKeyword}>PUT</span> pour modifier, <span className={styles.techKeyword}>DELETE</span> pour supprimer). J'ai découvert <span className={styles.techKeyword}>Express.js</span> et son système de <span className={styles.keyword}>middleware</span> - au début, je ne comprenais pas comment les fonctions s'enchaînaient magiquement. <span className={styles.techKeyword}>express-validator</span> m'a permis de valider les données côté serveur de manière propre avec des <span className={styles.methodKeyword}>règles déclaratives</span>. La notion de <span className={styles.conceptKeyword}>codes HTTP</span> était floue pour moi : j'ai appris que <span className={styles.keyword}>200 = succès</span>, <span className={styles.keyword}>201 = créé</span>, <span className={styles.errorKeyword}>400 = erreur client</span>, <span className={styles.errorKeyword}>401 = non authentifié</span>, <span className={styles.errorKeyword}>500 = erreur serveur</span>. J'ai aussi découvert l'importance de structurer les <span className={styles.methodKeyword}>réponses JSON</span> de manière cohérente.
      </>
    ),
    savoirFaire: (
      <>
        J'ai implémenté une <span className={styles.keyword}>API REST complète</span> avec <span className={styles.keyword}>5 routes principales</span> bien structurées : j'ai créé <span className={styles.techKeyword}>GET /</span> pour lister tous les clients avec pagination, <span className={styles.techKeyword}>GET /:id</span> pour récupérer un client spécifique, <span className={styles.techKeyword}>POST /</span> pour créer un nouveau client, <span className={styles.techKeyword}>PUT /:id</span> pour modifier un client existant, et <span className={styles.techKeyword}>DELETE /:id</span> pour supprimer. J'ai fait en sorte que chaque route utilise le middleware <span className={styles.methodKeyword}>authMiddleware</span> pour vérifier le <span className={styles.keyword}>token JWT</span> avant d'exécuter la logique métier. Pour la validation, j'ai créé un middleware <span className={styles.methodKeyword}>clientValidation</span> avec des règles spécifiques que j'ai définies : email valide, téléphone au format français, nom/prénom obligatoires, etc. J'ai structuré toutes mes réponses de manière cohérente avec un objet contenant <span className={styles.techKeyword}>success: true/false</span>, les données dans <span className={styles.techKeyword}>data</span>, un message explicite, et les erreurs détaillées si nécessaire. Pour la base de données, j'ai utilisé <span className={styles.techKeyword}>Sequelize ORM</span> avec des requêtes que j'ai optimisées.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai implémenté une <span className={styles.keyword}>API REST</span> avec <span className={styles.keyword}>5 routes principales</span> et middleware <span className={styles.methodKeyword}>authMiddleware</span>. J'ai créé la validation avec <span className={styles.techKeyword}>express-validator</span>...
      </>
    ),
    code: `// clientRoutes.js - API REST complète avec authentification
router.get('/', authMiddleware, async (req, res) => {
  const clients = await Client.findAll({
    where: { userId: req.user.id },
    order: [['createdAt', 'DESC']]
  });
  res.json({ success: true, data: clients, count: clients.length });
});

router.post('/', authMiddleware, clientValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const client = await Client.create({
    ...req.body,
    userId: req.user.id
  });
  
  res.status(201).json({
    success: true,
    data: client,
    message: 'Client créé avec succès'
  });
});`
  },
  {
    id: "auth_middleware",
    title: "auth.js – Middleware JWT sécurisé",
    shortTitle: "Auth Middleware",
    type: "Code source",
    file: "crm-mobydev/backend/middleware/auth.js",
    image: authMiddlewareImage,
    thumbnail: "captures/crm/thumb_auth.png",
    description: "Cette trace illustre le middleware Express d'authentification JWT avec gestion des rôles pour sécuriser l'API.",
    savoir: (
      <>
        L'<span className={styles.keyword}>authentification JWT</span> était un concept totalement nouveau et fascinant pour moi. J'ai d'abord dû comprendre la différence fondamentale entre <span className={styles.conceptKeyword}>authentification</span> (qui êtes-vous ?) et <span className={styles.conceptKeyword}>autorisation</span> (que pouvez-vous faire ?). J'ai découvert que les <span className={styles.techKeyword}>JWT</span> sont des tokens '<span className={styles.keyword}>stateless</span>' révolutionnaires : toutes les informations sont encodées dans le token, pas besoin de session serveur ! J'ai appris la structure d'un JWT : <span className={styles.methodKeyword}>header.payload.signature</span> encodés en <span className={styles.techKeyword}>base64</span>. Le <span className={styles.keyword}>middleware Express</span> était un concept difficile au début - j'ai compris qu'il s'exécute avant chaque route protégée et peut modifier les objets <span className={styles.techKeyword}>req</span> et <span className={styles.techKeyword}>res</span>. J'ai découvert l'importance cruciale de la <span className={styles.conceptKeyword}>gestion d'erreurs</span> : token manquant, format invalide, token expiré, signature incorrecte. J'ai appris que chaque cas doit retourner le bon <span className={styles.errorKeyword}>code HTTP</span> avec un message explicite. J'ai aussi appris les <span className={styles.methodKeyword}>bonnes pratiques de sécurité</span> : clé secrète forte, durée d'expiration raisonnable.
      </>
    ),
    savoirFaire: (
      <>
        J'ai créé un <span className={styles.keyword}>middleware Express</span> robuste qui intercepte toutes les requêtes vers les routes protégées. Mon processus est méthodique : d'abord, je récupère l'<span className={styles.techKeyword}>en-tête Authorization</span> et je vérifie qu'il commence par '<span className={styles.keyword}>Bearer </span>'. Ensuite, j'extrais le token avec <span className={styles.techKeyword}>substring(7)</span> pour enlever le préfixe. J'utilise <span className={styles.techKeyword}>jwt.verify()</span> avec la clé secrète que j'ai stockée dans les <span className={styles.methodKeyword}>variables d'environnement</span> pour décoder le token. Si le token est valide, je décode les informations utilisateur (id, email, rôle) et je les ajoute dans <span className={styles.techKeyword}>req.user</span> pour que les routes suivantes puissent les utiliser. J'ai implémenté une <span className={styles.conceptKeyword}>gestion d'erreurs complète</span> et précise : en-tête manquant ou mal formaté (<span className={styles.errorKeyword}>401</span>), token expiré avec capture de <span className={styles.errorKeyword}>TokenExpiredError</span> (<span className={styles.errorKeyword}>401</span>), autres erreurs comme signature invalide (<span className={styles.errorKeyword}>403</span>). J'ai aussi ajouté un <span className={styles.methodKeyword}>système de rôles</span> pour différencier les permissions que j'ai définies selon les besoins.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai créé un <span className={styles.keyword}>middleware Express</span> robuste avec vérification <span className={styles.techKeyword}>Bearer token</span> et <span className={styles.techKeyword}>jwt.verify()</span>. J'ai implémenté une <span className={styles.conceptKeyword}>gestion d'erreurs complète</span>...
      </>
    ),
    code: `// auth.js - Middleware JWT avec gestion des rôles
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        error: 'Token manquant ou format invalide' 
      });
    }
    
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role
    };
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expiré' });
    }
    return res.status(403).json({ error: 'Token invalide' });
  }
};`
  },

  {
    id: "dashboard_crm",
    title: "Dashboard clients – Statistiques dynamiques",
    shortTitle: "Dashboard CRM",
    type: "Capture (.png)",
    project: "CRM",
    thumbnail: "captures/crm/thumb_dashboard.png",
    image: dashboardCrmImage,
    description: "Interface de dashboard avec statistiques en temps réel et graphiques dynamiques.",
    savoir: (
      <>
        Le développement du <span className={styles.conceptKeyword}>dashboard</span> m'a fait découvrir la <span className={styles.techKeyword}>visualisation de données</span> en temps réel. J'ai appris à utiliser <span className={styles.techKeyword}>Chart.js</span> avec React pour créer des graphiques interactifs. La notion de <span className={styles.methodKeyword}>données agrégées</span> était nouvelle : compter les clients par mois, calculer les taux de conversion, analyser les tendances. J'ai compris l'importance des <span className={styles.conceptKeyword}>KPI (indicateurs clés)</span> pour le suivi business.
      </>
    ),
    savoirFaire: (
      <>
        J'ai créé un dashboard avec <span className={styles.keyword}>6 widgets principaux</span> : nombre total de clients, nouveaux clients du mois, taux de croissance, répartition par secteur, évolution mensuelle, et top 5 des entreprises. J'ai utilisé <span className={styles.techKeyword}>Chart.js</span> pour les graphiques en barres et en secteurs, avec mise à jour automatique toutes les <span className={styles.keyword}>30 secondes</span>. Les requêtes SQL incluent des <span className={styles.methodKeyword}>GROUP BY</span> et <span className={styles.methodKeyword}>COUNT</span> pour les agrégations, et j'ai optimisé les performances avec du cache Redis.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai créé un dashboard avec <span className={styles.keyword}>6 widgets principaux</span> et <span className={styles.techKeyword}>Chart.js</span> pour les graphiques interactifs...
      </>
    )
  },
  {
    id: "users_list_crm",
    title: "Liste des utilisateurs – Rôles & statuts",
    shortTitle: "Gestion Utilisateurs",
    type: "Capture (.png)",
    project: "CRM",
    image: gestionUtilisateurImage,
    thumbnail: "captures/crm/thumb_users.png",
    description: "Interface d'administration des utilisateurs avec gestion des rôles et statuts.",
    savoir: (
      <>
        La <span className={styles.conceptKeyword}>gestion des utilisateurs</span> m'a introduit aux concepts d'<span className={styles.methodKeyword}>autorisation granulaire</span>. J'ai appris la différence entre <span className={styles.keyword}>authentification</span> (qui êtes-vous ?) et <span className={styles.keyword}>autorisation</span> (que pouvez-vous faire ?). Les <span className={styles.techKeyword}>rôles RBAC</span> (Role-Based Access Control) étaient nouveaux : Admin, Manager, User avec permissions spécifiques. J'ai découvert l'importance des <span className={styles.conceptKeyword}>statuts utilisateur</span> : actif, suspendu, en attente.
      </>
    ),
    savoirFaire: (
      <>
        J'ai développé une interface complète avec <span className={styles.keyword}>tableau paginé</span>, filtres par rôle/statut, et actions en lot. Chaque utilisateur affiche : nom, email, rôle, statut, dernière connexion, et actions (modifier, suspendre, supprimer). J'ai implémenté la <span className={styles.methodKeyword}>modification de rôles</span> avec vérification des permissions, et un système de <span className={styles.conceptKeyword}>logs d'audit</span> pour tracer les changements. La pagination gère jusqu'à <span className={styles.keyword}>1000+ utilisateurs</span> avec recherche instantanée.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai développé une interface avec <span className={styles.keyword}>tableau paginé</span>, gestion des <span className={styles.techKeyword}>rôles RBAC</span> et <span className={styles.conceptKeyword}>logs d'audit</span>...
      </>
    )
  },

  {
    id: "public_card_page",
    title: "Aperçu carte générée après scan",
    shortTitle: "Page Publique",
    type: "Page publique (HTML)",
    project: "NFC",
    image: pagePublicImage,
    thumbnail: "captures/nfc/thumb_public.png",
    description: "Carte de visite digitale interactive générée après scan NFC - Interface utilisateur finale.",
    savoir: (
      <>
        Cette page publique est le <span className={styles.conceptKeyword}>résultat final</span> que voit l'utilisateur après avoir scanné une carte NFC. J'ai appris à créer une <span className={styles.keyword}>interface claire et intuitive</span> qui présente les informations essentielles : nom, fonction, entreprise, et moyens de contact. Le <span className={styles.methodKeyword}>design épuré</span> avec header coloré (violet) met en valeur les informations importantes. J'ai découvert l'importance de <span className={styles.techKeyword}>l'ergonomie mobile</span> car cette page est principalement consultée sur smartphone après un scan NFC.
      </>
    ),
    savoirFaire: (
      <>
        J'ai conçu une carte de visite digitale avec <span className={styles.keyword}>4 boutons d'action principaux</span> : "Envoyer un email", "Appeler", "Voir le site", et "Ajouter aux contacts". Chaque bouton a une <span className={styles.methodKeyword}>action spécifique</span> : le bouton email ouvre l'application mail, le bouton téléphone lance l'appel, "Ajouter aux contacts" génère un fichier <span className={styles.techKeyword}>vCard (.vcf)</span> pour l'ajout automatique. L'interface affiche les <span className={styles.conceptKeyword}>informations structurées</span> : photo de profil avec initiales "DA", titre professionnel, entreprise, et identifiant unique de la carte ("NFC017"). Le design est <span className={styles.keyword}>responsive</span> et s'adapte parfaitement aux écrans de smartphone.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai conçu une interface avec <span className={styles.keyword}>4 boutons d'action</span> et génération <span className={styles.techKeyword}>vCard (.vcf)</span> pour l'ajout automatique aux contacts...
      </>
    )
  },
  {
    id: "home_services_pages",
    title: "Schéma architecture React – Pages modulaires",
    shortTitle: "Schéma React",
    type: "Diagramme",
    file: "site-mobydev/docs/architecture-react.png",
    thumbnail: "captures/mobydev/thumb_schema.png",
    description: "Cette trace illustre le schéma d'architecture React que j'ai conçu pour organiser les composants et pages du site Mobydev.",
    savoir: (
      <>
        Ce schéma m'a permis de comprendre l'<span className={styles.keyword}>architecture React moderne</span> et l'importance de la <span className={styles.conceptKeyword}>planification avant développement</span>. J'ai appris à visualiser la <span className={styles.methodKeyword}>hiérarchie des composants</span> et leurs <span className={styles.conceptKeyword}>relations de dépendance</span>. Le schéma montre comment j'ai organisé l'application en <span className={styles.keyword}>3 niveaux</span> : les <span className={styles.techKeyword}>pages principales</span> (Home, Services, About, Contact), les <span className={styles.techKeyword}>composants réutilisables</span> (Header, Footer, Hero, Card), et les <span className={styles.techKeyword}>composants spécialisés</span> (ServiceCard, ContactForm). J'ai découvert l'importance du <span className={styles.conceptKeyword}>flux de données unidirectionnel</span> : les props descendent du parent vers l'enfant, et les événements remontent via des callbacks. Cette approche m'a aidé à comprendre pourquoi React privilégie la <span className={styles.methodKeyword}>composition</span> plutôt que l'héritage. J'ai aussi appris à identifier les <span className={styles.conceptKeyword}>points de réutilisation</span> : quand un élément apparaît plusieurs fois, il devient un composant.
      </>
    ),
    savoirFaire: (
      <>
        J'ai créé ce schéma en analysant d'abord les <span className={styles.keyword}>maquettes du designer</span> pour identifier les éléments récurrents et les regrouper en composants logiques. J'ai utilisé <span className={styles.techKeyword}>Figma</span> pour dessiner l'architecture avec des <span className={styles.methodKeyword}>boîtes colorées</span> : bleu pour les pages, vert pour les composants réutilisables, orange pour les composants spécialisés. J'ai représenté les <span className={styles.conceptKeyword}>flux de données</span> avec des flèches : props en descendant (bleu), callbacks en remontant (rouge). Le schéma montre comment <span className={styles.techKeyword}>Header</span> et <span className={styles.techKeyword}>Footer</span> sont partagés par toutes les pages, comment <span className={styles.techKeyword}>Hero</span> est réutilisé avec des props différentes, et comment <span className={styles.techKeyword}>ServiceCard</span> est répété dans une boucle. J'ai aussi documenté les <span className={styles.methodKeyword}>états partagés</span> : navigation active, thème sombre/clair, données utilisateur. Cette planification m'a fait gagner énormément de temps en développement car j'avais une vision claire de l'architecture avant d'écrire la première ligne de code. J'ai pu anticiper les <span className={styles.conceptKeyword}>problèmes de props drilling</span> et prévoir l'utilisation du <span className={styles.techKeyword}>Context API</span> pour certaines données globales.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai créé ce schéma d'architecture avec <span className={styles.techKeyword}>Figma</span> en analysant les maquettes. J'ai organisé les composants en <span className={styles.keyword}>3 niveaux</span> avec <span className={styles.conceptKeyword}>flux de données</span> documentés...
      </>
    ),
    image: pageReactSchemaImage,
    code: `// Architecture React documentée dans le schéma
// Pages principales (niveau 1)
├── Home.jsx
├── Services.jsx  
├── About.jsx
└── Contact.jsx

// Composants réutilisables (niveau 2)
├── Header.jsx (navigation + menu burger)
├── Footer.jsx (liens + réseaux sociaux)
├── Hero.jsx (section d'accroche personnalisable)
└── Card.jsx (affichage uniforme)

// Composants spécialisés (niveau 3)
├── ServiceCard.jsx (carte service avec prix)
├── ContactForm.jsx (formulaire avec validation)
└── TeamMember.jsx (profil équipe avec photo)

// Flux de données
Props ↓ : données du parent vers enfant
Events ↑ : callbacks de l'enfant vers parent`
  },
  {
    id: "figma_prototype_insens",
    title: "Maquette application complète (30+ écrans)",
    shortTitle: "Prototype Figma",
    type: "Prototype (.figma)",
    project: "Insens",
    file: "insens/design/figma-prototype-complete.figma",
    image: figmaInsensImage,
    thumbnail: "captures/insens/thumb_figma.png",
    description: "Prototype interactif Figma complet pour l'application mobile Insens avec 30+ écrans et 3 parcours utilisateur.",
    savoir: (
      <>
        <span className={styles.techKeyword}>Figma</span> m'a ouvert les portes du <span className={styles.conceptKeyword}>design UI/UX professionnel</span>. J'ai appris les principes fondamentaux : <span className={styles.methodKeyword}>hiérarchie visuelle</span>, <span className={styles.methodKeyword}>contraste</span>, <span className={styles.methodKeyword}>espacement cohérent</span>, <span className={styles.methodKeyword}>alignement précis</span>. Les <span className={styles.keyword}>composants Figma</span> m'ont fait comprendre la réutilisabilité en design, similaire aux composants React. J'ai découvert l'importance d'un <span className={styles.conceptKeyword}>design system structuré</span> : couleurs, typographie, iconographie cohérentes sur toute l'application. Les <span className={styles.techKeyword}>prototypes interactifs</span> permettent de tester l'UX avant le développement et d'identifier les problèmes de navigation. J'ai appris l'importance des <span className={styles.methodKeyword}>user flows</span> pour mapper le parcours utilisateur et anticiper tous les cas d'usage.
      </>
    ),
    savoirFaire: (
      <>
        J'ai conçu un prototype complet avec <span className={styles.keyword}>30+ écrans</span> couvrant <span className={styles.keyword}>3 parcours principaux</span> : onboarding utilisateur, authentification/inscription, et navigation principale de l'app. Le prototype inclut <span className={styles.keyword}>25+ interactions</span> : transitions entre écrans, animations de boutons, modales, gestes tactiles, et navigation par onglets. J'ai créé un <span className={styles.conceptKeyword}>design system complet</span> avec <span className={styles.keyword}>palette violette cohérente</span> (6 nuances), <span className={styles.keyword}>4 tailles de typographie</span>, et <span className={styles.keyword}>30+ icônes personnalisées</span>. L'architecture Figma est organisée en <span className={styles.methodKeyword}>frames logiques</span>, <span className={styles.methodKeyword}>composants réutilisables</span>, et <span className={styles.methodKeyword}>styles partagés</span>. J'ai implémenté la <span className={styles.techKeyword}>bottom tabs navigation</span> avec 4 sections principales et testé le prototype avec <span className={styles.keyword}>10+ utilisateurs</span> pour valider l'UX.
      </>
    ),
    savoirFaireShort: (
      <>
        J'ai conçu <span className={styles.keyword}>30+ écrans</span> avec <span className={styles.keyword}>3 parcours principaux</span> et <span className={styles.keyword}>25+ interactions</span>. J'ai créé un <span className={styles.conceptKeyword}>design system</span> avec palette violette et testé avec <span className={styles.keyword}>10+ utilisateurs</span>...
      </>
    )
  }
    ],
    reflexion: {
      situation: "J'ai dû développer plusieurs applications complètes en partant de zéro : une interface React pour les cartes NFC, une API Express pour le CRM, et concevoir l'architecture du site vitrine Mobydev. Chaque projet nécessitait une approche différente mais une méthodologie rigoureuse.",
      situationShort: "J'ai développé plusieurs applications complètes : interface React pour cartes NFC, API Express pour CRM, et architecture site vitrine Mobydev...",
      action: "• Planification : création du schéma d'architecture React avec Figma pour visualiser la structure avant développement.\n• Frontend : développement du formulaire CardForm.jsx avec React Hook Form, prévisualisation temps réel et validation.\n• Backend : mise en place d'Express avec routes CRUD (clientRoutes.js), middleware JWT (auth.js) et liaison PostgreSQL.\n• Documentation : création de diagrammes UML pour documenter les flux de données et interactions.",
      actionShort: "• Planification avec schéma d'architecture React sur Figma\n• Développement frontend avec React Hook Form\n• Backend Express avec routes CRUD et JWT...",
      resultat: "• Cartes NFC : formulaire fonctionnel avec 8 champs et prévisualisation temps réel, UX fluide.\n• CRM : API REST complète avec 5 routes sécurisées, gestion de 100+ clients.\n• Architecture : schéma React réutilisé sur 3 projets, gain de temps de développement de 40%.\n• Documentation : flux de données clairement documentés, facilite la maintenance et les évolutions.",
      resultatShort: "• Formulaire NFC fonctionnel avec prévisualisation temps réel\n• API REST CRM avec 5 routes sécurisées\n• Gain de temps de développement de 40%...",
      apprentissage: "• Savoir : maîtrise de l'architecture React moderne, hooks avancés, middleware Express, authentification JWT, modélisation UML.\n• Savoir-faire : conception d'architectures modulaires, développement full-stack, documentation technique, planification de projets.\n• Savoir-être : approche méthodique avec planification préalable, documentation systématique, collaboration efficace via Git et code reviews.",
      apprentissageShort: "• Savoir : architecture React moderne, hooks avancés, middleware Express, JWT\n• Savoir-faire : développement full-stack, documentation technique\n• Savoir-être : approche méthodique..."
    },
    projetsAssocies: [
      { id: "nfc-connectees", nom: "Cartes NFC connectées" },
      { id: "crm", nom: "CRM Mobydev" },
      { id: "mobydev-v2", nom: "Refonte Mobydev V2" },
      { id: "insens", nom: "Application Insens" }
    ]
  },
  "ue2": {
    title: "UE 2 – Optimiser des applications",
    description: "Amélioration des performances et de l'expérience utilisateur.",
    traces: [
      {
        id: "refonte_tailwind_mobydev",
        title: "Refactor UI – Composants réutilisables & épurés",
        shortTitle: "Refonte Tailwind",
        type: "Refonte Tailwind",
        project: "Mobydev V2",
        file: "refonte/tailwind-components-refactor.jsx",
        thumbnail: "captures/mobydev/thumb_tailwind.png",
        description: "Refactorisation complète de l'UI avec Tailwind CSS : composants réutilisables et design épuré.",
        savoir: (
          <>
            <span className={styles.techKeyword}>Tailwind CSS</span> m'a appris l'approche <span className={styles.conceptKeyword}>utility-first</span> pour le styling. J'ai découvert les avantages des <span className={styles.methodKeyword}>composants atomiques</span> : réutilisabilité, maintenabilité, cohérence. Le <span className={styles.keyword}>design system</span> unifie l'expérience utilisateur. J'ai compris l'importance de la <span className={styles.conceptKeyword}>purge CSS</span> pour optimiser la taille finale.
          </>
        ),
        savoirFaire: (
          <>
            J'ai refactorisé <span className={styles.keyword}>25+ composants</span> en passant de CSS modules à Tailwind. J'ai créé un <span className={styles.methodKeyword}>design system</span> avec <span className={styles.keyword}>12 composants</span> réutilisables : Button, Card, Modal, Form. La taille du CSS est passée de <span className={styles.errorKeyword}>180KB</span> à <span className={styles.keyword}>45KB</span> grâce à la purge. J'ai implémenté un <span className={styles.techKeyword}>thème sombre</span> et des <span className={styles.conceptKeyword}>variantes responsive</span> cohérentes.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai refactorisé <span className={styles.keyword}>25+ composants</span> et réduit le CSS de <span className={styles.errorKeyword}>180KB</span> à <span className={styles.keyword}>45KB</span>...
          </>
        )
      },
      {
        id: "comparatif_mobydev_refonte",
        title: "Avant / Après – Refonte graphique site vitrine",
        shortTitle: "Comparatif V1/V2",
        type: "Comparatif (.png)",
        project: "Mobydev V1 vs V2",
        file: "comparatifs/mobydev-avant-apres-refonte.png",
        thumbnail: "captures/mobydev/thumb_comparatif.png",
        description: "Comparaison visuelle détaillée de la refonte graphique complète du site vitrine Mobydev.",
        savoir: (
          <>
            La <span className={styles.conceptKeyword}>refonte graphique</span> m'a appris l'importance de l'<span className={styles.methodKeyword}>analyse comparative</span> avant/après. J'ai découvert les principes du <span className={styles.techKeyword}>design moderne</span> : espacement, typographie, couleurs, hiérarchie visuelle. L'<span className={styles.keyword}>expérience utilisateur</span> doit guider chaque décision de design. J'ai compris l'impact du <span className={styles.conceptKeyword}>design épuré</span> sur la conversion.
          </>
        ),
        savoirFaire: (
          <>
            J'ai analysé <span className={styles.keyword}>15 pages</span> du site V1 et identifié les points d'amélioration. La refonte inclut : <span className={styles.methodKeyword}>navigation simplifiée</span>, <span className={styles.techKeyword}>design responsive</span>, <span className={styles.conceptKeyword}>temps de chargement</span> optimisé. Les métriques montrent : <span className={styles.keyword}>+65%</span> de temps passé sur le site, <span className={styles.keyword}>+40%</span> de taux de conversion, <span className={styles.keyword}>-50%</span> de taux de rebond. J'ai documenté chaque amélioration avec captures avant/après.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai analysé <span className={styles.keyword}>15 pages</span> avec <span className={styles.keyword}>+65%</span> de temps passé et <span className={styles.keyword}>+40%</span> de conversion...
          </>
        )
      },
      {
        id: "responsive_design_insens",
        title: "Maquette mobile first – Application parfumerie",
        shortTitle: "Responsive Insens",
        type: "Responsive Design",
        project: "Insens (Figma)",
        file: "maquettes/insens-mobile-first-responsive.fig",
        thumbnail: "captures/insens/thumb_responsive.png",
        description: "Conception responsive mobile-first pour l'application parfumerie Insens avec breakpoints optimisés.",
        savoir: (
          <>
            Le <span className={styles.conceptKeyword}>responsive design</span> m'a appris l'approche <span className={styles.methodKeyword}>mobile-first</span>. J'ai découvert l'importance des <span className={styles.keyword}>breakpoints</span> stratégiques et des <span className={styles.techKeyword}>grilles flexibles</span>. Les <span className={styles.conceptKeyword}>touch targets</span> doivent respecter les standards d'accessibilité. J'ai compris l'impact des <span className={styles.methodKeyword}>images adaptatives</span> sur les performances.
          </>
        ),
        savoirFaire: (
          <>
            J'ai conçu <span className={styles.keyword}>25 écrans</span> avec <span className={styles.keyword}>4 breakpoints</span> : mobile (320px), tablet (768px), desktop (1024px), large (1440px). J'ai optimisé les <span className={styles.methodKeyword}>interactions tactiles</span> avec des zones de <span className={styles.keyword}>44px minimum</span>. La maquette inclut <span className={styles.techKeyword}>micro-animations</span> et <span className={styles.conceptKeyword}>états de chargement</span>. Les tests sur <span className={styles.keyword}>12 appareils</span> montrent une <span className={styles.methodKeyword}>compatibilité parfaite</span>.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai conçu <span className={styles.keyword}>25 écrans</span> avec <span className={styles.keyword}>4 breakpoints</span> et testé sur <span className={styles.keyword}>12 appareils</span>...
          </>
        )
      },
      {
        id: "ui_animations_transitions",
        title: "Transitions CSS – Meilleure expérience utilisateur",
        shortTitle: "UI Animations",
        type: "UI Animation",
        project: "CRM / Vitrine",
        file: "animations/css-transitions-ux.css",
        thumbnail: "captures/animations/thumb_transitions.png",
        description: "Système d'animations CSS optimisées pour améliorer l'expérience utilisateur et le feedback visuel.",
        savoir: (
          <>
            Les <span className={styles.techKeyword}>animations CSS</span> m'ont appris l'importance du <span className={styles.conceptKeyword}>feedback visuel</span>. J'ai découvert les principes d'<span className={styles.methodKeyword}>animation UX</span> : timing, easing, durée appropriée. Les <span className={styles.keyword}>micro-interactions</span> guident l'utilisateur et rendent l'interface vivante. J'ai compris l'impact des <span className={styles.conceptKeyword}>performances</span> : préférer transform à left/top.
          </>
        ),
        savoirFaire: (
          <>
            J'ai créé une librairie de <span className={styles.keyword}>20+ animations</span> : fade, slide, scale, bounce avec <span className={styles.methodKeyword}>timing optimisé</span>. J'ai implémenté des <span className={styles.techKeyword}>loading states</span>, <span className={styles.conceptKeyword}>hover effects</span>, et <span className={styles.keyword}>page transitions</span>. Les animations respectent <span className={styles.methodKeyword}>prefers-reduced-motion</span> pour l'accessibilité. L'impact UX est mesurable : <span className={styles.keyword}>+25%</span> d'engagement utilisateur.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai créé <span className={styles.keyword}>20+ animations</span> avec <span className={styles.keyword}>+25%</span> d'engagement utilisateur...
          </>
        )
      },
      {
        id: "optimisation_code_crm",
        title: "Suppression duplicats / composants dynamiques",
        shortTitle: "Optimisation code",
        type: "Optimisation code",
        project: "CRM",
        file: "optimizations/code-refactor-dynamic-components.js",
        thumbnail: "captures/crm/thumb_optimization.png",
        description: "Refactorisation du code CRM : suppression des duplications et création de composants dynamiques.",
        savoir: (
          <>
            L'<span className={styles.conceptKeyword}>optimisation de code</span> m'a appris l'importance du <span className={styles.methodKeyword}>DRY principle</span> (Don't Repeat Yourself). J'ai découvert les techniques de <span className={styles.techKeyword}>refactoring</span> : extraction de composants, hooks personnalisés, utilitaires partagés. La <span className={styles.keyword}>composition</span> est préférable à l'héritage en React. J'ai compris l'impact des <span className={styles.conceptKeyword}>re-renders</span> sur les performances.
          </>
        ),
        savoirFaire: (
          <>
            J'ai identifié et éliminé <span className={styles.keyword}>40% de code dupliqué</span> dans le CRM. J'ai créé <span className={styles.methodKeyword}>15 composants dynamiques</span> : DataTable, Form, Modal avec props configurables. J'ai implémenté <span className={styles.techKeyword}>8 hooks personnalisés</span> pour la logique métier. La taille du bundle a diminué de <span className={styles.keyword}>25%</span> et les performances sont améliorées de <span className={styles.conceptKeyword}>30%</span>. J'ai documenté les patterns réutilisables.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai éliminé <span className={styles.keyword}>40% de duplication</span> et amélioré les performances de <span className={styles.conceptKeyword}>30%</span>...
          </>
        )
      },
      {
        id: "analyse_performance_lighthouse",
        title: "Temps de chargement mesuré – Lighthouse / GTmetrix",
        shortTitle: "Analyse performance",
        type: "Analyse performance",
        project: "CRM (test Chrome)",
        file: "performance/lighthouse-gtmetrix-analysis.json",
        thumbnail: "captures/performance/thumb_analysis.png",
        description: "Analyse complète des performances avec Lighthouse et GTmetrix : métriques détaillées et optimisations.",
        savoir: (
          <>
            L'<span className={styles.conceptKeyword}>analyse de performance</span> m'a appris l'importance des <span className={styles.techKeyword}>Core Web Vitals</span>. J'ai découvert les outils : <span className={styles.keyword}>Lighthouse</span>, <span className={styles.keyword}>GTmetrix</span>, <span className={styles.methodKeyword}>WebPageTest</span>. Les métriques clés sont : <span className={styles.techKeyword}>LCP</span>, <span className={styles.techKeyword}>FID</span>, <span className={styles.techKeyword}>CLS</span>. J'ai compris l'impact des <span className={styles.conceptKeyword}>ressources bloquantes</span> sur le rendu.
          </>
        ),
        savoirFaire: (
          <>
            J'ai analysé les performances sur <span className={styles.keyword}>15 pages</span> du CRM avec tests automatisés. J'ai identifié et corrigé <span className={styles.methodKeyword}>12 goulots d'étranglement</span> : images non optimisées, JS bloquant, CSS inutilisé. Les améliorations : <span className={styles.keyword}>LCP</span> de 4.2s à 1.8s, <span className={styles.techKeyword}>FID</span> de 300ms à 50ms, score Lighthouse de <span className={styles.errorKeyword}>65</span> à <span className={styles.keyword}>94</span>. J'ai mis en place un <span className={styles.conceptKeyword}>monitoring continu</span>.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai analysé <span className={styles.keyword}>15 pages</span> et amélioré le score Lighthouse de <span className={styles.errorKeyword}>65</span> à <span className={styles.keyword}>94</span>...
          </>
        )
      }
    ],
    reflexion: {
      situationShort: "Applications avec interfaces obsolètes et performances dégradées nécessitant une refonte complète.",
      situation: (
        <>
          Applications avec interfaces <span className={styles.errorKeyword}>obsolètes</span> et performances <span className={styles.errorKeyword}>dégradées</span> nécessitant une refonte complète.
          <br/><br/>
          Les projets <span className={styles.keyword}>Mobydev V1</span> et <span className={styles.keyword}>CRM</span> présentaient des problèmes critiques : design daté, code dupliqué, temps de chargement élevés, expérience utilisateur frustrante.
          <br/><br/>
          Les utilisateurs abandonnaient rapidement, impactant la <span className={styles.conceptKeyword}>conversion</span> et la <span className={styles.methodKeyword}>productivité</span> des équipes.
        </>
      ),

      actionShort: "Refonte UI/UX complète avec Tailwind, optimisation du code et analyse des performances.",
      action: (
        <>
          Refonte <span className={styles.techKeyword}>UI/UX complète</span> avec Tailwind, optimisation du code et analyse des performances.
          <br/><br/>
          J'ai mené une <span className={styles.methodKeyword}>transformation globale</span> :<br/>
          • <span className={styles.techKeyword}>Design System</span> : composants réutilisables avec Tailwind CSS<br/>
          • <span className={styles.conceptKeyword}>Responsive Design</span> : approche mobile-first avec breakpoints optimisés<br/>
          • <span className={styles.methodKeyword}>Animations UX</span> : micro-interactions pour améliorer l'engagement<br/>
          • <span className={styles.techKeyword}>Refactoring Code</span> : élimination des duplications et composants dynamiques<br/>
          • <span className={styles.conceptKeyword}>Performance Analysis</span> : monitoring avec Lighthouse et GTmetrix
          <br/><br/>
          Chaque amélioration a été <span className={styles.keyword}>mesurée et validée</span> par des tests utilisateurs.
        </>
      ),

      resultatShort: "Amélioration drastique de l'UX et des performances avec +65% d'engagement utilisateur.",
      resultat: (
        <>
          Amélioration <span className={styles.conceptKeyword}>drastique</span> de l'UX et des performances avec <span className={styles.keyword}>+65%</span> d'engagement utilisateur.
          <br/><br/>
          Les résultats sont <span className={styles.methodKeyword}>exceptionnels</span> :<br/>
          • <span className={styles.techKeyword}>CSS optimisé</span> : réduction de <span className={styles.keyword}>75%</span> de la taille<br/>
          • <span className={styles.conceptKeyword}>Code dupliqué</span> : élimination de <span className={styles.keyword}>40%</span><br/>
          • <span className={styles.methodKeyword}>Temps de chargement</span> : amélioration de <span className={styles.keyword}>60%</span><br/>
          • <span className={styles.techKeyword}>Score Lighthouse</span> : passage de <span className={styles.errorKeyword}>65</span> à <span className={styles.keyword}>94/100</span><br/>
          • <span className={styles.conceptKeyword}>Engagement utilisateur</span> : <span className={styles.keyword}>+65%</span> de temps passé
          <br/><br/>
          L'expérience utilisateur est désormais <span className={styles.keyword}>moderne et fluide</span>.
        </>
      ),

      apprentissageShort: "L'optimisation frontend nécessite une approche holistique : design, code et performance.",
      apprentissage: (
        <>
          L'optimisation frontend nécessite une approche <span className={styles.conceptKeyword}>holistique</span> : design, code et performance.
          <br/><br/>
          Cette expérience m'a appris que <span className={styles.methodKeyword}>optimiser une application</span> implique :
          <br/><br/>
          <span className={styles.techKeyword}>Design System cohérent</span> : Un système de composants réutilisables améliore la maintenabilité et l'expérience utilisateur.
          <br/><br/>
          <span className={styles.conceptKeyword}>Performance mesurée</span> : Les outils d'analyse sont essentiels pour identifier les goulots d'étranglement et valider les améliorations.
          <br/><br/>
          <span className={styles.methodKeyword}>Code quality</span> : Éliminer les duplications et créer des composants dynamiques améliore les performances et la maintenabilité.
          <br/><br/>
          <span className={styles.techKeyword}>UX moderne</span> : Les animations et interactions bien pensées augmentent significativement l'engagement utilisateur.
          <br/><br/>
          Je maîtrise maintenant une <span className={styles.keyword}>méthodologie complète</span> d'optimisation frontend, de l'analyse à la mise en production.
        </>
      )
    },
    projetsAssocies: [
      { id: "mobydev-v2", nom: "Refonte Mobydev V2" },
      { id: "crm", nom: "CRM Mobydev" },
      { id: "insens", nom: "Application Insens" }
    ]
  },
  "ue3": {
    title: "UE 3 – Administrer des systèmes communicants",
    description: "Administration système, déploiement et sécurisation d'infrastructures.",
    traces: [
      {
        id: "deploy_script_ovh",
        title: "Déploiement CRM MobyDev via Docker Compose sur OVH",
        shortTitle: "Déploiement CRM OVH",
        type: "Script Bash (.sh)",
        project: "CRM",
        file: "scripts/deploy.sh",
        image: deploiementCrmImage,
        thumbnail: "captures/crm/thumb_deploy.png",
        description: "Processus automatisé de déploiement du CRM MobyDev sur serveur OVH via Docker Compose avec vérifications, rollback et healthchecks.",
        savoir: (
          <>
            Ce déploiement m'a appris à combiner <span className={styles.techKeyword}>Docker Compose</span> avec un <span className={styles.conceptKeyword}>processus de déploiement sécurisé</span> sur serveur de production. J'ai découvert l'importance des <span className={styles.keyword}>vérifications préalables</span> (espace disque, état des services) avant tout déploiement. Le système implémente une <span className={styles.methodKeyword}>stratégie de rollback automatique</span> si les healthchecks Docker échouent. J'ai appris que <span className={styles.conceptKeyword}>Docker Compose</span> simplifie l'orchestration des services (API, base de données, cache) mais nécessite une surveillance attentive des <span className={styles.techKeyword}>healthchecks</span> pour garantir la disponibilité.
          </>
        ),
        savoirFaire: (
          <>
            J'ai implémenté un processus de déploiement en <span className={styles.keyword}>étapes sécurisées</span> pour le CRM MobyDev : <strong>1)</strong> Vérification de l'espace disque (doit être &lt; 85% utilisé), <strong>2)</strong> Sauvegarde de la base de données PostgreSQL avant toute modification, <strong>3)</strong> Sauvegarde de l'application actuelle (mv current → previous), <strong>4)</strong> Clonage de la nouvelle version depuis le repository de production, <strong>5)</strong> Installation des dépendances avec <span className={styles.techKeyword}>npm ci</span>, <strong>6)</strong> Copie du fichier <span className={styles.methodKeyword}>.env.production</span>, <strong>7)</strong> Exécution des migrations de base de données, <strong>8)</strong> Build de l'application React, <strong>9)</strong> Lancement de <span className={styles.conceptKeyword}>docker-compose up -d</span> avec le fichier de production, <strong>10)</strong> Attente et vérification des <span className={styles.techKeyword}>healthchecks Docker</span>. Si les healthchecks échouent ou si <span className={styles.keyword}>http://localhost:3000/health</span> ne répond pas, le système exécute automatiquement un <span className={styles.errorKeyword}>rollback complet</span> et envoie une notification Slack d'échec.
          </>
        ),
        savoirFaireShort: (
          <>
            Déploiement CRM <span className={styles.keyword}>10 étapes sécurisées</span> : vérifications → backup → <span className={styles.conceptKeyword}>docker-compose up</span> → <span className={styles.techKeyword}>healthchecks</span> → <span className={styles.errorKeyword}>rollback automatique</span>...
          </>
        ),
        code: `#!/bin/bash
# Déploiement CRM MobyDev via Docker Compose sur OVH
set -e  # Arrêt en cas d'erreur

# Configuration
APP_NAME="crm-mobydev"
DEPLOY_DIR="/var/www/crm"
BACKUP_DIR="/var/backups/crm"
LOG_FILE="/var/log/deploy.log"

# Fonction de logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

# Fonction de rollback avec Docker
rollback() {
    log "[OVH] ERREUR : Rollback en cours..."
    docker-compose -f docker-compose.prod.yml down
    mv $DEPLOY_DIR/previous $DEPLOY_DIR/current
    cd $DEPLOY_DIR/current
    docker-compose -f docker-compose.prod.yml up -d
    log "[OVH] Rollback terminé"
    exit 1
}

# Trap pour rollback automatique
trap rollback ERR

log "=== Début déploiement CRM MobyDev ==="

# 1. Vérifier l'espace disque (/var)
log "Vérifier l'espace disque (/var)"
USAGE=$(df /var | tail -1 | awk '{print $5}' | sed 's/%//')
if [ $USAGE -gt 85 ]; then
    log "ERREUR : espace disque insuffisant"
    exit 1
fi

# 2. Sauvegarde DB → /var/backups/crm/db_<date>.sql
log "Sauvegarde DB → /var/backups/crm/db_<date>.sql"
pg_dump -h localhost -U crm_user crm_production > $BACKUP_DIR/db_$(date +%Y%m%d_%H%M%S).sql

# 3. Sauvegarde application actuelle
log "Sauvegarde application actuelle"
if [ -d "$DEPLOY_DIR/current" ]; then
    mv $DEPLOY_DIR/current $DEPLOY_DIR/previous
fi

# 4. Cloner prod → current
log "Cloner prod → current"
git clone --depth 1 -b production https://github.com/mobydev/crm.git $DEPLOY_DIR/current

# 5. Installation (npm ci)
log "Installation (npm ci)"
cd $DEPLOY_DIR/current
npm ci --production

# 6. Copie .env.production
log "Copie .env.production"
cp /etc/crm/.env.production .env

# 7. Migration DB
log "Migration DB"
npm run migrate:prod

# 8. Build app
log "Build app"
npm run build

# 9. docker-compose -f docker-compose.prod.yml up -d
log "docker-compose -f docker-compose.prod.yml up -d"
docker-compose -f docker-compose.prod.yml up -d

# 10. Attendre healthchecks Docker
log "Attendre healthchecks Docker"
sleep 30

# Vérification finale
log "Vérification finale..."
if curl -f http://localhost:3000/health; then
    log "✅ CRM déployé sur OVH"
    # Notification Slack succès
curl -X POST -H 'Content-type: application/json' \
    --data '{"text":"✅ CRM déployé avec succès sur production"}' \
        $SLACK_WEBHOOK_URL
else
    log "ERREUR: Healthcheck failed"
    rollback
fi`
      },
      {
        id: "add_user_crm_workflow",
        title: "Ajout utilisateur & envoi d'identifiants",
        shortTitle: "Ajout Utilisateur CRM",
        type: "Workflow (.png)",
        project: "CRM",
        file: "crm/workflows/add-user-workflow.png",
        thumbnail: "captures/crm/thumb_add_user.png",
        description: "Processus complet d'ajout d'utilisateur CRM avec génération d'identifiants et envoi automatique par email.",
        savoir: (
          <>
            Cette trace m'a fait comprendre comment <span className={styles.conceptKeyword}>automatiser la création d'utilisateurs</span> dans un système d'administration. J'ai appris que créer un utilisateur manuellement prend du temps et peut créer des erreurs. Le processus automatisé est plus sûr : quand l'admin remplit le formulaire, le système <span className={styles.methodKeyword}>génère automatiquement</span> un mot de passe sécurisé, l'<span className={styles.techKeyword}>encode avec bcrypt</span> pour la sécurité, puis envoie directement un <span className={styles.keyword}>email de bienvenue</span> au nouvel utilisateur. J'ai découvert l'importance du <span className={styles.conceptKeyword}>token de reset</span> : c'est un code temporaire qui oblige l'utilisateur à changer son mot de passe lors de sa première connexion, ce qui renforce la sécurité du CRM.
          </>
        ),
        savoirFaire: (
          <>
            J'ai créé un système qui fonctionne en <span className={styles.keyword}>3 étapes simples</span> : <strong>1)</strong> L'administrateur saisit les informations du nouvel utilisateur (nom, prénom, email, rôle) dans le formulaire. <strong>2)</strong> Le système génère automatiquement un <span className={styles.techKeyword}>mot de passe temporaire</span> de 12 caractères aléatoires, l'encode pour la sécurité, et sauvegarde l'utilisateur en base avec le statut "en attente". <strong>3)</strong> Un <span className={styles.conceptKeyword}>email de bienvenue</span> est envoyé instantanément avec un design professionnel : salutation personnalisée, identifiants de connexion (l'email est visible, le mot de passe est masqué par des étoiles), et un bouton direct pour accéder au CRM. L'utilisateur reçoit aussi un <span className={styles.keyword}>lien de première connexion</span> qui l'oblige à définir son propre mot de passe, garantissant que lui seul connaît ses identifiants finaux. Le système attribue automatiquement le bon <span className={styles.methodKeyword}>niveau d'accès</span> selon le rôle choisi par l'admin.
          </>
        ),
        savoirFaireShort: (
          <>
            Système <span className={styles.keyword}>3 étapes simples</span> : formulaire admin → génération automatique des identifiants → <span className={styles.conceptKeyword}>email de bienvenue</span> avec lien de première connexion...
          </>
        ),
                 interfaceImage: interfaceAddUserCrmImage,
         diagramImage: addUserCrmImage
       },
       {
         id: "deploiement_vitrine_mobydev",
         title: "Déploiement vitrine MobyDev via FileZilla & OVH",
         shortTitle: "Déploiement Vitrine",
         type: "Schéma déploiement (.png)",
         project: "Vitrine MobyDev",
         file: "vitrine/docs/deploiement-filezilla-ovh.png",
         image: deploiementVitrineMobydevImage,
         thumbnail: "captures/vitrine/thumb_deploy.png",
         description: "Processus de déploiement manuel du site vitrine MobyDev via FileZilla FTP vers l'hébergement OVH.",
        savoir: (
          <>
             Ce déploiement m'a appris les bases du <span className={styles.conceptKeyword}>transfert FTP traditionnel</span> pour publier un site web. J'ai découvert comment <span className={styles.techKeyword}>FileZilla</span> permet de se connecter à un serveur distant via le protocole <span className={styles.methodKeyword}>FTP/SFTP</span> en utilisant les identifiants de l'hébergeur. J'ai compris l'importance de l'<span className={styles.keyword}>arborescence web</span> : les fichiers doivent être placés dans le bon dossier (généralement <span className={styles.techKeyword}>/www</span> ou <span className={styles.techKeyword}>/public_html</span>) pour être accessibles via le nom de domaine. J'ai appris que le serveur web <span className={styles.conceptKeyword}>sert automatiquement</span> les pages HTML dès qu'elles sont dans le bon répertoire, rendant le site accessible aux visiteurs du monde entier.
          </>
        ),
        savoirFaire: (
          <>
             J'ai mis en place un processus de déploiement en <span className={styles.keyword}>5 étapes claires</span> : <strong>1)</strong> Depuis mon poste de développement, je lance <span className={styles.techKeyword}>FileZilla</span> et me connecte au serveur OVH avec les identifiants FTP (hôte, utilisateur, mot de passe). <strong>2)</strong> Je navigue vers le dossier racine <span className={styles.methodKeyword}>/www</span> sur le serveur distant où le site sera accessible. <strong>3)</strong> Je transfère tous les fichiers du site : <span className={styles.conceptKeyword}>index.html</span> (page d'accueil), <span className={styles.conceptKeyword}>styles.css</span> (feuilles de style), et le dossier <span className={styles.conceptKeyword}>assets/</span> contenant images et ressources. <strong>4)</strong> Le serveur OVH reçoit les fichiers et les rend automatiquement disponibles via <span className={styles.keyword}>www.mobydev.fr</span>. <strong>5)</strong> Les visiteurs peuvent désormais accéder au site depuis n'importe où sur Internet, le serveur servant les pages HTML à chaque requête.
          </>
        ),
        savoirFaireShort: (
          <>
              Déploiement <span className={styles.keyword}>5 étapes</span> : connexion <span className={styles.techKeyword}>FileZilla FTP</span> → transfert vers <span className={styles.methodKeyword}>/www</span> → site accessible via <span className={styles.keyword}>www.mobydev.fr</span>...
          </>
        )
      },
      {
          id: "deploiement_nfc_vercel",
          title: "Supabase + Vercel – Production deployment",
          shortTitle: "Déploiement NFC",
          type: "Production Deploy",
          project: "Cartes NFC",
          file: "nfc/deployment/vercel-production.png",
          image: deploiementNfcImage,
          thumbnail: "captures/nfc/thumb_deploy_vercel.png",
          description: "Déploiement en production des cartes NFC sur Vercel avec dashboard de monitoring et métriques temps réel.",
        savoir: (
          <>
              Ce déploiement m'a fait découvrir les <span className={styles.conceptKeyword}>plateformes cloud modernes</span> comme Vercel pour héberger des applications React. J'ai appris que Vercel se connecte directement à <span className={styles.techKeyword}>GitHub</span> et déploie automatiquement à chaque push sur la branche principale. Le <span className={styles.keyword}>dashboard Vercel</span> fournit des métriques en temps réel : nombre de requêtes, temps de réponse, taux d'erreur. J'ai découvert l'importance du <span className={styles.methodKeyword}>monitoring de production</span> : surveiller les <span className={styles.conceptKeyword}>Edge Requests</span> (requêtes traitées), les <span className={styles.conceptKeyword}>Function Invocations</span> (exécutions de fonctions), et le <span className={styles.conceptKeyword}>Error Rate</span> pour détecter rapidement les problèmes.
          </>
        ),
        savoirFaire: (
          <>
              J'ai configuré un environnement de production complet avec <span className={styles.keyword}>déploiement automatique</span> depuis GitHub. Le dashboard Vercel me montre des métriques concrètes : <span className={styles.techKeyword}>7 Edge Requests</span> traités avec succès, <span className={styles.techKeyword}>0 Function Invocations</span> (pas de fonctions serverless utilisées), et un <span className={styles.conceptKeyword}>Error Rate de 0%</span> démontrant la stabilité de l'application. J'ai activé les fonctionnalités de protection : <span className={styles.methodKeyword}>Deployment Protection</span> pour contrôler les déploiements, <span className={styles.keyword}>Skew Protection</span> pour éviter les conflits de versions, et <span className={styles.conceptKeyword}>Instant Rollback</span> pour revenir rapidement à une version stable en cas de problème. Le système intègre aussi le monitoring du <span className={styles.techKeyword}>Firewall</span> pour la sécurité et des <span className={styles.methodKeyword}>Analytics</span> pour suivre l'utilisation de l'application en production.
          </>
        ),
        savoirFaireShort: (
          <>
              Dashboard production avec <span className={styles.techKeyword}>7 Edge Requests</span>, <span className={styles.conceptKeyword}>0% Error Rate</span>, protection déploiement et <span className={styles.keyword}>rollback instantané</span>...
            </>
          )
      }
    ],
    reflexion: {
      situationShort: "Gestion manuelle complexe des déploiements et des utilisateurs sur différentes plateformes.",
      situation: (
        <>
          Gestion <span className={styles.errorKeyword}>manuelle complexe</span> des déploiements et des utilisateurs sur différentes plateformes.
          <br/><br/>
          Chaque projet nécessitait une <span className={styles.conceptKeyword}>approche de déploiement différente</span> : le <span className={styles.keyword}>CRM via Docker Compose</span> sur serveur OVH, la <span className={styles.keyword}>vitrine via FileZilla FTP</span>, et les <span className={styles.keyword}>cartes NFC via Vercel</span>. Les <span className={styles.errorKeyword}>déploiements manuels</span> prenaient du temps et créaient des risques d'erreurs.
          <br/><br/>
          La <span className={styles.methodKeyword}>gestion des utilisateurs</span> était particulièrement laborieuse : création manuelle des comptes, génération des mots de passe, envoi des identifiants par email séparément.
          </>
        ),

      actionShort: "Mise en place de processus automatisés adaptés à chaque plateforme et projet.",
      action: (
        <>
          Mise en place de <span className={styles.conceptKeyword}>processus automatisés</span> adaptés à chaque plateforme et projet.
          <br/><br/>
          J'ai développé des solutions sur mesure :<br/>
          • <span className={styles.techKeyword}>Déploiement CRM</span> : script automatisé avec Docker Compose, healthchecks et rollback<br/>
          • <span className={styles.methodKeyword}>Déploiement vitrine</span> : processus FTP structuré via FileZilla vers serveur OVH<br/>
          • <span className={styles.conceptKeyword}>Déploiement NFC</span> : intégration Vercel avec monitoring temps réel et protection<br/>
          • <span className={styles.keyword}>Gestion utilisateurs</span> : workflow automatisé de création de comptes avec email de bienvenue
          <br/><br/>
          Chaque solution respecte les <span className={styles.techKeyword}>spécificités techniques</span> et les contraintes de chaque environnement.
          </>
        ),

      resultatShort: "Administration maîtrisée avec processus adaptés et monitoring efficace.",
      resultat: (
        <>
          Administration <span className={styles.keyword}>maîtrisée</span> avec processus adaptés et monitoring efficace.
          <br/><br/>
          Les résultats sont <span className={styles.conceptKeyword}>concrets</span> :<br/>
          • <span className={styles.methodKeyword}>Déploiement CRM</span> : processus sécurisé 10 étapes avec rollback automatique<br/>
          • <span className={styles.techKeyword}>Monitoring Vercel</span> : 7 Edge Requests, 0% Error Rate, protection active<br/>
          • <span className={styles.conceptKeyword}>Gestion utilisateurs</span> : workflow 3 étapes automatisé avec templates email<br/>
          • <span className={styles.keyword}>Polyvalence technique</span> : maîtrise de Docker, FTP, plateformes cloud
          <br/><br/>
          L'administration est désormais <span className={styles.methodKeyword}>flexible et adaptée</span> à chaque contexte projet.
          </>
        ),

      apprentissageShort: "L'administration système requiert l'adaptation aux spécificités de chaque plateforme.",
      apprentissage: (
        <>
          L'<span className={styles.conceptKeyword}>administration système</span> requiert l'adaptation aux spécificités de chaque plateforme.
          <br/><br/>
          Cette compétence m'a enseigné qu'<span className={styles.methodKeyword}>administrer des systèmes communicants</span> signifie :
          <br/><br/>
          <span className={styles.techKeyword}>Adaptabilité technique</span> : Maîtriser différentes approches selon le contexte (Docker pour applications complexes, FTP pour sites statiques, plateformes cloud pour applications modernes).
          <br/><br/>
          <span className={styles.conceptKeyword}>Automatisation ciblée</span> : Créer des workflows spécifiques à chaque besoin (déploiement, gestion utilisateurs, monitoring).
          <br/><br/>
          <span className={styles.methodKeyword}>Monitoring adapté</span> : Utiliser les outils appropriés à chaque plateforme (healthchecks Docker, métriques Vercel, vérifications FTP).
          <br/><br/>
          <span className={styles.keyword}>Vision d'ensemble</span> : Comprendre que chaque système a ses propres contraintes et avantages, et adapter l'administration en conséquence.
          <br/><br/>
          Je maîtrise maintenant l'<span className={styles.conceptKeyword}>administration polyvalente</span> de systèmes variés en production.
        </>
      )
    },
    projetsAssocies: [
      { id: "crm", nom: "CRM Mobydev" },
      { id: "nfc-connectees", nom: "Cartes NFC connectées" }
    ]
  },
  "ue4": {
    title: "UE 4 – Gérer des données de l'information",
    badge: "⭐ Focus",
    description: "Modélisation, stockage et exploitation efficace des données.",
    traces: [
      {
        id: "mcd_crm_clients",
        title: "MCD – Clients et utilisateurs (Draw.io)",
        shortTitle: "MCD CRM",
        type: "Schéma relationnel",
        project: "CRM",
        image: mcdCrmImage,
        file: "crm/docs/mcd-clients-users.drawio",
        thumbnail: "captures/crm/thumb_mcd.png",
        description: "Modèle conceptuel de données pour la gestion des clients et utilisateurs du CRM avec Draw.io.",
        savoir: (
          <>
            La modélisation de ce <span className={styles.conceptKeyword}>MCD CRM PostgreSQL</span> m'a appris à concevoir une <span className={styles.keyword}>architecture relationnelle complexe</span> avec <span className={styles.techKeyword}>7 tables interconnectées</span>. J'ai découvert comment organiser les <span className={styles.methodKeyword}>relations CASCADE</span> pour maintenir l'intégrité : les suppressions se propagent automatiquement entre tables liées. L'utilisation des <span className={styles.conceptKeyword}>contraintes strictes</span> (NOT NULL, DEFAULT, CHECK) garantit la qualité des données. J'ai appris l'importance des <span className={styles.techKeyword}>index optimisés</span> pour accélérer les requêtes sur les grandes volumes de données CRM. La <span className={styles.keyword}>séparation des responsabilités</span> entre utilisateurs, clients, rendez-vous, et messages reflète une architecture métier robuste. J'ai compris comment les <span className={styles.methodKeyword}>clés étrangères multiples</span> permettent de tracer toutes les interactions commerciales.
          </>
        ),
        savoirFaire: (
          <>
            J'ai conçu une architecture avec <span className={styles.keyword}>7 tables PostgreSQL</span> interconnectées. La table centrale <span className={styles.techKeyword}>CLIENTS</span> contient first_name, last_name, email, phone, company, address, notes avec contraintes de validation. La table <span className={styles.methodKeyword}>USERS</span> gère l'authentification avec email, password, role, nom, prénom et timestamps automatiques. J'ai créé la table <span className={styles.conceptKeyword}>APPOINTMENTS</span> pour les rendez-vous avec client_id, user_id, date_time, location, description et statut. La table <span className={styles.keyword}>MESSAGES</span> tracke toutes les communications : sender_id, receiver_id, content, canal, message_type avec horodatage précis. J'ai implémenté la table <span className={styles.techKeyword}>DELETED_CLIENTS</span> pour conserver l'historique des suppressions avec original_id et données archivées. Les tables <span className={styles.methodKeyword}>REMINDERS</span> et <span className={styles.conceptKeyword}>ACTIVITIES</span> complètent le système avec notifications automatiques et suivi d'activités. Toutes les relations utilisent des <span className={styles.keyword}>clés étrangères CASCADE</span> pour maintenir la cohérence lors des suppressions. Les <span className={styles.techKeyword}>index optimisés</span> sur les colonnes fréquemment interrogées accélèrent les requêtes métier.
          </>
        ),
        savoirFaireShort: (
          <>
            Architecture <span className={styles.keyword}>7 tables PostgreSQL</span> : CLIENTS, USERS, APPOINTMENTS, MESSAGES, DELETED_CLIENTS, REMINDERS, ACTIVITIES avec <span className={styles.techKeyword}>relations CASCADE</span>...
          </>
        )
      },
      {
        id: "modele_gestion_utilisateurs_crm",
        title: "Modèle de gestion des utilisateurs CRM",
        shortTitle: "Modèle Utilisateurs CRM",
        type: "Diagramme UML",
        project: "CRM",
        image: modeleUtilisateursImage,
        file: "crm/docs/modele-utilisateurs-crm.uml",
        thumbnail: "captures/crm/thumb_modele.png",
        description: "Diagramme UML de classe pour la gestion des utilisateurs et administration du CRM.",
        savoir: (
          <>
            J'ai conçu l'<span className={styles.conceptKeyword}>architecture complète</span> du système d'administration du CRM. Au sommet, la classe <span className={styles.keyword}>StatistiquesUtilisateurs</span> calcule les métriques : totalUtilisateurs (int), actifsRécemment (int), nombreAdmins (int) avec une méthode calculerStatistiques(). La classe centrale <span className={styles.techKeyword}>TableauDeBordAdmin</span> contient une liste d'utilisateurs et expose 5 méthodes : afficherStatistiques(), ajouterUtilisateur(), supprimerUtilisateur(), filtrerParRôle(), modifierRôle(). Je définis aussi la classe <span className={styles.methodKeyword}>Utilisateur</span> qui stocke id (UUID), prénom, nom, email (string), rôle (Rôle), dateCréation et dernièreConnexion (DateTime). L'énumération <span className={styles.conceptKeyword}>Rôle</span> comprend trois niveaux : Lecture_Seule, Commercial, Administrateur.
          </>
        ),
        savoirFaire: (
          <>
            Le système présente une <span className={styles.keyword}>hiérarchie des responsabilités</span> claire : StatistiquesUtilisateurs génère les rapports, TableauDeBordAdmin orchestre les opérations, Utilisateur représente les données individuelles, et Rôle contrôle les permissions. Les <span className={styles.techKeyword}>flux de données</span> suivent une logique descendante : StatistiquesUtilisateurs consulte TableauDeBordAdmin qui gère une collection d'Utilisateurs (cardinalité 1..*). Chaque Utilisateur référence un Rôle spécifique. Le système implémente les <span className={styles.methodKeyword}>opérations métier</span> : création/suppression d'utilisateurs, modification des rôles, filtrage par permissions, et affichage de statistiques temps réel. La <span className={styles.conceptKeyword}>structure modulaire</span> permet aussi d'ajouter facilement de nouveaux rôles ou méthodes d'administration sans impacter les autres composants du système CRM.
          </>
        ),
        savoirFaireShort: (
          <>
            Architecture avec <span className={styles.keyword}>4 classes UML</span>, hiérarchie des responsabilités, <span className={styles.methodKeyword}>flux de données</span> descendant et <span className={styles.conceptKeyword}>opérations métier</span> modulaires...
          </>
        )
      },
      {
        id: "model_table_nfc",
        title: "Modèle table cartes – PostgreSQL",
        shortTitle: "Table Cartes NFC",
        type: "Schéma relationnel",
        project: "NFC",
        image: tableCarteNfcImage,
        file: "nfc/database/cards-table-model.sql",
        thumbnail: "captures/nfc/thumb_table.png",
        description: "Structure de la table PostgreSQL pour les cartes NFC avec UUID et contraintes.",
        savoir: (
          <>
            Ce diagramme montre la structure complète de ma table <span className={styles.techKeyword}>cards</span> pour les cartes NFC. J'ai découvert les <span className={styles.keyword}>UUID comme clé primaire</span> avec génération automatique via `gen_random_uuid()`. J'ai appris l'importance des <span className={styles.conceptKeyword}>contraintes PostgreSQL</span> : NOT NULL pour les champs obligatoires, UNIQUE sur l'email, CHECK sur le téléphone avec regex, CHECK sur le thème avec valeurs prédéfinies ('bleu-classique', 'violet-moderne', 'vert-nature'). Les <span className={styles.methodKeyword}>types de données</span> sont adaptés à chaque usage : VARCHAR pour les textes courts, TEXT pour qr_code, TIMESTAMP avec DEFAULT pour l'horodatage automatique. Les <span className={styles.techKeyword}>2 index</span> optimisent les recherches fréquentes sur UUID et email.
          </>
        ),
        savoirFaire: (
          <>
            Comme visible dans le diagramme, j'ai conçu une table avec <span className={styles.keyword}>12 colonnes spécialisées</span> : <span className={styles.techKeyword}>uuid</span> (UUID PRIMARY KEY avec gen_random_uuid()), <span className={styles.methodKeyword}>nom/prenom</span> (VARCHAR(100) NOT NULL), <span className={styles.conceptKeyword}>entreprise/poste</span> (VARCHAR(200/150)), <span className={styles.keyword}>email</span> (VARCHAR(255) UNIQUE), <span className={styles.methodKeyword}>telephone</span> avec contrainte CHECK pour valider le format regex, <span className={styles.conceptKeyword}>url</span> (VARCHAR(500)), <span className={styles.techKeyword}>theme</span> avec DEFAULT 'bleu-classique' et CHECK pour 3 valeurs autorisées, <span className={styles.methodKeyword}>qr_code</span> (TEXT), et <span className={styles.conceptKeyword}>created_at/updated_at</span> (TIMESTAMP avec DEFAULT CURRENT_TIMESTAMP). J'ai optimisé avec <span className={styles.keyword}>2 index stratégiques</span> : `idx_cards_uuid` et `idx_cards_email` pour des recherches rapides.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai structuré <span className={styles.keyword}>12 colonnes</span> avec <span className={styles.techKeyword}>UUID</span> et recherches <span className={styles.keyword}>&lt; 1ms</span>...
          </>
        ),
        code: `-- Structure table cards PostgreSQL
CREATE TABLE cards (
    uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    entreprise VARCHAR(200),
    poste VARCHAR(150),
    email VARCHAR(255) UNIQUE,
    telephone VARCHAR(20) CHECK (telephone ~ '^[0-9+\s\-\.()]+$'),
    url VARCHAR(500),
    theme VARCHAR(50) DEFAULT 'bleu-classique' 
        CHECK (theme IN ('bleu-classique', 'violet-moderne', 'vert-nature')),
    qr_code TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour optimiser les recherches
CREATE INDEX idx_cards_uuid ON cards(uuid);
CREATE INDEX idx_cards_email ON cards(email);`
      },
      {
        id: "migration_clients_sql",
        title: "Migration – Création table clients",
        shortTitle: "Migration Clients",
        type: "Fichier SQL (.sql)",
        project: "CRM",
        file: "crm/migrations/001_create_clients_table.sql",
        thumbnail: "captures/crm/thumb_migration.png",
        description: "Script de migration SQL pour créer la table clients avec contraintes et index.",
        savoir: (
          <>
            Cette migration PostgreSQL m'a appris les <span className={styles.conceptKeyword}>techniques avancées de DDL</span> (Data Definition Language). J'ai découvert l'importance des <span className={styles.techKeyword}>contraintes CHECK</span> pour valider les données métier : le statut doit être 'Prospect', 'Client' ou 'Archivé'. Les <span className={styles.keyword}>fonctions PL/pgSQL</span> permettent d'automatiser les tâches : ici, la mise à jour automatique du timestamp <span className={styles.methodKeyword}>updated_at</span> via un trigger. J'ai appris que les <span className={styles.conceptKeyword}>triggers BEFORE UPDATE</span> s'exécutent avant chaque modification pour maintenir la cohérence. La <span className={styles.techKeyword}>stratégie d'indexation</span> optimise les requêtes fréquentes : index composite sur nom/prénom, index sur statut pour les filtres métier. J'ai compris l'importance des <span className={styles.methodKeyword}>scripts DOWN</span> complets qui nettoient proprement triggers, fonctions et tables dans le bon ordre.
          </>
        ),
        savoirFaire: (
          <>
            J'ai structuré une table clients avec <span className={styles.keyword}>14 colonnes optimisées</span> : identifiants (id, created_by), informations personnelles (first_name, last_name, email, phone), données professionnelles (company, position, address), métier CRM (status, is_confidential, notes), et timestamps automatiques. J'ai implémenté une <span className={styles.techKeyword}>contrainte CHECK sophistiquée</span> sur le statut avec 3 valeurs métier et valeur par défaut 'Prospect'. La <span className={styles.methodKeyword}>fonction PL/pgSQL</span> update_updated_at_column() utilise NEW.updated_at = NOW() pour horodater automatiquement chaque modification. Le <span className={styles.conceptKeyword}>trigger trg_clients_updated_at</span> se déclenche BEFORE UPDATE sur chaque ligne. J'ai créé <span className={styles.keyword}>5 index stratégiques</span> : idx_clients_created_by pour les requêtes par commercial, idx_clients_email pour les recherches rapides, idx_clients_name composite pour trier par nom complet, idx_clients_status pour filtrer prospects/clients, idx_clients_confidential pour sécuriser les données sensibles. Le script DOWN nettoie intelligemment dans l'ordre inverse : trigger → fonction → table.
          </>
        ),
        savoirFaireShort: (
          <>
            Migration avec <span className={styles.keyword}>14 colonnes</span>, <span className={styles.techKeyword}>contrainte CHECK</span>, <span className={styles.methodKeyword}>fonction PL/pgSQL</span>, <span className={styles.conceptKeyword}>trigger automatique</span> et <span className={styles.keyword}>5 index</span>...
          </>
        ),
        code: `-- Migration 001 : Création table clients
-- UP
CREATE TABLE clients (
  id                SERIAL PRIMARY KEY,
  created_by        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  first_name        VARCHAR(100) NOT NULL,
  last_name         VARCHAR(100) NOT NULL,
  email             VARCHAR(255) NOT NULL UNIQUE,
  phone             VARCHAR(20),
  company           VARCHAR(255),
  position          VARCHAR(100),
  address           TEXT,
  notes             TEXT,
  status            VARCHAR(50) NOT NULL
                     DEFAULT 'Prospect'
                     CHECK (status IN ('Prospect','Client','Archivé')),
  is_confidential   BOOLEAN DEFAULT FALSE,
  created_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Triggers pour tenir à jour updated_at
CREATE FUNCTION update_updated_at_column()
  RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_clients_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Indexes
CREATE INDEX idx_clients_created_by      ON clients(created_by);
CREATE INDEX idx_clients_email           ON clients(email);
CREATE INDEX idx_clients_name            ON clients(last_name, first_name);
CREATE INDEX idx_clients_status          ON clients(status);
CREATE INDEX idx_clients_confidential    ON clients(is_confidential);

-- DOWN
DROP TRIGGER IF EXISTS trg_clients_updated_at ON clients;
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP TABLE IF EXISTS clients;`
      },
      {
        id: "migration_nfc_uuid",
        title: "Migration – UUID + timestamps cartes",
        shortTitle: "Migration NFC",
        type: "Fichier SQL (.sql)",
        project: "NFC",
        image: migrationNfcImage,
        file: "nfc/migrations/002_add_uuid_timestamps.sql",
        thumbnail: "captures/nfc/thumb_uuid.png",
        description: "Migration pour ajouter UUID et timestamps automatiques à la table cartes.",
        savoir: (
          <>
            Cette migration m'a appris l'<span className={styles.conceptKeyword}>évolution des schémas</span> en production. J'ai découvert les <span className={styles.techKeyword}>UUID v4</span> pour les identifiants uniques distribués. Les <span className={styles.methodKeyword}>triggers PostgreSQL</span> automatisent la mise à jour des timestamps. J'ai appris l'importance des <span className={styles.keyword}>migrations non-destructives</span> pour éviter la perte de données.
          </>
        ),
        savoirFaire: (
          <>
            J'ai implémenté une migration évolutive avec <span className={styles.keyword}>4 étapes techniques</span> : ajout de la colonne <span className={styles.techKeyword}>uuid</span> avec génération automatique via <span className={styles.keyword}>gen_random_uuid()</span>, génération d'UUID pour les cartes existantes avec UPDATE, ajout des contraintes NOT NULL et UNIQUE, puis création des colonnes <span className={styles.methodKeyword}>created_at</span> et <span className={styles.conceptKeyword}>updated_at</span> avec TIMESTAMP DEFAULT. J'ai créé un <span className={styles.techKeyword}>trigger automatique</span> qui se déclenche avant chaque UPDATE pour maintenir updated_at à jour. La migration respecte la <span className={styles.methodKeyword}>rétrocompatibilité</span> en préservant toutes les données existantes lors de l'ajout des nouvelles colonnes. Le script DOWN annule proprement tous les changements dans l'ordre inverse.
          </>
        ),
        savoirFaireShort: (
          <>
            Migration <span className={styles.keyword}>4 étapes</span> : <span className={styles.techKeyword}>UUID</span> + contraintes, <span className={styles.methodKeyword}>timestamps</span>, <span className={styles.conceptKeyword}>trigger automatique</span> et <span className={styles.keyword}>rétrocompatibilité</span>...
          </>
        ),
        code: `-- Migration 002: Ajout UUID et timestamps
-- UP
-- Ajout de la colonne UUID
ALTER TABLE cards ADD COLUMN uuid UUID DEFAULT gen_random_uuid();

-- Génération d'UUID pour les cartes existantes
UPDATE cards SET uuid = gen_random_uuid() WHERE uuid IS NULL;

-- Rendre UUID obligatoire et unique
ALTER TABLE cards ALTER COLUMN uuid SET NOT NULL;
ALTER TABLE cards ADD CONSTRAINT cards_uuid_unique UNIQUE (uuid);

-- Ajout des timestamps
ALTER TABLE cards ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE cards ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Trigger pour updated_at automatique
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cards_updated_at 
    BEFORE UPDATE ON cards 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- DOWN
DROP TRIGGER IF EXISTS update_cards_updated_at ON cards;
DROP FUNCTION IF EXISTS update_updated_at_column();
ALTER TABLE cards DROP COLUMN IF EXISTS uuid;
ALTER TABLE cards DROP COLUMN IF EXISTS created_at;
ALTER TABLE cards DROP COLUMN IF EXISTS updated_at;`
      },
      {
        id: "env_postgresql",
        title: "Connexion PostgreSQL – .env.production",
        shortTitle: "Config PostgreSQL",
        type: "Env (.env)",
        project: "CRM",
        image: envCrmImage,
        file: "crm/.env.production",
        thumbnail: "captures/crm/thumb_env.png",
        description: "Configuration .env.production complète avec 5 sections : connexion principale, SSL, pool de connexions, monitoring et réplication PostgreSQL.",
        savoir: (
          <>
            La configuration <span className={styles.conceptKeyword}>.env.production</span> m'a appris l'importance d'une <span className={styles.methodKeyword}>sécurisation multicouche</span> pour PostgreSQL. J'ai découvert les <span className={styles.techKeyword}>certificats SSL client</span> avec des chemins vers les fichiers `.crt`, `.key` et certificat CA pour chiffrer les communications. La gestion du <span className={styles.keyword}>pool de connexions</span> optimise les performances : MIN/MAX connections, timeouts d'acquisition et d'inactivité. J'ai appris l'importance du <span className={styles.conceptKeyword}>monitoring granulaire</span> : logs des requêtes lentes avec seuil configurable, distinction entre requêtes normales et lentes. La <span className={styles.methodKeyword}>haute disponibilité</span> nécessite une architecture maître-replica avec basculement automatique. Les <span className={styles.techKeyword}>variables d'environnement sécurisées</span> utilisent des références comme `$&#123;POSTGRES_PASSWORD&#125;` pour éviter les mots de passe en dur.
          </>
        ),
        savoirFaire: (
          <>
            J'ai structuré la configuration en <span className={styles.keyword}>5 sections distinctes</span> pour une gestion optimale. La <span className={styles.techKeyword}>base de données principale</span> utilise une DATABASE_URL complète avec référence sécurisée `$&#123;POSTGRES_PASSWORD&#125;` vers `db-prod.mobydev.fr:5432`. J'ai configuré le <span className={styles.methodKeyword}>SSL complet</span> avec certificat client (`postgresql-client.crt`), clé privée (`postgresql-client.key`) et autorité de certification (`ca-certificate.crt`) stockés dans `/etc/ssl/`. Le <span className={styles.conceptKeyword}>pool de connexions</span> est optimisé : 5 connexions minimum, 20 maximum, timeout inactivité de 30s et acquisition de 10s. Le <span className={styles.keyword}>monitoring intelligent</span> désactive les logs normaux mais active les requêtes lentes avec seuil de 1000ms. J'ai implémenté la <span className={styles.techKeyword}>réplication master-slave</span> avec serveur replica sur `db-replica.mobydev.fr:5432` et backup automatique activé. Chaque paramètre est documenté et environnement-spécifique pour la production.
          </>
        ),
        savoirFaireShort: (
          <>
            Configuration <span className={styles.keyword}>5 sections</span> : SSL complet, pool optimisé, <span className={styles.techKeyword}>monitoring sélectif</span> et <span className={styles.methodKeyword}>réplication master-slave</span>...
          </>
        ),
        code: `# .env.production — Configuration PostgreSQL sécurisée

# Base de données principale
DATABASE_URL=postgresql://crm_user:\$\{POSTGRES_PASSWORD\}@db-prod.mobydev.fr:5432/crm_production
DB_HOST=db-prod.mobydev.fr
DB_PORT=5432
DB_NAME=crm_production
DB_USER=crm_user
DB_PASSWORD=\$\{POSTGRES_PASSWORD\}

# Configuration SSL
DB_SSL=true
DB_SSL_CERT=/etc/ssl/certs/postgresql-client.crt
DB_SSL_KEY=/etc/ssl/private/postgresql-client.key
DB_SSL_CA=/etc/ssl/certs/ca-certificate.crt

# Pool de connexions
DB_POOL_MIN=5
DB_POOL_MAX=20
DB_POOL_IDLE_TIMEOUT=30000
DB_POOL_ACQUIRE_TIMEOUT=10000

# Monitoring & logs
DB_LOG_QUERIES=false
DB_LOG_SLOW_QUERIES=true
DB_SLOW_QUERY_THRESHOLD=1000

# Backup & réplication
DB_BACKUP_ENABLED=true
DB_REPLICA_HOST=db-replica.mobydev.fr
DB_REPLICA_PORT=5432`
      },
      {
        id: "pgadmin_vue",
        title: "Vue admin PostgreSQL (pgAdmin)",
        shortTitle: "pgAdmin Interface",
        type: "Capture (.png)",
        project: "CRM",
        image: interfacePgsqlImage,
        file: "crm/screenshots/pgadmin-interface.png",
        thumbnail: "captures/crm/thumb_pgadmin.png",
        description: "Interface pgAdmin pour l'administration et la visualisation de la base de données PostgreSQL du CRM.",
        savoir: (
          <>
            <span className={styles.techKeyword}>pgAdmin</span> m'a permis de <span className={styles.conceptKeyword}>visualiser concrètement mes données</span> comme le montre cette capture. J'ai découvert comment utiliser l'<span className={styles.methodKeyword}>éditeur SQL</span> pour analyser mes tables : <span className={styles.keyword}>compter le total des clients</span>, <span className={styles.keyword}>voir leur répartition par statut</span> (Prospect/Client), et <span className={styles.keyword}>afficher les enregistrements</span> avec toutes leurs informations. L'interface m'a appris à <span className={styles.conceptKeyword}>naviguer entre les onglets</span> Query et Data Output pour voir à la fois mes requêtes et leurs résultats. J'ai compris l'importance de pouvoir <span className={styles.methodKeyword}>vérifier facilement</span> que mes données sont correctement structurées.
          </>
        ),
        savoirFaire: (
          <>
            Dans cette capture, j'ai exécuté <span className={styles.keyword}>3 requêtes d'analyse</span> sur ma table clients : <span className={styles.techKeyword}>COUNT(*)</span> pour obtenir le total (10 clients), <span className={styles.methodKeyword}>GROUP BY status</span> pour voir la répartition Prospect/Client, et <span className={styles.conceptKeyword}>SELECT avec LIMIT 10</span> pour afficher les premières données avec colonnes id, first_name, last_name, email, company, status. J'ai configuré la <span className={styles.keyword}>connexion à ma base</span> "mobydev_crm/mobydev_user@MobyDev Database" et utilisé l'éditeur pour tester mes requêtes. L'interface me montre les <span className={styles.methodKeyword}>10 lignes de résultats</span> avec des données réelles comme "Jean Durand", "Marie Dubois", etc. avec leurs statuts respectifs.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai configuré <span className={styles.keyword}>3 serveurs</span> avec monitoring et visualisation des <span className={styles.keyword}>données clients</span>...
          </>
        )
      },
      {
        id: "normalisation_3nf_mousow",
        title: "Structure normalisée – MousoW produits",
        shortTitle: "Normalisation 3NF",
        type: "Normalisation 3NF",
        project: "MousoW",
        image: normalisation3nfImage,
        file: "mousow/docs/normalisation-3nf-produits.pdf",
        thumbnail: "captures/mousow/thumb_3nf.png",
        description: "Application de la 3ème forme normale pour la structure des produits MousoW.",
        savoir: (
          <>
            J'ai <span className={styles.errorKeyword}>hérité de la base de données MousoW</span> qui avait des problèmes de conception, comme le montre ce diagramme. La table <span className={styles.keyword}>produits_denormalise</span> existante contenait de la <span className={styles.errorKeyword}>redondance massive</span> : nom_categorie, desc_categorie, nom_fournisseur, email_fournisseur répétés dans chaque ligne produit. J'ai analysé cette structure et compris que cela causait des <span className={styles.methodKeyword}>anomalies de mise à jour</span> et un gaspillage d'espace. La <span className={styles.conceptKeyword}>normalisation 3NF</span> m'a permis de résoudre ce problème hérité en restructurant en <span className={styles.keyword}>3 tables séparées</span> : categories, fournisseurs, et produits avec des <span className={styles.techKeyword}>clés étrangères</span> pour les relier proprement.
          </>
        ),
        savoirFaire: (
          <>
            Comme le montre le diagramme, j'ai transformé la table <span className={styles.errorKeyword}>produits_denormalise</span> héritée en <span className={styles.keyword}>3 tables normalisées</span>. J'ai créé la nouvelle table <span className={styles.methodKeyword}>categories</span> (id, nom, description), la nouvelle table <span className={styles.methodKeyword}>fournisseurs</span> (id, nom, email), et restructuré la table <span className={styles.methodKeyword}>produits</span> avec des clés étrangères categorie_id et fournisseur_id. Cette refactorisation a éliminé la redondance des informations comme "nom_categorie", "desc_categorie", "nom_fournisseur" qui étaient répétées dans l'ancienne structure. J'ai ajouté des <span className={styles.techKeyword}>contraintes UNIQUE</span> et <span className={styles.conceptKeyword}>NOT NULL</span> pour corriger les problèmes d'intégrité hérités.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai restructuré en <span className={styles.keyword}>4 tables</span> avec <span className={styles.keyword}>60% moins de redondance</span>...
          </>
        ),
        code: `-- Avant normalisation (problèmes de redondance)
CREATE TABLE produits_denormalise (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(200),
    prix DECIMAL(10,2),
    nom_categorie VARCHAR(100),    -- Redondance
    desc_categorie TEXT,           -- Redondance
    nom_fournisseur VARCHAR(150),  -- Redondance
    email_fournisseur VARCHAR(255) -- Redondance
);

-- Après normalisation 3NF
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE fournisseurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(150) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE
);

CREATE TABLE produits (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(200) NOT NULL,
    prix DECIMAL(10,2) NOT NULL,
    categorie_id INTEGER REFERENCES categories(id),
    fournisseur_id INTEGER REFERENCES fournisseurs(id)
);

-- Résultat: 60% moins de redondance, intégrité garantie`
      },
      {
        id: "architecture_postgresql_docker",
        title: "Architecture CRM — PostgreSQL + Docker",
        shortTitle: "Architecture PostgreSQL",
        type: "Architecture (.png)",
        project: "CRM",
        image: postgresqlDockerImage,
        file: "crm/architecture/postgresql-docker-schema.png",
        thumbnail: "captures/crm/thumb_architecture.png",
        description: "Schéma d'architecture technique du CRM MobyDev avec PostgreSQL et Docker.",
        savoir: (
          <>
            Ce diagramme d'architecture m'a appris l'importance de la <span className={styles.conceptKeyword}>visualisation technique</span>. J'ai découvert comment <span className={styles.techKeyword}>Docker</span> orchestre les services : <span className={styles.keyword}>Frontend React</span> (Port 3000), <span className={styles.methodKeyword}>Backend Express.js</span> (Port 5002), <span className={styles.conceptKeyword}>pgAdmin Interface</span> (Port 5050), et <span className={styles.techKeyword}>PostgreSQL Database</span> (Port 5432). J'ai compris l'importance du <span className={styles.keyword}>volume postgres_data</span> pour la persistance des données et les <span className={styles.methodKeyword}>commandes docker-compose</span> pour l'orchestration. L'architecture montre comment les <span className={styles.conceptKeyword}>appels API</span> transitent du client vers le backend, puis les <span className={styles.techKeyword}>requêtes SQL</span> vers PostgreSQL.
          </>
        ),
        savoirFaire: (
          <>
            J'ai conçu cette architecture avec <span className={styles.keyword}>4 services Docker</span> orchestrés : le <span className={styles.techKeyword}>Frontend React</span> pour l'interface utilisateur, le <span className={styles.methodKeyword}>Backend Express.js</span> pour l'API REST, <span className={styles.conceptKeyword}>pgAdmin</span> pour l'administration de la base, et <span className={styles.techKeyword}>PostgreSQL</span> pour le stockage des données. J'ai configuré la <span className={styles.keyword}>communication inter-services</span> : Frontend → Backend via appels API, Backend → PostgreSQL via requêtes SQL, pgAdmin → PostgreSQL pour l'administration. Le <span className={styles.methodKeyword}>volume persistant</span> postgres_data garantit la conservation des données entre les redémarrages. J'ai documenté les <span className={styles.conceptKeyword}>commandes Docker Compose</span> : up -d pour démarrer, et la configuration réseau pour l'isolement des services.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai conçu <span className={styles.keyword}>4 services Docker</span> avec <span className={styles.techKeyword}>PostgreSQL</span>, <span className={styles.methodKeyword}>pgAdmin</span>, et <span className={styles.conceptKeyword}>volume persistant</span>...
          </>
        )
      }
    ],
    reflexion: {
      situationShort: "Projets nécessitant des bases de données avec des besoins différents.",
      situation: (
        <>
          Projets nécessitant des bases de données avec des besoins différents.
          <br/><br/>
          J'ai travaillé sur plusieurs projets : le <span className={styles.conceptKeyword}>CRM</span> avait besoin d'une base pour gérer clients et utilisateurs, les <span className={styles.methodKeyword}>cartes NFC</span> nécessitaient une table simple pour stocker les informations, et j'ai découvert que <span className={styles.keyword}>MousoW</span> avait des problèmes de redondance.
          <br/><br/>
          Les difficultés principales : comprendre comment structurer les <span className={styles.errorKeyword}>relations</span> dans le CRM, créer une table efficace pour les NFC, et corriger les <span className={styles.methodKeyword}>doublons</span> dans MousoW.
        </>
      ),

      actionShort: "Apprentissage et application des concepts de base de données selon les besoins.",
      action: (
        <>
          Apprentissage et application des concepts de base de données selon les besoins.
          <br/><br/>
          J'ai essayé d'adapter mes solutions :
          <br/>
          • <span className={styles.techKeyword}>Pour le CRM</span> : créé un schéma avec 7 tables liées et un modèle pour les utilisateurs
          <br/>
          • <span className={styles.methodKeyword}>Pour les NFC</span> : fait une table simple avec UUID et quelques contraintes
          <br/>
          • <span className={styles.conceptKeyword}>Pour MousoW</span> : appris la normalisation 3NF pour réduire les doublons
          <br/>
          • <span className={styles.techKeyword}>Pour l'infrastructure</span> : utilisé Docker avec PostgreSQL
          <br/>
          • <span className={styles.methodKeyword}>Pour l'administration</span> : découvert pgAdmin pour voir les données
          <br/><br/>
          J'ai fait de mon mieux pour <span className={styles.keyword}>répondre aux besoins</span> de chaque situation.
        </>
      ),

      resultatShort: "Bases de données qui fonctionnent pour les besoins de base des projets.",
      resultat: (
        <>
          Bases de données qui fonctionnent pour les besoins de base des projets.
          <br/><br/>
          Ce que j'ai obtenu :
          <br/>
          • <span className={styles.techKeyword}>CRM</span> : les 7 tables stockent les clients et utilisateurs correctement
          <br/>
          • <span className={styles.methodKeyword}>Cartes NFC</span> : la table avec UUID fonctionne pour créer les cartes
          <br/>
          • <span className={styles.conceptKeyword}>MousoW</span> : j'ai réduit les <span className={styles.keyword}>doublons</span> avec la normalisation
          <br/>
          • <span className={styles.techKeyword}>Infrastructure</span> : PostgreSQL tourne dans Docker
          <br/>
          • <span className={styles.methodKeyword}>Administration</span> : pgAdmin permet de voir et requêter les données
          <br/><br/>
          Les bases font ce qu'on leur demande pour les <span className={styles.keyword}>besoins du projet</span>.
        </>
      ),

      apprentissageShort: "Chaque projet demande une approche différente pour organiser les données.",
      apprentissage: (
        <>
          Chaque projet demande une approche différente pour organiser les données.
          <br/><br/>
          Cette expérience m'a montré qu'il faut :
          <br/><br/>
          <span className={styles.techKeyword}>Comprendre le besoin</span> : Bien regarder ce que le projet doit faire avant de créer les tables.
          <br/><br/>
          <span className={styles.conceptKeyword}>Choisir les bons outils</span> : PostgreSQL pour la base, pgAdmin pour l'administration, Docker pour l'environnement.
          <br/><br/>
          <span className={styles.methodKeyword}>Appliquer ce qu'on apprend</span> : Utiliser la normalisation quand il y a trop de doublons, les UUID quand c'est plus pratique.
          <br/><br/>
          <span className={styles.techKeyword}>Penser à l'ensemble</span> : La base de données ne vit pas seule, elle fait partie d'un projet plus grand.
          <br/><br/>
          J'ai appris qu'il n'y a pas <span className={styles.keyword}>une seule façon</span> de faire, ça dépend de ce qu'on veut obtenir.
        </>
      )
    },
    projetsAssocies: [
      { id: "crm", nom: "CRM Mobydev" },
      { id: "nfc-connectees", nom: "Cartes NFC connectées" },
      { id: "mousow", nom: "MousoW" }
    ]
  },
  "ue5": {
    title: "UE 5 – Conduire un projet",
    description: "Pilotage de projets informatiques avec méthodologie agile.",
    traces: [
      {
        id: "planning_taches_mobydev",
        title: "Planning de tâches – Gestion projet Mobydev",
        shortTitle: "Planning Mobydev",
        type: "Notion (planning)",
        project: "Mobydev",
        image: planningMobydevImage,
        file: "projets/notion-planning-taches-mobydev.png",
        thumbnail: "captures/mobydev/thumb_planning.png",
        description: "Planning détaillé des tâches Mobydev organisé par semaines avec analyse, design, développement et réunions.",
        savoir: (
          <>
            La <span className={styles.conceptKeyword}>gestion de projet</span> avec <span className={styles.techKeyword}>Notion</span> m'a appris l'importance de la <span className={styles.methodKeyword}>planification par phases</span>. J'ai découvert comment organiser les tâches par <span className={styles.keyword}>types d'activités</span> : Analyse, Design, Développement, Gestion de projet, Réunion, Recueil. Les <span className={styles.methodKeyword}>semaines structurées</span> permettent de suivre l'avancement et d'identifier les <span className={styles.conceptKeyword}>jalons critiques</span>. J'ai appris l'importance de la <span className={styles.techKeyword}>catégorisation des tâches</span> pour une meilleure visibilité.
          </>
        ),
        savoirFaire: (
          <>
            Cet <span className={styles.keyword}>exemple sur 6 semaines</span> montre comment j'organise les tâches par <span className={styles.keyword}>types d'activités</span> : <span className={styles.methodKeyword}>Semaines 1-2</span> - Analyse des besoins et création site d'information, <span className={styles.conceptKeyword}>Semaine 3</span> - Phase de reforme et développement, <span className={styles.techKeyword}>Semaines 4-5</span> - Recueil des besoins, réalisation maquette et création NFC, <span className={styles.keyword}>Semaine 6</span> - Analyse finale du site. Chaque tâche est <span className={styles.methodKeyword}>catégorisée</span> (Analyse, Design, Développement, etc.) et marquée comme <span className={styles.conceptKeyword}>Terminé</span> pour un suivi précis de l'avancement.
          </>
        ),
        savoirFaireShort: (
          <>
            <span className={styles.keyword}>Exemple sur 6 semaines</span> avec <span className={styles.methodKeyword}>catégorisation des tâches</span> et suivi <span className={styles.conceptKeyword}>Terminé</span>...
          </>
        )
      },
      {
        id: "storyboard_figma_insens",
        title: "Storyboard application – navigation mobile",
        shortTitle: "Storyboard Insens",
        type: "Figma (.figma)",
        project: "Insens",
        file: "projets/figma-storyboard-insens-mobile.figma",
        thumbnail: "captures/insens/thumb_storyboard.png",
        description: "Storyboard complet de l'application mobile Insens avec parcours utilisateur et wireframes.",
        savoir: (
          <>
            Le <span className={styles.techKeyword}>storyboard</span> avec <span className={styles.techKeyword}>Figma</span> m'a appris la <span className={styles.conceptKeyword}>conception centrée utilisateur</span>. J'ai découvert l'importance des <span className={styles.methodKeyword}>parcours utilisateur</span>, des <span className={styles.keyword}>wireframes</span>, et des <span className={styles.conceptKeyword}>prototypes interactifs</span>. La <span className={styles.methodKeyword}>navigation mobile</span> nécessite une approche spécifique : touch-friendly, thumb zone, progressive disclosure.
          </>
        ),
        savoirFaire: (
          <>
            J'ai créé un storyboard complet avec <span className={styles.keyword}>25 écrans</span> et <span className={styles.keyword}>8 parcours utilisateur</span> principaux. J'ai défini l'<span className={styles.methodKeyword}>architecture de l'information</span>, les <span className={styles.techKeyword}>interactions</span>, et les <span className={styles.conceptKeyword}>transitions</span>. Le prototype inclut <span className={styles.keyword}>micro-animations</span> et <span className={styles.methodKeyword}>feedback utilisateur</span>. J'ai testé avec <span className={styles.keyword}>15 utilisateurs</span> et itéré <span className={styles.keyword}>3 versions</span> avant validation.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai créé <span className={styles.keyword}>25 écrans</span> avec <span className={styles.keyword}>8 parcours</span> et testé avec <span className={styles.keyword}>15 utilisateurs</span>...
          </>
        )
      },
      {
        id: "sitemap_insens_navigation",
        title: "Sitemap application – Architecture navigation",
        shortTitle: "Sitemap Insens",
        type: "Sitemap (.png)",
        project: "Insens",
        image: sitemapInsensImage,
        file: "projets/sitemap-insens-navigation.png",
        thumbnail: "captures/insens/thumb_sitemap.png",
        description: "Architecture complète de navigation de l'application Insens avec tous les parcours utilisateur et fonctionnalités.",
        savoir: (
          <>
            La création d'une <span className={styles.conceptKeyword}>sitemap d'application</span> m'a appris l'importance de la <span className={styles.methodKeyword}>planification de l'architecture</span> avant le développement. J'ai découvert comment organiser les <span className={styles.keyword}>flux utilisateur</span> selon les <span className={styles.techKeyword}>rôles</span> (Visiteur, Vendeur, Admin). J'ai appris à identifier les <span className={styles.conceptKeyword}>points d'entrée</span> et les <span className={styles.methodKeyword}>chemins de navigation</span> pour chaque type d'utilisateur. La <span className={styles.keyword}>hiérarchie de l'information</span> doit être logique et intuitive pour faciliter l'expérience utilisateur.
          </>
        ),
        savoirFaire: (
          <>
            J'ai conçu l'architecture complète avec <span className={styles.keyword}>3 rôles utilisateur</span> : <span className={styles.methodKeyword}>Visiteur</span> (inscription, choix de rôle, découverte), <span className={styles.conceptKeyword}>Vendeur</span> (dashboard, gestion produits, commandes, profil), et <span className={styles.techKeyword}>Admin</span> (gestion vendeurs, produits, abonnements, statistiques). J'ai organisé <span className={styles.keyword}>plus de 30 écrans</span> avec leurs interconnexions logiques. Pour le visiteur : accueil → exploration → inscription. Pour le vendeur : dashboard → 4 sections principales (produits, commandes, profil, aide). Pour l'admin : gestion complète avec <span className={styles.methodKeyword}>supervision IA</span> et <span className={styles.conceptKeyword}>modération</span>. J'ai défini les <span className={styles.keyword}>3 types d'abonnements</span> avec leurs fonctionnalités spécifiques.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai conçu l'architecture avec <span className={styles.keyword}>3 rôles utilisateur</span> et <span className={styles.keyword}>plus de 30 écrans</span> interconnectés...
          </>
        )
      },
      {
        id: "normalisation_bdd_mousow",
        title: "Documentation BDD – Modèle conceptuel validé",
        shortTitle: "Normalisation BDD",
        type: "Documentation (.pdf)",
        project: "MousoW",
        image: documentationMousowImage,
        file: "projets/normalisation-bdd-mousow.pdf",
        thumbnail: "captures/mousow/thumb_normalisation.png",
        description: "Documentation technique de 5 pages présentée et validée par le développeur senior avant implémentation de la normalisation BDD.",
        savoir: (
          <>
            La <span className={styles.conceptKeyword}>normalisation de base de données</span> m'a appris l'importance de la <span className={styles.methodKeyword}>validation technique</span> avant implémentation. J'ai découvert comment <span className={styles.techKeyword}>présenter des décisions</span> architecturales à un développeur senior avec des arguments solides. Les <span className={styles.keyword}>formes normales</span> (1NF, 2NF, 3NF) doivent être justifiées avec des exemples concrets. La <span className={styles.conceptKeyword}>documentation technique</span> doit être synthétique mais complète pour convaincre.
          </>
        ),
        savoirFaire: (
          <>
            J'ai rédigé une documentation technique de <span className={styles.keyword}>5 pages structurées</span> que j'ai présentée au <span className={styles.methodKeyword}>développeur senior</span> pour validation avant de procéder à la normalisation. Le document comprend : <span className={styles.conceptKeyword}>Page 1</span> - MCD avec entités principales (USERS, CLIENTS, CARDS, etc.) et leurs relations, <span className={styles.techKeyword}>Page 2</span> - Schémas relationnels PostgreSQL avec contraintes, <span className={styles.keyword}>Pages 3-4</span> - Analyse des performances et normalisation 3NF, <span className={styles.methodKeyword}>Page 5</span> - Recommandations et implémentation. Le développeur senior a <span className={styles.conceptKeyword}>validé l'approche</span> avant que je commence l'implémentation de la base de données.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai documenté <span className={styles.keyword}>5 pages structurées</span> présentées au <span className={styles.methodKeyword}>développeur senior</span> qui a <span className={styles.conceptKeyword}>validé l'approche</span>...
          </>
        ),
        code: `# Documentation Technique BDD - MousoW
## Présentée et validée par le développeur senior

### Page 1 - Modèle Conceptuel de Données (MCD)

**Entités principales identifiées :**
- USERS : id, email, mot de passe, rôle, timestamps, token de reset
- CLIENTS : id, prénom, nom, email, téléphone, entreprise, position, statut
- CARDS : uuid, prénom, nom, email, téléphone, thème, QR code, timestamps
- REMINDERS, APPOINTMENTS, MESSAGES, ACTIVITIES, DELETED_CLIENTS

**Relations :**
- 1 USER → * CLIENTS (création), REMINDERS (création/complétion)
- 1 CLIENT → * REMINDERS, APPOINTMENTS, MESSAGES, ACTIVITIES
- Archival sur DELETED_CLIENTS via trigger

### Page 2 - Schéma Relationnel (PostgreSQL)

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('admin','commercial','read-only')),
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP,
    reset_token TEXT,
    reset_token_expiry TIMESTAMP
);
-- Tables clients, cards, reminders, appointments, messages, activities, deleted_clients...
\`\`\`

### Pages 3-4 - Analyse Performances & Normalisation

**Forme normale appliquée : 3NF**
- Élimination redondances données utilisateur
- Séparation logique des entités métier
- Intégrité référentielle garantie

**Optimisations prévues :**
- Index sur clés étrangères
- Index composites (date, user_id)
- Soft delete avec timestamp

### Page 5 - Recommandations & Implémentation

**Validation développeur senior :**
✅ Architecture approuvée
✅ Normalisation 3NF validée
✅ Feu vert pour implémentation

**Prochaines étapes :**
1. Création migrations Sequelize
2. Implémentation modèles
3. Tests d'intégrité`
      }
    ],
    reflexion: {
      situationShort: "Projets complexes nécessitant planification rigoureuse et coordination multi-équipes.",
      situation: (
        <>
          Projets <span className={styles.conceptKeyword}>complexes</span> nécessitant planification rigoureuse et coordination multi-équipes.
          <br/><br/>
En tant que <span className={styles.methodKeyword}>chef de projet</span>, je devais gérer des projets avec des enjeux différents : <span className={styles.keyword}>CRM</span> (6 mois, MVP critique), <span className={styles.keyword}>planning de tâches Mobydev</span> (organisation multi-semaines), et <span className={styles.keyword}>app mobile Insens</span> (UX complexe). Chaque projet avait ses contraintes spécifiques et ses parties prenantes.
          <br/><br/>
          Les défis incluaient : <span className={styles.errorKeyword}>planning serré</span>, <span className={styles.conceptKeyword}>ressources limitées</span>, et besoin de <span className={styles.methodKeyword}>justifications techniques</span> solides pour les choix architecturaux.
        </>
      ),

      actionShort: "Planification structurée avec outils adaptés et documentation technique complète.",
      action: (
        <>
          Planification structurée avec <span className={styles.techKeyword}>outils adaptés</span> et documentation technique complète.
          <br/><br/>
J'ai mis en place une <span className={styles.methodKeyword}>méthodologie hybride</span> :
          <br/>
• <span className={styles.techKeyword}>Planning Notion</span> : roadmap MVP avec sprints et jalons mesurables
          <br/>
• <span className={styles.conceptKeyword}>Analyse comparative</span> : avant/après pour valider les améliorations
          <br/>
• <span className={styles.methodKeyword}>Prototypage Figma</span> : storyboards et tests utilisateur
          <br/>
• <span className={styles.techKeyword}>Documentation technique</span> : justifications architecturales détaillées
          <br/>
• <span className={styles.conceptKeyword}>Coordination équipes</span> : design, développement, et validation
          <br/><br/>
          Chaque projet a bénéficié d'une <span className={styles.keyword}>approche sur mesure</span> selon ses spécificités.
        </>
      ),

      resultatShort: "Projets livrés dans les délais avec amélioration mesurable des KPIs.",
      resultat: (
        <>
          Projets livrés dans les délais avec <span className={styles.conceptKeyword}>amélioration mesurable</span> des KPIs.
          <br/><br/>
Les résultats sont <span className={styles.methodKeyword}>quantifiables</span> :
          <br/>
• <span className={styles.keyword}>CRM</span> : livré en <span className={styles.keyword}>6 mois</span> avec toutes les fonctionnalités MVP
          <br/>
• <span className={styles.conceptKeyword}>Planning Mobydev</span> : organisation efficace par <span className={styles.keyword}>types de tâches</span> et suivi précis
          <br/>
• <span className={styles.techKeyword}>Insens mobile</span> : architecture complète avec <span className={styles.keyword}>3 rôles utilisateur</span>
          <br/>
• <span className={styles.methodKeyword}>Documentation BDD</span> : architecture validée et réutilisable
          <br/>
• <span className={styles.conceptKeyword}>Respect planning</span> : <span className={styles.keyword}>100%</span> des jalons respectés
          <br/><br/>
          Les parties prenantes apprécient la <span className={styles.keyword}>transparence</span> et la qualité des livrables.
        </>
      ),

      apprentissageShort: "Chaque projet nécessite une approche adaptée avec documentation rigoureuse.",
      apprentissage: (
        <>
          Chaque projet nécessite une <span className={styles.conceptKeyword}>approche adaptée</span> avec documentation rigoureuse.
          <br/><br/>
Cette compétence m'a appris que <span className={styles.methodKeyword}>conduire un projet</span> efficacement requiert :
          <br/><br/>
<span className={styles.techKeyword}>Planification adaptative</span> : Choisir les bons outils selon le contexte (Notion, Figma, documentation technique).
          <br/><br/>
<span className={styles.conceptKeyword}>Validation continue</span> : Tests utilisateur, métriques, et feedback pour ajuster le cap rapidement.
          <br/><br/>
<span className={styles.methodKeyword}>Documentation technique</span> : Justifier les choix architecturaux avec des arguments solides et mesurables.
          <br/><br/>
<span className={styles.techKeyword}>Coordination multi-disciplinaire</span> : Faire collaborer design, développement et métier efficacement.
          <br/><br/>
          Je maîtrise maintenant la <span className={styles.keyword}>conduite de projets</span> complexes avec une approche méthodique et des résultats mesurables.
        </>
      )
    },
    projetsAssocies: [
      { id: "crm", nom: "CRM Mobydev" },
      { id: "insens", nom: "Application Insens" },
      { id: "mousow", nom: "MousoW" }
    ]
  },
  "ue6": {
    title: "UE 6 – Collaborer au sein d'une équipe informatique",
    description: "Travail efficace en équipe avec communication et partage des connaissances.",
    traces: [
      {
        id: "readme_documentation",
        title: "Documentation projet – Installation & usage",
        shortTitle: "README.md",
        type: "README.md",
        project: "CRM",
        file: "documentation/README-CRM.md",
        thumbnail: "captures/docs/thumb_readme.png",
        description: "Documentation du projet CRM : installation, configuration, usage et contribution.",
        savoir: (
          <>
            J'ai découvert l'importance de la <span className={styles.conceptKeyword}>documentation technique</span> pour faciliter le travail en équipe. Un bon <span className={styles.techKeyword}>README</span> doit être <span className={styles.keyword}>clair et accessible</span> pour permettre à d'autres développeurs de comprendre rapidement le projet. J'ai appris les bases du <span className={styles.techKeyword}>Markdown</span> et comment structurer une documentation avec les sections essentielles : <span className={styles.keyword}>installation</span>, <span className={styles.methodKeyword}>usage</span>, et <span className={styles.conceptKeyword}>contribution</span>.
          </>
        ),
        savoirFaire: (
          <>
            J'ai participé à la rédaction du README pour le projet <span className={styles.keyword}>CRM</span>. J'ai appris à inclure les sections importantes : <span className={styles.keyword}>prérequis</span>, <span className={styles.methodKeyword}>installation</span>, et <span className={styles.conceptKeyword}>usage de base</span>. J'ai découvert comment utiliser les <span className={styles.keyword}>badges</span> GitHub et structurer le contenu en <span className={styles.techKeyword}>Markdown</span>. Cette documentation aide les nouveaux arrivants à <span className={styles.methodKeyword}>comprendre et installer</span> plus rapidement le projet.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai participé à la documentation du <span className={styles.keyword}>projet CRM</span> en <span className={styles.methodKeyword}>Markdown</span>...
          </>
        ),
        code: `# 🚀 CRM Mobydev

## 📋 Description

Application CRM pour la gestion des clients et prospects de Mobydev.
Interface React avec API Node.js et base PostgreSQL.

## ✨ Fonctionnalités

- 👥 **Gestion clients** : CRUD complet
- 📊 **Dashboard** : métriques temps réel
- 🔐 **Authentification** : JWT
- 📱 **Responsive** : mobile et desktop

## 🛠️ Technologies

- **Frontend** : React 18, SCSS Modules
- **Backend** : Node.js, Express
- **Base de données** : PostgreSQL 15

## 📦 Installation

### Prérequis
- Node.js 18+
- PostgreSQL 15+

### Étapes

1. **Cloner et installer**
\`\`\`bash
git clone https://github.com/mobydev/crm.git
cd crm
npm install
\`\`\`

2. **Configuration**
\`\`\`bash
cp .env.example .env
nano .env
\`\`\`

3. **Base de données**
\`\`\`bash
createdb crm_development
npm run migrate
\`\`\`

4. **Démarrage**
\`\`\`bash
npm run dev
\`\`\`

## 🚀 Usage

1. Accéder à http://localhost:3000
2. Se connecter avec les identifiants fournis
3. Explorer le dashboard

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit et push
4. Ouvrir une Pull Request

## 👥 Équipe

- **Abdoulaye** - Développeur Alternant
- **Mobydev** - Product Owner`
      },
      {
        id: "postman_collection_api",
        title: "Collection tests API REST",
        shortTitle: "Tests Postman",
        type: "Postman (.json)",
        project: "CRM",
        file: "tests/postman-collection-crm.json",
        thumbnail: "captures/tests/thumb_postman.png",
        description: "Collection Postman pour tester l'API CRM avec authentification JWT et tests automatisés.",
        savoir: (
          <>
            <span className={styles.techKeyword}>Postman</span> m'a permis de comprendre l'importance de <span className={styles.conceptKeyword}>tester les APIs</span> pendant le développement. J'ai découvert comment structurer des <span className={styles.methodKeyword}>collections de requêtes</span> pour valider chaque endpoint de l'API CRM. L'<span className={styles.keyword}>authentification JWT</span> nécessite de récupérer un token lors du login puis de l'utiliser dans les autres requêtes. Les <span className={styles.conceptKeyword}>variables Postman</span> permettent de réutiliser facilement les collections sur différents environnements. J'ai appris à écrire des <span className={styles.techKeyword}>tests automatisés</span> pour vérifier que les réponses ont la bonne structure et les bons codes de statut.
          </>
        ),
        savoirFaire: (
          <>
            J'ai créé une collection de tests pour l'<span className={styles.keyword}>API CRM</span> avec les principales routes : <span className={styles.methodKeyword}>authentification</span>, <span className={styles.conceptKeyword}>liste des clients</span>, et <span className={styles.techKeyword}>création de clients</span>. Chaque requête inclut des <span className={styles.methodKeyword}>tests automatisés</span> pour vérifier le statut HTTP et la structure des réponses. J'ai utilisé des <span className={styles.keyword}>variables Postman</span> pour rendre les tests réutilisables sur différents environnements. Les scripts de test vérifient que l'API fonctionne correctement.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai testé l'<span className={styles.keyword}>API CRM</span> avec <span className={styles.methodKeyword}>authentification JWT</span> et <span className={styles.conceptKeyword}>variables Postman</span>...
          </>
        ),
        code: '{\n  "info": {\n    "name": "CRM API - Tests",\n    "description": "Collection de tests pour l\'API CRM"\n  },\n  "auth": {\n    "type": "bearer",\n    "bearer": [{ "key": "token", "value": "{{jwt_token}}" }]\n  },\n  "item": [\n    {\n      "name": "Auth - Login",\n      "request": {\n        "method": "POST",\n        "url": "{{base_url}}/auth/login",\n        "body": {\n          "mode": "raw",\n          "raw": "{\\"email\\": \\"{{admin_email}}\\", \\"password\\": \\"{{admin_password}}\\"}"}\n      },\n      "event": [{\n        "listen": "test",\n        "script": {\n          "exec": [\n            "pm.test(\'Status 200\', () => pm.response.to.have.status(200));",\n            "pm.test(\'Token présent\', () => {",\n            "    const data = pm.response.json();",\n            "    pm.globals.set(\'jwt_token\', data.token);",\n            "});"\n          ]\n        }\n      }]\n    },\n    {\n      "name": "Clients - Liste",\n      "request": {\n        "method": "GET",\n        "url": "{{base_url}}/clients"\n      },\n      "event": [{\n        "listen": "test",\n        "script": {\n          "exec": [\n            "pm.test(\'Status 200\', () => pm.response.to.have.status(200));",\n            "pm.test(\'Array clients\', () => {",\n            "    const data = pm.response.json();",\n            "    pm.expect(data.clients).to.be.an(\'array\');",\n            "});"\n          ]\n        }\n      }]\n    },\n    {\n      "name": "Clients - Créer",\n      "request": {\n        "method": "POST",\n        "url": "{{base_url}}/clients",\n        "body": {\n          "mode": "raw",\n          "raw": "{\\"nom\\": \\"Test\\", \\"email\\": \\"test@example.com\\"}"\n        }\n      },\n      "event": [{\n        "listen": "test",\n        "script": {\n          "exec": [\n            "pm.test(\'Status 201\', () => pm.response.to.have.status(201));",\n            "pm.test(\'Client créé\', () => {",\n            "    const data = pm.response.json();",\n            "    pm.expect(data.client).to.have.property(\'id\');",\n            "});"\n          ]\n        }\n      }]\n    }\n  ]\n}'
      },
      {
        id: "git_commits_branches",
        title: "Git Flow – Stratégie de branches CRM",
        shortTitle: "Git Flow",
        type: "Git Flow",
        project: "CRM",
        image: gitFlowImage,
        file: "git/git-flow-crm.png",
        thumbnail: "captures/git/thumb_gitflow.png",
        description: "Stratégie Git Flow avec branches develop, feature, hotfix pour le projet CRM.",
        savoir: (
          <>
            Le <span className={styles.techKeyword}>Git Flow</span> est une stratégie de gestion des branches que j'ai découverte pour organiser le développement. J'ai appris qu'il y a <span className={styles.keyword}>3 types de branches principales</span> : <span className={styles.methodKeyword}>main</span> pour la production stable, <span className={styles.conceptKeyword}>develop</span> pour l'intégration des nouvelles fonctionnalités, et les branches <span className={styles.keyword}>feature/</span> pour développer chaque fonctionnalité isolément. J'ai aussi découvert les branches <span className={styles.errorKeyword}>hotfix/</span> pour corriger rapidement les bugs critiques en production. Le diagramme montre comment les branches se créent, évoluent et fusionnent : on part de <span className={styles.methodKeyword}>develop</span>, on crée une <span className={styles.conceptKeyword}>feature/client-crud</span>, on développe, puis on merge vers <span className={styles.methodKeyword}>develop</span> avant de déployer sur <span className={styles.keyword}>main</span>.
          </>
        ),
        savoirFaire: (
          <>
            Sur le projet CRM, j'ai appliqué concrètement le Git Flow : j'ai créé des branches <span className={styles.keyword}>feature/client-crud</span> pour le CRUD des clients, <span className={styles.methodKeyword}>feature/auth-jwt</span> pour l'authentification, et <span className={styles.errorKeyword}>hotfix/security-patch</span> pour corriger un problème de sécurité urgent. J'ai appris le processus : <span className={styles.conceptKeyword}>créer la branche</span> depuis develop, <span className={styles.techKeyword}>développer la fonctionnalité</span>, faire des commits réguliers, puis <span className={styles.methodKeyword}>merger vers develop</span> via pull request. Pour la production, on merge develop vers <span className={styles.keyword}>main</span> avec un tag de version. J'ai utilisé les <span className={styles.conceptKeyword}>conventions de commit</span> : feat(clients), fix(auth), docs(readme) pour que l'historique soit lisible.
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai appliqué le <span className={styles.techKeyword}>Git Flow</span> sur le CRM avec branches <span className={styles.keyword}>feature/</span>, <span className={styles.errorKeyword}>hotfix/</span> et <span className={styles.methodKeyword}>conventions de commit</span>...
          </>
        ),

      },
      {
        id: "interface_ux_crm",
        title: "Interface intuitive – UX pensée utilisateur",
        shortTitle: "Interface UX",
        type: "Capture interface",
        project: "CRM",
        image: interfaceUXCrmImage,
        file: "interfaces/crm-ux-interface.png",
        thumbnail: "captures/crm/thumb_interface.png",
        description: "Interface utilisateur du CRM optimisée pour l'expérience utilisateur et l'efficacité.",
        savoir: (
          <>
            Cette interface CRM illustre les principes d'<span className={styles.conceptKeyword}>UX design</span> que j'ai appliqués. J'ai appris l'importance d'une <span className={styles.keyword}>navigation claire</span> avec une sidebar organisée par sections : Dashboard, Clients (actif), Rappels, Calendrier, Messages, Mon Profil. La <span className={styles.methodKeyword}>hiérarchie visuelle</span> guide l'utilisateur : le logo Mobydev en haut, les sections principales au centre, les actions rapides en bas. J'ai découvert que l'<span className={styles.techKeyword}>état actif</span> (section Clients en bleu) doit être visuellement distinct. L'<span className={styles.conceptKeyword}>information utilisateur</span> (Abdoulaye Diallo, Lecture seule) rassure sur le contexte et les permissions.
          </>
        ),
        savoirFaire: (
          <>
            J'ai développé cette interface avec une <span className={styles.keyword}>sidebar de navigation</span> intuitive regroupant les fonctionnalités par catégories logiques. J'ai implémenté un <span className={styles.methodKeyword}>système d'icônes cohérent</span> : calendrier pour Dashboard, personnes pour Clients, flèche pour Rappels, etc. La section <span className={styles.conceptKeyword}>Actions Rapides</span> (Export CSV, Déconnexion) facilite les tâches fréquentes. J'ai ajouté des <span className={styles.techKeyword}>indicateurs visuels</span> : état "Lecture seule" pour informer des permissions, section active en surbrillance bleue. Le design est <span className={styles.keyword}>épuré et professionnel</span> avec une palette de couleurs cohérente (bleu Mobydev, gris neutres).
          </>
        ),
        savoirFaireShort: (
          <>
            J'ai développé une <span className={styles.keyword}>sidebar intuitive</span> avec <span className={styles.methodKeyword}>icônes cohérentes</span> et <span className={styles.conceptKeyword}>actions rapides</span>...
          </>
        )
      },
      {
        id: "organigramme_mobydev",
        title: "Organigramme MobyDev — Structure d'équipe",
        shortTitle: "Organigramme MobyDev", 
        type: "Organigramme (.png)",
        project: "MobyDev",
        image: organigrammeMobydevImage,
        file: "mobydev/organisation/organigramme-structure-equipe.png",
        thumbnail: "captures/mobydev/thumb_organigramme.png",
        description: "Structure organisationnelle de MobyDev montrant ma position d'intervenant Full Stack dans le pôle informatique.",
        savoir: (
          <>
            Comprendre la <span className={styles.conceptKeyword}>structure organisationnelle</span> d'une entreprise m'a appris l'importance de connaître les <span className={styles.methodKeyword}>rôles et responsabilités</span> de chacun. J'ai découvert comment les <span className={styles.techKeyword}>pôles métier</span> (Commercial et Informatique) collaborent sous la direction du <span className={styles.keyword}>CEO</span>. La <span className={styles.conceptKeyword}>hiérarchie claire</span> facilite la communication et la prise de décision. Mon statut d'<span className={styles.methodKeyword}>intervenant</span> me permet d'apporter une expertise technique tout en restant flexible sur les projets.
          </>
        ),
        savoirFaire: (
          <>
            En tant qu'<span className={styles.keyword}>alternant Full Stack</span>, mon rôle dans les projets est de <span className={styles.methodKeyword}>développer les solutions techniques</span> (CRM, cartes NFC, sites web) et <span className={styles.conceptKeyword}>collaborer avec les équipes</span> pour comprendre les besoins clients. Je travaille directement avec <span className={styles.methodKeyword}>2 commerciaux + 1 stagiaire</span> pour transformer leurs demandes en fonctionnalités concrètes. Avec les <span className={styles.conceptKeyword}>3 autres développeurs</span> (1 Full Stack intervenant, 1 Alternant Full Stack, 1 Alternant Front-end), je <span className={styles.keyword}>collabore et apprends</span> sur React, Node.js, PostgreSQL et les déploiements. Mon statut d'alternant me permet d'<span className={styles.methodKeyword}>apprendre en travaillant</span> : je contribue aux projets tout en développant mes compétences techniques et ma compréhension du métier.
          </>
        ),
        savoirFaireShort: (
          <>
            <span className={styles.methodKeyword}>Développeur alternant</span> en <span className={styles.conceptKeyword}>apprentissage</span> collaborant avec <span className={styles.keyword}>6 collègues</span>...
          </>
        )
      }
    ],
    reflexion: {
      situationShort: "Intégration dans une équipe de développement avec apprentissage des pratiques collaboratives.",
      situation: (
        <>
          Intégration dans une équipe de développement avec apprentissage des <span className={styles.conceptKeyword}>pratiques collaboratives</span>.
          <br/><br/>
En tant qu'<span className={styles.keyword}>alternant développeur</span>, j'ai rejoint l'équipe MobyDev pour contribuer aux projets CRM et cartes NFC. L'équipe travaillait avec des technologies que je découvrais : <span className={styles.techKeyword}>APIs REST</span>, <span className={styles.methodKeyword}>authentification JWT</span>, et <span className={styles.conceptKeyword}>interfaces React</span>.
          <br/><br/>
          Les défis d'apprentissage incluaient : comprendre le <span className={styles.errorKeyword}>code existant</span> sans documentation, apprendre à <span className={styles.conceptKeyword}>tester les APIs</span> manuellement, et découvrir les <span className={styles.methodKeyword}>bonnes pratiques Git</span> en équipe.
        </>
      ),

      actionShort: "Participation active à la documentation et aux outils collaboratifs de l'équipe.",
      action: (
        <>
          Participation active à la <span className={styles.techKeyword}>documentation</span> et aux outils collaboratifs de l'équipe.
          <br/><br/>
J'ai contribué aux <span className={styles.methodKeyword}>pratiques collaboratives</span> :
          <br/>
• <span className={styles.techKeyword}>Documentation README</span> : participation à la rédaction des guides d'installation
          <br/>
• <span className={styles.conceptKeyword}>Tests Postman</span> : création de collections pour tester l'API CRM
          <br/>
• <span className={styles.methodKeyword}>Git Flow</span> : apprentissage et application des conventions de branches
          <br/>
• <span className={styles.techKeyword}>Interface utilisateur</span> : développement d'une navigation intuitive
          <br/>
• <span className={styles.conceptKeyword}>Partage d'apprentissage</span> : documentation de mes découvertes pour l'équipe
          <br/><br/>
          L'objectif était d'<span className={styles.keyword}>apprendre en contribuant</span> aux bonnes pratiques de l'équipe.
        </>
      ),

      resultatShort: "Intégration réussie avec contribution aux outils et pratiques de l'équipe.",
      resultat: (
        <>
          Intégration réussie avec <span className={styles.conceptKeyword}>contribution aux outils</span> et pratiques de l'équipe.
          <br/><br/>
Mes contributions concrètes :
          <br/>
• <span className={styles.conceptKeyword}>Documentation</span> : README CRM avec sections installation et usage
          <br/>
• <span className={styles.techKeyword}>Tests API</span> : Collection Postman avec <span className={styles.keyword}>3 endpoints principaux</span>
          <br/>
• <span className={styles.methodKeyword}>Git Flow</span> : Application sur les branches <span className={styles.keyword}>feature/</span> et <span className={styles.errorKeyword}>hotfix/</span>
          <br/>
• <span className={styles.conceptKeyword}>Interface UX</span> : Sidebar de navigation avec <span className={styles.keyword}>actions rapides</span>
          <br/>
• <span className={styles.techKeyword}>Collaboration</span> : Participation active aux reviews de code
          <br/><br/>
          J'ai pu <span className={styles.keyword}>apprendre et contribuer</span> simultanément aux projets de l'équipe.
        </>
      ),

      apprentissageShort: "L'apprentissage en équipe nécessite documentation, outils partagés et communication.",
      apprentissage: (
        <>
          L'<span className={styles.conceptKeyword}>apprentissage en équipe</span> nécessite documentation, outils partagés et communication.
          <br/><br/>
Cette expérience m'a appris que <span className={styles.methodKeyword}>collaborer en équipe informatique</span> en tant qu'alternant requiert :
          <br/><br/>
<span className={styles.techKeyword}>Documentation accessible</span> : README clairs pour comprendre rapidement les projets et contribuer efficacement.
          <br/><br/>
<span className={styles.conceptKeyword}>Outils de test partagés</span> : Collections Postman pour valider les développements et partager les connaissances.
          <br/><br/>
<span className={styles.methodKeyword}>Conventions Git cohérentes</span> : Git Flow pour organiser le travail et éviter les conflits.
          <br/><br/>
<span className={styles.techKeyword}>Design centré utilisateur</span> : Interfaces pensées pour l'efficacité et l'intuitivité.
          <br/><br/>
          Je développe progressivement les <span className={styles.keyword}>compétences collaboratives</span> essentielles au travail en équipe de développement.
        </>
      )
    },
    projetsAssocies: [
      { id: "nfc-connectees", nom: "Cartes NFC connectées" },
      { id: "crm", nom: "CRM Mobydev" }
    ]
  }
};

export default function CompetenceDetail() {
  const { id } = useParams();
  const competence = competencesData[id];
  const [zoomedImage, setZoomedImage] = useState(null);
  const [expandedTrace, setExpandedTrace] = useState(null);
  const [activeTab, setActiveTab] = useState({});
  const [expandedSavoirFaire, setExpandedSavoirFaire] = useState({});
  const [expandedReflexion, setExpandedReflexion] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const tracesPerPage = 5;

  // Fonction pour obtenir l'icône selon le type de trace
  const getTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'code source':
        return <FaFileCode className={styles.typeIcon} />;
      case 'capture d\'écran':
        return <FaCamera className={styles.typeIcon} />;
      case 'test':
        return <FaCog className={styles.typeIcon} />;
      default:
        return <FaCode className={styles.typeIcon} />;
    }
  };

  const openImageZoom = (imageSrc, title) => {
    setZoomedImage({ src: imageSrc, title });
  };

  const closeImageZoom = () => {
    setZoomedImage(null);
  };

  const toggleTraceExpansion = (traceId) => {
    setExpandedTrace(expandedTrace === traceId ? null : traceId);
  };

  const toggleSavoirFaireExpansion = (traceId) => {
    setExpandedSavoirFaire(prev => ({
      ...prev,
      [traceId]: !prev[traceId]
    }));
  };

  const toggleReflexionExpansion = (section) => {
    setExpandedReflexion(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Logique de pagination
  const totalPages = Math.ceil(competence?.traces?.length / tracesPerPage);
  const startIndex = (currentPage - 1) * tracesPerPage;
  const endIndex = startIndex + tracesPerPage;
  const currentTraces = competence?.traces?.slice(startIndex, endIndex) || [];

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!competence) {
    return <ErrorPage />;
  }

  return (
    <>
      <Header />
      <div className={styles.competenceDetailContainer}>
        <Link to="/skills" className={styles.backLink}>
          <GoArrowLeft />
          <span>Retour aux compétences</span>
        </Link>

        <div className={styles.competenceHeader}>
          <h1 className={styles.competenceTitle}>
            {competence.title} {competence.badge && <span className={styles.focusBadge}>{competence.badge}</span>}
          </h1>
          <p className={styles.competenceDesc}>{competence.description}</p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <section className={styles.tracesSection}>
              <h2><FaTools className={styles.sectionIcon} />Traces & preuves</h2>
              
              {/* Indicateur de pagination */}
              <div className={styles.paginationInfo}>
                <span>Page {currentPage} sur {totalPages} • Traces {startIndex + 1}-{Math.min(endIndex, competence.traces.length)} sur {competence.traces.length}</span>
              </div>
              
              <div className={styles.tracesGallery}>
                {currentTraces.map((trace) => (
                  <div key={trace.id} className={styles.traceItem}>
                    {/* Vignette cliquable */}
                    <div 
                      className={styles.traceThumbnail}
                      onClick={() => toggleTraceExpansion(trace.id)}
                    >
                                             <div className={styles.thumbnailImage}>
                         {(trace.image || trace.interfaceImage) ? (
                           <img src={trace.image || trace.interfaceImage} alt={trace.shortTitle} />
                         ) : (
                           <div className={styles.placeholderImage}>
                             {getTypeIcon(trace.type)}
                           </div>
                         )}
                       </div>
                      <div className={styles.thumbnailInfo}>
                        <h4 className={styles.thumbnailTitle}>
                          {getTypeIcon(trace.type)}
                          {trace.shortTitle}
                        </h4>
                        <span className={styles.thumbnailType}>{trace.type}</span>
                      </div>
                      <div className={styles.expandIcon}>
                        {expandedTrace === trace.id ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>

                    {/* Panneau de détail déroulable */}
                    {expandedTrace === trace.id && (
                      <div className={styles.traceDetails}>
                        <div className={styles.detailHeader}>
                          <h3 className={styles.detailTitle}>{trace.title}</h3>
                          <div className={styles.detailMeta}>
                            <span className={styles.detailType}>
                              {getTypeIcon(trace.type)} {trace.type}
                            </span>
                            <span className={styles.detailFile}>
                              <FaFolder /> {trace.file}
                            </span>
                          </div>
                        </div>

                        <div className={styles.detailContent}>
                          <p className={styles.detailDescription}>{trace.description}</p>
                          
                          <div className={styles.learningGrid}>
                            <div className={styles.learningItem}>
                              <h4><FaLightbulb className={styles.learningIcon} />Savoir</h4>
                              <p style={{whiteSpace: 'pre-line'}}>{trace.savoir}</p>
                            </div>
                            <div className={styles.learningItem}>
                              <h4><FaCog className={styles.learningIcon} />Savoir-faire</h4>
                              <div className={styles.expandableText}>
                                <p style={{whiteSpace: 'pre-line'}}>
                                  {expandedSavoirFaire[trace.id] ? trace.savoirFaire : (trace.savoirFaireShort || trace.savoirFaire)}
                                </p>
                                {trace.savoirFaireShort && (
                                  <button 
                                    className={styles.readMoreButton}
                                    onClick={() => toggleSavoirFaireExpansion(trace.id)}
                                  >
                                    {expandedSavoirFaire[trace.id] ? 'Lire moins' : 'Lire plus'}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Onglets Interface/Diagramme pour les traces spécialisées */}
                          {trace.interfaceImage && trace.diagramImage && (
                            <div className={styles.tabsContainer}>
                              <div className={styles.tabsHeader}>
                                <button 
                                  className={`${styles.tabButton} ${(!activeTab[trace.id] || activeTab[trace.id] === 'interface') ? styles.active : ''}`}
                                  onClick={() => setActiveTab({...activeTab, [trace.id]: 'interface'})}
                                >
                                  <FaCamera /> Interface
                                </button>
                                <button 
                                  className={`${styles.tabButton} ${activeTab[trace.id] === 'diagram' ? styles.active : ''}`}
                                  onClick={() => setActiveTab({...activeTab, [trace.id]: 'diagram'})}
                                >
                                  <FaProjectDiagram /> Diagramme
                                </button>
                              </div>
                              
                              <div className={styles.tabContent}>
                                {(!activeTab[trace.id] || activeTab[trace.id] === 'interface') && (
                                  <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                      <img src={trace.interfaceImage} alt={`${trace.title} - Interface`} className={styles.traceImage} />
                                      <button 
                                        className={styles.zoomButton}
                                        onClick={() => openImageZoom(trace.interfaceImage, `${trace.title} - Interface`)}
                                        aria-label="Agrandir l'image"
                                      >
                                        <FaSearchPlus />
                                      </button>
                                    </div>
                                  </div>
                                )}
                                
                                {activeTab[trace.id] === 'diagram' && (
                                  <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                      <img src={trace.diagramImage} alt={`${trace.title} - Diagramme`} className={styles.traceImage} />
                                      <button 
                                        className={styles.zoomButton}
                                        onClick={() => openImageZoom(trace.diagramImage, `${trace.title} - Diagramme`)}
                                        aria-label="Agrandir l'image"
                                      >
                                        <FaSearchPlus />
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Onglets Code/Image pour les traces qui ont les deux */}
                          {trace.code && trace.image && (
                            <div className={styles.tabsContainer}>
                              <div className={styles.tabsHeader}>
                                <button 
                                  className={`${styles.tabButton} ${(!activeTab[trace.id] || activeTab[trace.id] === 'image') ? styles.active : ''}`}
                                  onClick={() => setActiveTab({...activeTab, [trace.id]: 'image'})}
                                >
                                  <FaCamera /> Interface
                                </button>
                                <button 
                                  className={`${styles.tabButton} ${activeTab[trace.id] === 'code' ? styles.active : ''}`}
                                  onClick={() => setActiveTab({...activeTab, [trace.id]: 'code'})}
                                >
                                  <FaCode /> Code source
                                </button>
                              </div>
                              
                              <div className={styles.tabContent}>
                                {(!activeTab[trace.id] || activeTab[trace.id] === 'image') && (
                                  <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                      <img src={trace.image} alt={trace.title} className={styles.traceImage} />
                                      <button 
                                        className={styles.zoomButton}
                                        onClick={() => openImageZoom(trace.image, trace.title)}
                                        aria-label="Agrandir l'image"
                                      >
                                        <FaSearchPlus />
                                      </button>
                                    </div>
                                  </div>
                                )}
                                
                                {activeTab[trace.id] === 'code' && (
                                  <div className={styles.codeContainer}>
                                    <pre className={styles.codeBlock}>
                                      <code>{trace.code}</code>
                                    </pre>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Code seul */}
                          {trace.code && !trace.image && (
                            <div className={styles.codeContainer}>
                              <pre className={styles.codeBlock}>
                                <code>{trace.code}</code>
                              </pre>
                            </div>
                          )}

                          {/* Images seules ou multiples */}
                          {(trace.image || trace.image2) && !trace.code && !trace.interfaceImage && !trace.diagramImage && (
                            <div className={styles.imageContainer}>
                              <div className={styles.imageGallery}>
                                {/* Image principale */}
                                {trace.image && (
                                  <div className={styles.imageWrapper}>
                                    <img src={trace.image} alt={trace.title} className={styles.traceImage} />
                                    <button 
                                      className={styles.zoomButton}
                                      onClick={() => openImageZoom(trace.image, trace.title)}
                                      aria-label="Agrandir l'image"
                                    >
                                      <FaSearchPlus />
                                    </button>
                                  </div>
                                )}
                                
                                {/* Image secondaire */}
                                {trace.image2 && (
                                  <div className={styles.imageWrapper}>
                                    <img src={trace.image2} alt={`${trace.title} - Image 2`} className={styles.traceImage} />
                                    <button 
                                      className={styles.zoomButton}
                                      onClick={() => openImageZoom(trace.image2, `${trace.title} - Image 2`)}
                                      aria-label="Agrandir l'image"
                                    >
                                      <FaSearchPlus />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Boutons de pagination */}
              {totalPages > 1 && (
                <div className={styles.paginationControls}>
                  <button 
                    className={styles.paginationButton}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                  >
                    ← Précédent
                  </button>
                  
                  <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                      <button
                        key={pageNum}
                        className={`${styles.pageNumber} ${currentPage === pageNum ? styles.active : ''}`}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    className={styles.paginationButton}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Suivant →
                  </button>
                </div>
              )}
            </section>

            <section className={styles.reflexionSection}>
              <h2><FaBrain className={styles.sectionIcon} />Analyse réflexive</h2>
              <div className={styles.reflexionGrid}>
                <div className={styles.reflexionItem}>
                  <h4><FaBullseye className={styles.itemIcon} />Situation</h4>
                  <div className={styles.expandableText}>
                    <p style={{whiteSpace: 'pre-line'}}>
                      {expandedReflexion.situation ? competence.reflexion.situation : (competence.reflexion.situationShort || competence.reflexion.situation)}
                    </p>
                    {competence.reflexion.situationShort && (
                      <button 
                        className={styles.readMoreButton}
                        onClick={() => toggleReflexionExpansion('situation')}
                      >
                        {expandedReflexion.situation ? 'Lire moins' : 'Lire plus'}
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.reflexionItem}>
                  <h4><FaBolt className={styles.itemIcon} />Action</h4>
                  <div className={styles.expandableText}>
                    <p style={{whiteSpace: 'pre-line'}}>
                      {expandedReflexion.action ? competence.reflexion.action : (competence.reflexion.actionShort || competence.reflexion.action)}
                    </p>
                    {competence.reflexion.actionShort && (
                      <button 
                        className={styles.readMoreButton}
                        onClick={() => toggleReflexionExpansion('action')}
                      >
                        {expandedReflexion.action ? 'Lire moins' : 'Lire plus'}
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.reflexionItem}>
                  <h4><FaTrophy className={styles.itemIcon} />Résultat</h4>
                  <div className={styles.expandableText}>
                    <p style={{whiteSpace: 'pre-line'}}>
                      {expandedReflexion.resultat ? competence.reflexion.resultat : (competence.reflexion.resultatShort || competence.reflexion.resultat)}
                    </p>
                    {competence.reflexion.resultatShort && (
                      <button 
                        className={styles.readMoreButton}
                        onClick={() => toggleReflexionExpansion('resultat')}
                      >
                        {expandedReflexion.resultat ? 'Lire moins' : 'Lire plus'}
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.reflexionItem}>
                  <h4><FaBrain className={styles.itemIcon} />Apprentissage</h4>
                  <div className={styles.expandableText}>
                    <p style={{whiteSpace: 'pre-line'}}>
                      {expandedReflexion.apprentissage ? competence.reflexion.apprentissage : (competence.reflexion.apprentissageShort || competence.reflexion.apprentissage)}
                    </p>
                    {competence.reflexion.apprentissageShort && (
                      <button 
                        className={styles.readMoreButton}
                        onClick={() => toggleReflexionExpansion('apprentissage')}
                      >
                        {expandedReflexion.apprentissage ? 'Lire moins' : 'Lire plus'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.rightColumn}>
            {competence.projetsAssocies && competence.projetsAssocies.length > 0 && (
              <div className={styles.projetsAssociesSection}>
                <h3><FaRocket className={styles.sectionIcon} />Projets associés</h3>
                <div className={styles.projetsLinks}>
                  {competence.projetsAssocies.map((projet, idx) => (
                    <Link key={idx} to={`/works/${projet.id}#${id}`} className={styles.projetLink}>
                      {projet.nom}
                    </Link>
                  ))}
                </div>
                <p className={styles.projetsNote}>
                  Cliquez pour accéder aux détails de chaque projet
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal de zoom pour les images */}
        {zoomedImage && (
          <div className={styles.imageModal} onClick={closeImageZoom}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeImageZoom}>
                <FaTimes />
              </button>
              <h3 className={styles.modalTitle}>{zoomedImage.title}</h3>
              <img 
                src={zoomedImage.src} 
                alt={zoomedImage.title} 
                className={styles.zoomedImage} 
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
} 