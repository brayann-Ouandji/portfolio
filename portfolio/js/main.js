/* =========================================================
   Portfolio · Brayann Adrien Ouandji
   Les textes des projets existent en deux langues : { fr, en }.
   Pour ajouter une capture d'écran à un projet : déposez l'image
   dans assets/img/projects/ et renseignez le champ "image"
   (ex. image: "assets/img/projects/salon-finder.jpg").
   ========================================================= */

const PROJECTS = [
  {
    id: "acep",
    title: { fr: "Assistant IA de recrutement", en: "AI recruitment assistant" },
    meta: { fr: "ACEP Groupe · 2026 · Stage", en: "ACEP Groupe · 2026 · Internship" },
    cats: ["ia", "back"],
    tag: { fr: "En production", en: "In production" },
    icon: "bi-diagram-3",
    color: ["#1F4D3A", "#2E6B50"],
    pattern: "network",
    summary: {
      fr: "Services REST en FastAPI et Spring Boot, orchestration n8n, scoring par LLM et mise en production sur serveur.",
      en: "REST services in FastAPI and Spring Boot, n8n orchestration, LLM scoring and production deployment on a server."
    },
    tags: ["FastAPI", "Spring Boot", "n8n", "Mistral AI", "Docker"],
    context: {
      fr: "Stage de juin à août 2026 chez ACEP Groupe à Lyon, sous la supervision du CTO. Objectif : supprimer le tri manuel des candidatures.",
      en: "Internship from June to August 2026 at ACEP Groupe in Lyon, supervised by the CTO. Goal: eliminate manual screening of job applications."
    },
    points: {
      fr: [
        "Microservice Python / FastAPI pour l'extraction de texte PDF/DOCX et la génération du dossier de compétences au format .docx.",
        "Services REST en Java / Spring Boot et Python intégrant les API Mistral AI et OpenAI : scoring sur 100 et classement en quatre niveaux.",
        "Centralisation des candidatures (site carrière, e-mail IMAP, Indeed, LinkedIn) dans PostgreSQL et un stockage de fichiers privé.",
        "Workflows n8n événementiels et planifiés (relances, archivage) organisés comme une machine à états.",
        "Mise en production : Docker, Nginx en reverse proxy, HTTPS Let's Encrypt, SSH par clé.",
        "Résultat : environ 70 % de tâches manuelles en moins, mesuré sur 50 candidatures."
      ],
      en: [
        "Python / FastAPI microservice for PDF/DOCX text extraction and .docx candidate file generation.",
        "REST services in Java / Spring Boot and Python integrating the Mistral AI and OpenAI APIs: scoring out of 100 with a four-tier ranking.",
        "Centralised applications (careers site, IMAP e-mail, Indeed, LinkedIn) in PostgreSQL and private file storage.",
        "Event-driven and scheduled n8n workflows (reminders, archiving) designed as a state machine.",
        "Production deployment: Docker, Nginx reverse proxy, Let's Encrypt HTTPS, key-based SSH.",
        "Outcome: around 70% fewer manual tasks, measured over 50 applications."
      ]
    },
    stack: ["Python", "FastAPI", "Java", "Spring Boot", "n8n", "Mistral AI", "OpenAI", "Supabase", "PostgreSQL", "Docker", "Nginx"],
    links: [{ label: { fr: "Voir la dernière expérience", en: "See latest experience" }, href: "#experience", internal: true }]
  },
  {
    id: "salon",
    title: "Salon Finder",
    meta: { fr: "ESIGELEC · nov. 2025", en: "ESIGELEC · Nov. 2025" },
    cats: ["back", "web"],
    tag: "Spring Boot",
    icon: "bi-geo-alt",
    color: ["#B4692A", "#8C4F1C"],
    pattern: "map",
    summary: {
      fr: "Application web de géolocalisation de salons de coiffure : API RESTful Spring Boot et carte interactive Google Maps.",
      en: "Web app to locate hair salons: Spring Boot RESTful API and an interactive Google Maps view."
    },
    tags: ["Java", "Spring Boot", "JPA", "Google Maps API"],
    context: {
      fr: "Projet académique de conception d'application web complète, de la modélisation des données jusqu'à l'interface.",
      en: "Academic project covering a complete web application, from data modelling to user interface."
    },
    points: {
      fr: [
        "Conception de l'architecture (API RESTful) et modélisation des données avec JPA.",
        "Back-end Java / Spring Boot pour la gestion des salons.",
        "Intégration de l'API Google Maps : géolocalisation et affichage interactif.",
        "Filtres dynamiques reliant front-end et back-end, interface responsive en Bootstrap."
      ],
      en: [
        "Designed the architecture (RESTful API) and the data model with JPA.",
        "Java / Spring Boot back-end for salon management.",
        "Google Maps API integration: geolocation and interactive display.",
        "Dynamic filters connecting front-end and back-end, responsive Bootstrap interface."
      ]
    },
    stack: ["Java", "Spring Boot", "Spring Data JPA", "H2", "Maven", "JavaScript", "Bootstrap", "Google Maps API"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/salon-finder" }]
  },
  {
    id: "mybudget",
    title: "MyBudget",
    meta: { fr: "ESIGELEC · févr. à avril 2026", en: "ESIGELEC · Feb. to April 2026" },
    cats: ["back", "web"],
    tag: "ASP.NET Core",
    icon: "bi-wallet2",
    color: ["#3B5B78", "#24394E"],
    pattern: "bars",
    summary: {
      fr: "Application de gestion de budget : API REST en C# / ASP.NET Core, Entity Framework Core, authentification et tableau de bord.",
      en: "Budget management app: C# / ASP.NET Core REST API, Entity Framework Core, authentication and dashboard."
    },
    tags: ["C#", "ASP.NET Core", "EF Core", "MySQL"],
    context: {
      fr: "Projet académique centré sur la conception d'une API sécurisée dans l'écosystème .NET, avec un front-end web qui la consomme.",
      en: "Academic project focused on building a secure API in the .NET ecosystem, with a web front-end consuming it."
    },
    points: {
      fr: [
        "Cinq contrôleurs REST : authentification, utilisateurs, budgets, catégories et transactions.",
        "DTOs dédiés pour séparer le modèle de données des contrats d'API.",
        "Persistance avec Entity Framework Core (DbContext, DbSet) et schéma géré par migrations sur MySQL.",
        "Filtre d'autorisation personnalisé (RequireLogin) pour protéger les routes et les données de chaque utilisateur.",
        "Front-end HTML, CSS et JavaScript : tableau de bord, budgets, catégories, transactions et profil."
      ],
      en: [
        "Five REST controllers: authentication, users, budgets, categories and transactions.",
        "Dedicated DTOs separating the data model from API contracts.",
        "Persistence with Entity Framework Core (DbContext, DbSet) and schema managed through migrations on MySQL.",
        "Custom authorisation filter (RequireLogin) protecting routes and each user's data.",
        "HTML, CSS and JavaScript front-end: dashboard, budgets, categories, transactions and profile."
      ]
    },
    stack: ["C#", "ASP.NET Core", "EF Core", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/MyBudget" }]
  },
  {
    id: "bornes",
    title: { fr: "Bornes Élec", en: "EV Charging Map" },
    meta: { fr: "ESIGELEC · mars 2026", en: "ESIGELEC · March 2026" },
    cats: ["back", "web"],
    tag: "Jakarta EE",
    icon: "bi-ev-station",
    color: ["#2F6F6A", "#1A4744"],
    pattern: "map",
    summary: {
      fr: "Carte interactive des bornes de recharge électrique, avec API Java, filtres avancés, itinéraire et environnement conteneurisé.",
      en: "Interactive map of EV charging stations, with a Java API, advanced filters, routing and a containerised setup."
    },
    tags: ["Java", "Jakarta EE", "MySQL", "Leaflet", "Docker"],
    context: {
      fr: "Projet académique : exposer un jeu de données de bornes de recharge via une API Java et le rendre exploitable sur une carte.",
      en: "Academic project: expose a dataset of EV charging stations through a Java API and make it usable on a map."
    },
    points: {
      fr: [
        "API JSON en Jakarta EE (servlet) avec couche DAO JDBC sur MySQL.",
        "Filtres combinables : puissance minimale, gratuité, types de prises (E/F, Type 2, Combo CCS, CHAdeMO), conditions d'accès, paiement par carte.",
        "Carte Leaflet / OpenStreetMap avec regroupement des marqueurs, géolocalisation de l'utilisateur et calcul d'itinéraire vers une borne.",
        "Environnement reproductible avec Docker Compose : un conteneur MySQL initialisé par script SQL et un conteneur Tomcat.",
        "Tests unitaires et d'intégration avec JUnit."
      ],
      en: [
        "JSON API in Jakarta EE (servlet) with a JDBC DAO layer on MySQL.",
        "Combinable filters: minimum power, free charging, plug types (E/F, Type 2, Combo CCS, CHAdeMO), access conditions, card payment.",
        "Leaflet / OpenStreetMap map with marker clustering, user geolocation and routing to a station.",
        "Reproducible environment with Docker Compose: a MySQL container seeded by an SQL script and a Tomcat container.",
        "Unit and integration tests with JUnit."
      ]
    },
    stack: ["Java", "Jakarta EE", "JDBC", "MySQL", "Tomcat", "Docker Compose", "JavaScript", "Leaflet", "JUnit"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/Bornes_Elec" }]
  },
  {
    id: "capitais",
    title: "CapitaisAPI",
    meta: { fr: "ESIGELEC · févr. à mars 2026 · binôme", en: "ESIGELEC · Feb. to March 2026 · pair project" },
    cats: ["back"],
    tag: { fr: "API sécurisée", en: "Secure API" },
    icon: "bi-globe-europe-africa",
    color: ["#5A4A78", "#372C4D"],
    pattern: "radar",
    summary: {
      fr: "API Java de consultation et d'édition des pays et de leurs capitales, protégée par authentification et filtre d'accès.",
      en: "Java API to browse and edit countries and their capitals, protected by authentication and an access filter."
    },
    tags: ["Java", "Jakarta EE", "MySQL", "Sessions"],
    context: {
      fr: "Projet académique réalisé en binôme autour de la conception d'une API web sécurisée en Java.",
      en: "Academic pair project on designing a secure web API in Java."
    },
    points: {
      fr: [
        "Servlets Jakarta EE renvoyant du JSON : liste des pays, recherche de capitale, association pays et capitale, statut du service.",
        "Endpoint d'édition (POST) pour modifier les données des pays.",
        "Authentification par session (connexion, déconnexion) et filtre qui renvoie un 403 sur les routes protégées.",
        "Couche DAO pour l'accès à MySQL, gestion des erreurs avec codes HTTP adaptés."
      ],
      en: [
        "Jakarta EE servlets returning JSON: country list, capital lookup, country and capital mapping, service status.",
        "Edit endpoint (POST) to update country data.",
        "Session-based authentication (login, logout) and a filter returning 403 on protected routes.",
        "DAO layer for MySQL access, error handling with appropriate HTTP status codes."
      ]
    },
    stack: ["Java", "Jakarta EE", "Servlets", "MySQL", "JDBC", "HTML", "Eclipse"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/CapitaisAPI" }]
  },
  {
    id: "promia",
    title: "PROMIA",
    meta: { fr: "ESIGELEC · avril à juin 2026", en: "ESIGELEC · April to June 2026" },
    cats: ["ia"],
    tag: "Deep RL",
    icon: "bi-robot",
    color: ["#2A322E", "#46504A"],
    pattern: "radar",
    summary: {
      fr: "Navigation autonome d'un robot mobile par Deep Reinforcement Learning dans une simulation ROS2 / Gazebo.",
      en: "Autonomous mobile robot navigation using Deep Reinforcement Learning in a ROS2 / Gazebo simulation."
    },
    tags: ["Python", "PyTorch", "ROS2", "Gazebo", "DQN"],
    context: {
      fr: "Projet académique inspiré de travaux de recherche sur la planification de trajectoire par DQN. Robot TurtleBot3 Waffle en simulation.",
      en: "Academic project based on research into DQN path planning. TurtleBot3 Waffle robot in simulation."
    },
    points: {
      fr: [
        "Environnement ROS2 / Gazebo : robot, obstacles, cible, données LiDAR et d'odométrie.",
        "Nodes Python ROS2 pour analyser l'environnement, commander le robot et entraîner un agent Deep Q-Network sous PyTorch.",
        "Implémentation des états, actions, récompenses et de la mémoire d'expérience.",
        "Automatisation des épisodes d'entraînement, réinitialisation de la simulation et sauvegarde des modèles.",
        "Résultat : prototype de navigation autonome avec évitement d'obstacles en simulation."
      ],
      en: [
        "ROS2 / Gazebo environment: robot, obstacles, target, LiDAR and odometry data.",
        "Python ROS2 nodes to read the environment, drive the robot and train a Deep Q-Network agent with PyTorch.",
        "Implemented states, actions, rewards and experience replay.",
        "Automated training episodes, simulation resets and model checkpoints.",
        "Outcome: an autonomous navigation prototype with obstacle avoidance in simulation."
      ]
    },
    stack: ["Python", "PyTorch", "ROS2", "Gazebo", "DQN", "LiDAR", "Git"],
    links: []
  },
  {
    id: "movehelp",
    title: "Move&Help",
    meta: { fr: "ESIGELEC · sept. à nov. 2025", en: "ESIGELEC · Sept. to Nov. 2025" },
    cats: ["web", "back"],
    tag: "PHP",
    icon: "bi-truck",
    color: ["#6B4E3D", "#46322A"],
    pattern: "grid",
    summary: {
      fr: "Plateforme collaborative de déménagement mettant en relation clients et déménageurs, avec espace d'administration.",
      en: "Collaborative moving platform connecting customers and movers, with an admin area."
    },
    tags: ["PHP", "MySQL", "Docker", { fr: "Sécurité", en: "Security" }],
    context: {
      fr: "Projet académique mené avec un dossier de spécification technique, des CGU, des mentions légales et une politique de confidentialité.",
      en: "Academic project delivered with a technical specification, terms of use, legal notice and privacy policy."
    },
    points: {
      fr: [
        "Back-end PHP avec sessions et trois rôles : client, déménageur, administrateur.",
        "Sécurité applicative : requêtes préparées contre l'injection SQL, hachage des mots de passe.",
        "Inscription et espaces dédiés par type d'utilisateur, gestion des fichiers téléversés.",
        "Environnement conteneurisé avec Docker et docker-compose."
      ],
      en: [
        "PHP back-end with sessions and three roles: customer, mover, administrator.",
        "Application security: prepared statements against SQL injection, password hashing.",
        "Sign-up and dedicated areas per user type, file upload handling.",
        "Containerised environment with Docker and docker-compose."
      ]
    },
    stack: ["PHP", "MySQL", "Docker", "Bootstrap", "Git"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/move-help" }]
  },
  {
    id: "pdl",
    title: { fr: "Affectation des dominantes", en: "Specialisation allocation" },
    meta: { fr: "ESIGELEC · Projet de développement logiciel", en: "ESIGELEC · Software development project" },
    cats: ["back"],
    tag: { fr: "Algorithme", en: "Algorithm" },
    icon: "bi-sort-down",
    color: ["#2E6B50", "#173A2B"],
    pattern: "flow",
    summary: {
      fr: "Application Java qui affecte chaque étudiant à une spécialisation selon son classement, ses vœux et les places disponibles.",
      en: "Java application assigning each student to a specialisation based on ranking, preferences and available seats."
    },
    tags: ["Java", "SQL", { fr: "Algorithmique", en: "Algorithms" }],
    context: {
      fr: "Projet de développement logiciel (PDL) qui modélise un vrai processus de l'école.",
      en: "Software development project modelling a real school process."
    },
    points: {
      fr: [
        "Espace étudiant : classement des vœux (5 pour le cursus classique, 2 pour l'apprentissage) modifiables jusqu'à la clôture.",
        "Espace administrateur : suivi des choix, gestion des dominantes et de leurs capacités par filière.",
        "Affectation automatique par ordre de classement, mise à jour des places et rapport des étudiants non affectés.",
        "Base de données relationnelle avec scripts SQL dédiés."
      ],
      en: [
        "Student area: ranked preferences (5 for the standard track, 2 for apprentices), editable until closing.",
        "Admin area: tracking of choices, management of specialisations and their capacity per track.",
        "Automatic allocation by ranking order, seat updates and a report of unassigned students.",
        "Relational database with dedicated SQL scripts."
      ]
    },
    stack: ["Java", "SQL", "Eclipse"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/Projet-PDL" }]
  }
];

const EXTRA = [
  {
    id: "mariage",
    title: { fr: "Invitation de mariage en ligne", en: "Online wedding invitation" },
    meta: { fr: "Projet personnel · mai à sept. 2026", en: "Personal project · May to Sept. 2026" },
    cats: ["web"],
    tag: "Full-stack",
    icon: "bi-envelope-paper",
    color: ["#8A6A4F", "#5B4331"],
    pattern: "waves",
    summary: {
      fr: "Site d'invitation complet pour un mariage : invitations personnalisées, réponses en ligne avec QR code, livre d'or et espace d'administration.",
      en: "Complete wedding invitation site: personalised invitations, online RSVP with QR code, guestbook and admin area."
    },
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    context: {
      fr: "Projet réalisé pour un vrai mariage et utilisé par les invités. Une application full-stack complète, de la base de données au déploiement.",
      en: "Built for a real wedding and used by the guests. A complete full-stack application, from database to deployment."
    },
    points: {
      fr: [
        "Invitations personnalisées par invité grâce aux routes dynamiques de Next.js (App Router).",
        "Confirmation de présence (RSVP) en ligne avec génération d'un QR code et mémorisation de la réponse.",
        "Livre d'or et suggestions de musiques enregistrés en base.",
        "Espace d'administration : suivi des réponses, lecture des messages et attribution des tables.",
        "Programme de la journée et compte à rebours jusqu'à l'événement.",
        "API routes Next.js, modèle de données Prisma sur PostgreSQL, interface en Tailwind CSS, déploiement Vercel."
      ],
      en: [
        "Personalised invitation per guest using Next.js dynamic routes (App Router).",
        "Online RSVP with QR code generation and answer persistence.",
        "Guestbook and music requests stored in the database.",
        "Admin area: RSVP tracking, guestbook messages and table assignment.",
        "Day schedule and countdown to the event.",
        "Next.js API routes, Prisma data model on PostgreSQL, Tailwind CSS interface, Vercel deployment."
      ]
    },
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    links: [{ label: { fr: "Code source", en: "Source code" }, href: "https://github.com/brayann-Ouandji/invitation-mariage" }]
  }
];

const FLOW = {
  sources: {
    fr: ["Sources multi-canal", "Le site carrière, la boîte mail RH (IMAP), Indeed et LinkedIn alimentent le pipeline. Chaque canal extrait lui-même ses pièces jointes, un choix imposé par les limites de données binaires du task runner n8n 2.x."],
    en: ["Multi-channel sources", "The careers site, the HR mailbox (IMAP), Indeed and LinkedIn feed the pipeline. Each channel extracts its own attachments, a choice driven by binary data limits in the n8n 2.x task runner."]
  },
  n8n: {
    fr: ["Orchestration n8n", "Les workflows routent chaque candidature (nœud Switch qui consolide Indeed, LinkedIn et e-mail RH), appellent les services et écrivent en base. Logique ETL : ingestion, normalisation, chargement."],
    en: ["n8n orchestration", "Workflows route each application (a Switch node consolidating Indeed, LinkedIn and HR e-mail), call the services and write to the database. ETL logic: ingest, normalise, load."]
  },
  state: {
    fr: ["Machine à états", "Un workflow événementiel réagit aux nouvelles candidatures, un workflow planifié gère les relances et l'archivage. Le cycle de vie complet d'une candidature est couvert sans intervention manuelle."],
    en: ["State machine", "An event-driven workflow reacts to new applications, a scheduled one handles reminders and archiving. The full application lifecycle runs without manual work."]
  },
  fastapi: {
    fr: ["Services développés", "Un microservice Python / FastAPI extrait le texte des PDF et DOCX et génère le dossier de compétences .docx. Des services REST en Java / Spring Boot et Python encapsulent les appels aux modèles."],
    en: ["Custom services", "A Python / FastAPI microservice extracts text from PDF and DOCX files and generates the .docx candidate file. REST services in Java / Spring Boot and Python wrap the model calls."]
  },
  llm: {
    fr: ["Scoring par LLM", "Mistral AI et OpenAI analysent les compétences et attribuent une note sur 100 avec un classement en quatre niveaux. Les sorties sont évaluées pour garantir leur qualité et leur cohérence."],
    en: ["LLM scoring", "Mistral AI and OpenAI analyse skills and assign a score out of 100 with a four-tier ranking. Outputs are evaluated for quality and consistency."]
  },
  supabase: {
    fr: ["Données et stockage", "PostgreSQL (Supabase) centralise candidats, extractions et scores. Les CV sont dans un bucket privé, accessible uniquement par liens temporaires signés."],
    en: ["Data and storage", "PostgreSQL (Supabase) stores candidates, extractions and scores. CVs live in a private bucket, reachable only through signed temporary links."]
  },
  outputs: {
    fr: ["Livrables automatiques", "Dossier de compétences .docx, test technique généré en PDF et déposé via le site carrière, relances et archivage. L'ouverture à tous les métiers s'appuie sur un référentiel d'environ 100 postes."],
    en: ["Automatic deliverables", "A .docx candidate file, a generated PDF technical test submitted through the careers site, reminders and archiving. All job types are supported through a reference list of about 100 roles."]
  }
};

const ROLES = {
  fr: ["le développement back-end Java", "le développement web full-stack", "l'architecture logicielle", "l'automatisation des processus", "l'intégration de l'IA en production", "l'industrialisation et le DevOps"],
  en: ["back-end Java development", "full-stack web development", "software architecture", "process automation", "AI in production", "industrialisation and DevOps"]
};

/* ---------- Language ---------- */
let lang = "fr";
const L = v => (v && typeof v === "object" && !Array.isArray(v) && "fr" in v) ? v[lang] : v;
const I18N_FR = {};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function detectLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "fr" || q === "en") return q;
  try { const s = localStorage.getItem("lang"); if (s) return s; } catch (e) {}
  return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.title = UI[lang].title;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    const v = lang === "en" ? I18N_EN[k] : I18N_FR[k];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll(".lang-switch button").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (e) {}
  renderCards();
  showFlow(currentFlow);
  restartRotator();
}

/* ---------- Pattern covers ---------- */
function coverPattern(type, [c1, c2], uid) {
  const stroke = "rgba(244,240,230,.2)";
  let shapes = "";
  switch (type) {
    case "network": {
      const pts = [[60,60],[180,40],[300,90],[120,160],[250,180],[360,140],[40,190]];
      const links = [[0,1],[1,2],[0,3],[3,4],[4,5],[2,5],[3,6],[1,4]];
      shapes = links.map(([a,b]) => `<line x1="${pts[a][0]}" y1="${pts[a][1]}" x2="${pts[b][0]}" y2="${pts[b][1]}" stroke="${stroke}"/>`).join("")
        + pts.map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5" fill="rgba(224,161,90,.6)"/>`).join("");
      break;
    }
    case "radar":
      shapes = [30,60,90,120,150].map(r => `<circle cx="200" cy="112" r="${r}" fill="none" stroke="${stroke}"/>`).join("")
        + `<line x1="200" y1="112" x2="330" y2="40" stroke="rgba(224,161,90,.6)" stroke-width="2"/>`;
      break;
    case "map":
      shapes = Array.from({length: 9}, (_, i) => `<path d="M0 ${20 + i*24} Q 100 ${i*24} 200 ${20 + i*24} T 400 ${20 + i*24}" fill="none" stroke="${stroke}"/>`).join("");
      break;
    case "bars":
      shapes = [70,120,90,150,110,170,130].map((h, i) => `<rect x="${40 + i*48}" y="${225 - h}" width="26" height="${h}" fill="rgba(244,240,230,.12)"/>`).join("");
      break;
    case "grid":
      shapes = Array.from({length: 8}, (_, i) => `<line x1="${i*56}" y1="0" x2="${i*56 + 80}" y2="225" stroke="${stroke}"/>`).join("")
        + Array.from({length: 5}, (_, i) => `<line x1="0" y1="${i*50}" x2="400" y2="${i*50}" stroke="${stroke}"/>`).join("");
      break;
    case "flow":
      shapes = Array.from({length: 6}, (_, i) => `<rect x="${30 + (i%3)*125}" y="${40 + Math.floor(i/3)*90}" width="90" height="46" rx="8" fill="none" stroke="${stroke}"/>`).join("");
      break;
    case "waves":
      shapes = Array.from({length: 7}, (_, i) => `<circle cx="${i % 2 ? 320 : 80}" cy="${i % 2 ? 40 : 190}" r="${30 + i*22}" fill="none" stroke="${stroke}"/>`).join("");
      break;
  }
  return `<svg class="pattern" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="g-${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="225" fill="url(#g-${uid})"/>${shapes}</svg>`;
}

/* ---------- Projects ---------- */
const cardHTML = (p, cols) => `
  <div class="${cols} project-col${p._visible ? " is-visible" : ""} reveal" data-cats="${p.cats.join(" ")}">
    <button class="project" data-id="${p.id}" aria-label="${UI[lang].detailsAria} ${L(p.title)}">
      <div class="project-cover">
        ${p.image ? `<img src="${p.image}" alt="" loading="lazy">` : coverPattern(p.pattern, p.color, p.id) + `<span class="cover-icon"><i class="bi ${p.icon}"></i></span>`}
        <span class="cover-tag">${L(p.tag)}</span>
      </div>
      <div class="project-body">
        <span class="project-meta">${L(p.meta)}</span>
        <h3>${L(p.title)}</h3>
        <p>${L(p.summary)}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${L(t)}</span>`).join("")}</div>
        <span class="project-more">${UI[lang].details} <i class="bi bi-arrow-right"></i></span>
      </div>
    </button>
  </div>`;

let activeFilter = "all";
function renderCards() {
  const grid = document.getElementById("projectGrid");
  const extraGrid = document.getElementById("extraGrid");
  const firstRender = !grid.children.length;
  grid.innerHTML = PROJECTS.map(p => cardHTML({ ...p, _visible: !firstRender }, "col-md-6 col-lg-4")).join("");
  extraGrid.innerHTML = EXTRA.map(p => cardHTML({ ...p, _visible: !firstRender }, "col-12 col-xl-10 is-wide")).join("");
  if (firstRender) observeReveal(document.querySelectorAll(".project-col"));
  applyFilter(activeFilter, false);
}

function applyFilter(f, animate = true) {
  activeFilter = f;
  document.querySelectorAll("#projectGrid .project-col").forEach((col, i) => {
    const show = f === "all" || col.dataset.cats.split(" ").includes(f);
    col.classList.toggle("is-hidden", !show);
    if (show && animate && !reduceMotion) {
      col.classList.add("is-entering");
      setTimeout(() => col.classList.remove("is-entering"), 40 + i * 50);
    }
  });
}

function initProjects() {
  const ALL = [...PROJECTS, ...EXTRA];
  const modalEl = document.getElementById("projectModal");
  const modal = new bootstrap.Modal(modalEl);
  const open = e => {
    const card = e.target.closest(".project");
    if (!card) return;
    const p = ALL.find(x => x.id === card.dataset.id);
    document.getElementById("projectModalMeta").textContent = L(p.meta);
    document.getElementById("projectModalTitle").textContent = L(p.title);
    document.getElementById("projectModalBody").innerHTML = `
      <p class="mb-0">${L(p.context)}</p>
      <h4>${UI[lang].did}</h4>
      <ul class="points">${L(p.points).map(x => `<li>${x}</li>`).join("")}</ul>
      ${p.stack.length ? `<h4>${UI[lang].stack}</h4><div class="project-tags">${p.stack.map(t => `<span>${t}</span>`).join("")}</div>` : ""}
      ${p.links.length ? `<div class="d-flex flex-wrap gap-2 mt-4">${p.links.map(l =>
        `<a class="btn btn-accent btn-sm modal-link" href="${l.href}" ${l.internal ? "" : 'target="_blank" rel="noopener"'}>${L(l.label)} <i class="bi ${l.internal ? "bi-arrow-down" : "bi-arrow-up-right"} ms-1"></i></a>`).join("")}</div>` : ""}`;
    modal.show();
  };
  document.getElementById("projectGrid").addEventListener("click", open);
  document.getElementById("extraGrid").addEventListener("click", open);
  modalEl.addEventListener("click", e => { if (e.target.closest(".modal-link[href^='#']")) modal.hide(); });

  document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    applyFilter(btn.dataset.filter);
  }));
}

/* ---------- Reveal on scroll ---------- */
let revealObserver = null;
function observeReveal(items) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.children].filter(c => c.classList.contains("reveal"));
        entry.target.style.transitionDelay = `${Math.min(siblings.indexOf(entry.target), 6) * 70}ms`;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  items.forEach(el => revealObserver.observe(el));
}

/* ---------- Rotating role ---------- */
let rotTimer = null;
function restartRotator() {
  const el = document.getElementById("rotator");
  clearTimeout(rotTimer);
  let i = 0;
  el.textContent = ROLES[lang][0];
  if (reduceMotion) return;
  const type = (word, cb) => {
    let n = 0;
    const step = () => { el.textContent = word.slice(0, ++n); rotTimer = setTimeout(n < word.length ? step : cb, n < word.length ? 45 : 0); };
    step();
  };
  const erase = cb => {
    const step = () => { el.textContent = el.textContent.slice(0, -1); rotTimer = setTimeout(el.textContent.length ? step : cb, 22); };
    step();
  };
  const loop = () => { rotTimer = setTimeout(() => erase(() => { i = (i + 1) % ROLES[lang].length; type(ROLES[lang][i], loop); }), 2400); };
  loop();
}

/* ---------- Interactive flow ---------- */
let currentFlow = "n8n";
function showFlow(key) {
  currentFlow = key;
  const detail = document.getElementById("flowDetail");
  document.querySelectorAll(".flow-node").forEach(n => n.classList.toggle("is-related", n.dataset.node === key));
  const [t, txt] = FLOW[key][lang];
  document.getElementById("flowDetailTitle").textContent = t;
  document.getElementById("flowDetailText").textContent = txt;
  detail.classList.remove("is-changing"); void detail.offsetWidth; detail.classList.add("is-changing");
}
function initFlow() {
  const nodes = document.querySelectorAll(".flow-node");
  nodes.forEach(n => n.addEventListener("click", () => {
    nodes.forEach(x => x.classList.remove("is-active"));
    n.classList.add("is-active");
    showFlow(n.dataset.node);
  }));
}

/* ---------- Nav, progress, misc ---------- */
function initChrome() {
  const nav = document.getElementById("mainNav");
  const bar = document.querySelector(".scroll-progress span");
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
    nav.classList.toggle("is-scrolled", h.scrollTop > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const collapse = document.getElementById("navLinks");
  collapse.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    if (collapse.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(collapse).hide();
  }));

  document.querySelectorAll(".lang-switch button").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.lang !== lang) applyLang(b.dataset.lang);
  }));

  const copyBtn = document.getElementById("copyEmail");
  const feedback = document.getElementById("copyFeedback");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      feedback.textContent = UI[lang].copied;
      copyBtn.innerHTML = '<i class="bi bi-check2"></i>';
    } catch (e) { feedback.textContent = copyBtn.dataset.email; }
    setTimeout(() => { feedback.textContent = ""; copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>'; }, 2500);
  });

  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .25}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-i18n]").forEach(el => { I18N_FR[el.dataset.i18n] = el.innerHTML; });
  observeReveal(document.querySelectorAll(".reveal"));
  initProjects();
  initFlow();
  initChrome();
  applyLang(detectLang());
});
