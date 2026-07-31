// =============================================================
//  CONTENU DU SITE — édite librement ce fichier.
//  Tout le texte du portfolio est ici. Pas besoin de toucher au design.
//  Les repères "À COMPLÉTER" = infos placeholder à remplacer par tes vraies données.
// =============================================================

export const site = {
  name: "Alizée Marchand",
  // Ton positionnement pro (affiché en gros dans le Hero). ← confirme / ajuste
  role: "Data Scientist",
  // Pitch en une phrase (le cœur de ta proposition de valeur). ← ajuste à ta voix
  tagline: "I turn raw data into clear, decision-ready insights — bridging data science, product and design.",
  // Petite phrase perso, plus légère (optionnelle).
  motto: "Smiling costs nothing and brings everything.",
  location: "Paris, France · open to remote",
  email: "alizee.mrchd@icloud.com", // ← mets l'adresse que tu veux afficher publiquement
  // Affiché tel quel sur les boutons de contact ; phoneHref sert au lien tel:
  phone: "+61 423 477 305",
  phoneHref: "tel:+61423477305",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alizée-marchand-b8822a220" },
    { label: "GitHub", href: "#" },   // À COMPLÉTER : ton URL GitHub
  ],
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
];

// --- Ce qui te définit (3 cartes "valeurs") ---
export const values = [
  {
    icon: "sun",
    title: "Authenticity",
    text: "I value honesty, respect and meaningful collaboration. I believe the best ideas emerge when different perspectives challenge each other and everyone is empowered to contribute their unique strengths.",
  },
  {
    icon: "eye",
    title: "Curious",
    text: "I'm driven by the desire to understand how things work. I enjoy exploring complex problems, connecting ideas across disciplines and continuously learning to build better, more thoughtful solutions.",
  },
  {
    icon: "compass",
    title: "Adventurous",
    text: "I embrace new challenges with curiosity and determination. Whether it's a new industry, technology or responsibility, I'm always eager to learn, adapt and stay ahead in a fast-changing world.",
  },
];

// --- Projets Data Science ---
// Le 1er est repris de ta maquette. Remplace / complète les autres avec tes vrais projets.
export const projects = [
  {
    title: "DataLens",
    blurb:
      "An automated EDA and reporting tool that turns raw CSV uploads into visual insights in seconds. Built for non-technical stakeholders.",
    tags: ["Data Science", "Python", "Streamlit", "ML"],
    href: "#", // À COMPLÉTER : lien démo / GitHub
  },
  {
    title: "Project 2", // À COMPLÉTER : nom de ton 2e projet
    blurb: "Short description of the problem, your approach and the impact.", // À COMPLÉTER
    tags: ["Python", "Pandas", "XGBoost"],
    href: "#",
  },
  {
    title: "Project 3", // À COMPLÉTER : nom de ton 3e projet
    blurb: "Short description of the problem, your approach and the impact.", // À COMPLÉTER
    tags: ["Data Science", "NLP", "Visualization"],
    href: "#",
  },
];

// --- Toolkit ("What's in my backpack?") ---
export const toolkit = {
  intro:
    "A mix of code, design and project tools I’ve picked up along the way — and actually use to get things done.",
  groups: [
    { label: "Data Science", items: ["Python", "SQL", "Data Visualization", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Feature Engineering", "Scikit-learn", "Pandas", "NumPy", "Prompt Engineering"] },
    { label: "Project Management", items: ["Agile", "Scrum", "Jira", "Sprint Planning", "Backlog Management", "Functional Specifications", "Client Workshops", "Testing", "Framework Training"] },
    { label: "Design", items: ["UX Design", "UI Design", "Figma", "Design Systems", "Wireframing", "Prototyping", "User Flows", "Brand Identity", "Visual Identity", "Responsive Design", "Developer Handoff", "Accessibility"] },
  ],
};

// --- Diplômes & certifications ---
export const education = {
  intro:
    "From international business and corporate finance to data science, my academic journey has taken me across countries — and across disciplines.",
  items: [
    { school: "IPAG Business School", degree: "PGE Master — Corporate Finance", years: "2020-2025" }, // À COMPLÉTER : dates exactes
    { school: "UTS (Sydney)", degree: "Master — Data & Innovation", years: "2025-2027" },            // À COMPLÉTER
    { school: "LMU (Munich)", degree: "Bachelor of Honours", years: "2023-2024" },                    // À COMPLÉTER
  ],
};

// --- "At home, almost everywhere" ---
export const geography = {
  title: "At home, almost everywhere",
  text:
    "France, Spain, Panama, Australia — and quite a few places in between. Living and working across countries has shaped the way I communicate, adapt and approach new environments.",
};

// --- Langues ---
export const languages = [
  { lang: "French", level: "Native", note: "Native language" },
  { lang: "Spanish", level: "C1", note: "Worked and studied in Spanish" },
  { lang: "English", level: "C1", note: "All my master’s studies in English · lived in LA, California" },
];

// --- Expériences pro ---
export const experiences = [
  {
    company: "Saphes",
    role: "Project Management & UI/UX Designer",
    years: "2025-2026", // À COMPLÉTER : dates exactes
    description: "", // ajoute une phrase de mission si tu veux l'afficher dépliée
    tags: ["Project Management", "UI/UX", "Figma"],
    href: "#",
  },
  {
    company: "PEFtrust",
    role: "ISO 27001 Project Manager",
    years: "2025-2026", // À COMPLÉTER
    description:
      "Leading the ISO 27001 certification programme, translating security standards into practical processes, and helping teams make security part of their everyday work.",
    tags: ["Cybersecurity", "PM", "Security Policies", "Operational Procedures", "Security KPIs & Alerting"],
    href: "#",
  },
  {
    company: "Maersk",
    role: "Process", // À COMPLÉTER : intitulé de poste précis
    years: "2025-2026", // À COMPLÉTER
    description: "",
    tags: ["Process", "Operations"],
    href: "#",
  },
  {
    company: "IJC",
    role: "Mobile App Development",
    years: "2025-2026", // À COMPLÉTER
    description: "",
    tags: ["Mobile", "Development"],
    href: "#",
  },
];
