// =============================================================
//  Projets du portfolio — pages de détail (/projects/<slug>)
//  Édite ici titres, dates, liens ET les textes de la galerie.
//  Chaque rangée de galerie = une image mockup + du VRAI texte HTML.
// =============================================================

export interface GalleryRow {
  img?: string;            // fichier dans public/assets/projects/ (absent = ligne texte seul, en attendant l'image)
  imgs?: string[];         // plusieurs fichiers = mini-carrousel (fondu automatique) à la place d'une image fixe
  alt: string;
  full?: boolean;         // true = image pleine largeur, sans texte
  side?: "left" | "right"; // côté de l'image (le texte prend l'autre côté)
  texts?: string[];       // paragraphes affichés à côté de l'image
}

export interface ProjectContext {
  eyebrow: string;
  text: string;
  facts?: string[]; // ex. "Role: Project Manager" — affichés en chips
}

export interface Project {
  title: string;
  subtitle: string;
  date: string;
  url: string; // lien "Visit Website"
  logo?: string;
  screenshot?: string; // grand aperçu du site (optionnel : certains projets n'en ont pas)
  // Section "brief" entre le hero et la galerie — comble la transition quand
  // il n'y a pas de grand screenshot. Optionnel.
  context?: ProjectContext;
  // 2e bouton du hero, en plus de "Visit Website". Optionnel.
  secondaryCta?: { label: string; href: string };
  gallery: GalleryRow[];
}

const saphesText1 =
  "Saphes needed a digital identity that reflected the quality of its engineering. The challenge wasn't to create a visually complex website, but to communicate technical expertise, privacy and reliability through a clean, confident and highly structured experience. Every design decision had to reinforce the company's premium positioning.";

const saphesText2 =
  "Every interface was designed with technical implementation in mind. Rather than separating aesthetics from functionality, the project focused on creating a design system that developers could implement consistently while preserving usability, scalability and performance. The result is an experience that feels both elegant and engineered.";

const saphesText3 =
  "One of the biggest challenges was balancing minimalism with personality. Rather than relying on decorative elements, the design uses monochrome contrasts, generous whitespace and custom illustrations to express sophistication. Every detail was intentionally designed to reinforce a sense of precision, quality and technical craftsmanship.";

const saphesText4 =
  "Designing the Saphes website taught me that a successful digital product isn't designed for users alone. It's also designed for the people who build it, maintain it and evolve it over time. Every interface was approached as part of a larger system—from reusable components and a structured design file to a scalable visual identity that development teams could easily understand and build upon. The goal wasn't simply to deliver a beautiful website, but to create a solid foundation that could support the company's long-term growth.";

const dieteticienneText1 =
  "The website was designed as a scalable content system rather than a collection of static pages. Every section was built as a reusable block, allowing the client to easily reorganise pages, publish new content and evolve the website independently. The challenge was to create a platform that would remain flexible as her practice and educational content continued to grow.";

const dieteticienneText2 =
  "The client needed a website that felt both credible and approachable. The design combines a clean editorial layout with warm photography, soft gradients and generous whitespace to create an experience that feels reassuring, personal and easy to navigate. The objective was to build trust from the very first interaction.";

const dieteticienneText3 =
  "Beyond the website, the project included the creation of a complete visual identity. From typography and colour palettes to gradients, graphic elements and visual guidelines, every asset was designed to create a consistent presence across Instagram, YouTube, the website and future communication channels.";

const dieteticienneText4 =
  "This project reinforced my belief that good digital products should be designed as systems. The interface serves visitors, while the underlying structure empowers the client. By combining reusable components, scalable content and a cohesive visual identity, the website became a platform that can evolve alongside Fleur's business for years to come.";

const peftrustText1 =
  "PEFtrust needed its website to become the first real step of the sales funnel — a page a sales rep could send that would already do part of the pitch. As the project's first Project Manager, I ran workshops with the sales, engineering and leadership teams to turn the value of Life Cycle Assessment for fashion brands into a clear, credible story.";

const peftrustText2 =
  "Working within a fixed design budget and PEFtrust's existing brand guidelines, I wrote the full specification document and briefed the designer on reinterpreting the identity around the lifecycle theme: circular motifs, a high-tech, high-definition feel, and enough granularity to read as technical without overwhelming a first-time visitor.";

const peftrustText3 =
  "The hardest trade-off was the product showcase. The site had to convey the depth of the SaaS dashboard — carbon accounting, CSRD reporting, per-SKU environmental impact — without exposing enough detail for competitors to reverse-engineer the methodology. Every mockup was reviewed with the product team before it went live.";

const peftrustText4 =
  "I coordinated design, development and sales through iterative workshops and regular progress updates, keeping every team aligned as the site evolved sprint by sprint. It was my first time owning a project end-to-end as PM, and it taught me that most of the job is translation — between sales language, design constraints and what engineering can actually ship.";

export const projects: Record<string, Project> = {
  saphes: {
    title: "Saphes IT Systems",
    subtitle:
      "Saphes is a software engineering company specialised in building secure, scalable and tailor-made digital solutions. From enterprise CMS platforms to e-commerce ecosystems and workflow automation.",
    date: "July 2025",
    url: "https://saphes.io/fr/",
    logo: "/assets/projects/saphes-logo.webp",
    screenshot: "/assets/projects/saphes-screenshot.webp",
    gallery: [
      { img: "saphes-phones.webp", alt: "Version mobile du site Saphes — écrans empilés", side: "left", texts: [saphesText1] },
      { img: "saphes-laptop.webp", alt: "Page équipe du site Saphes sur MacBook", side: "right", texts: [saphesText2] },
      { img: "saphes-board.webp", alt: "Sections Expertise et Programming Languages du site Saphes", full: true },
      { img: "saphes-ipad.webp", alt: "Site Saphes sur iPad", side: "right", texts: [saphesText3, saphesText4] },
    ],
  },
  dieteticienne: {
    title: "Diététicienne du SII",
    subtitle:
      "Fleur is a registered dietitian specialising in Irritable Bowel Syndrome (IBS) and a content creator with a community of over 100,000 people on Instagram. The project involved designing a complete visual identity and a scalable website that reflects her expertise while creating a warm, trustworthy experience across every digital touchpoint.",
    date: "August 2026",
    url: "/about", // en attendant le vrai site, renvoie vers l'expérience pro
    screenshot: "/assets/projects/dieteticienne-screenshot.webp",
    gallery: [
      { img: "diet-phones.webp", alt: "Version mobile du site Diététicienne du SII — écrans empilés", side: "left", texts: [dieteticienneText1] },
      { img: "diet-laptop.webp", alt: "Page d’accueil Diététicienne du SII sur MacBook", side: "right", texts: [dieteticienneText2] },
      { img: "diet-board.webp", alt: "Section PoopCast du site Diététicienne du SII", full: true },
      { img: "diet-laptop2.webp", alt: "Protocole FODMAP sur MacBook", side: "right", texts: [dieteticienneText3] },
      // Charte graphique complète — carrousel des différentes pages du guide de style.
      {
        full: true,
        alt: "Pages de la charte graphique — typographie, palette, dégradés, éléments graphiques, moodboard",
        imgs: [
          "diet-brand-typography.webp",
          "diet-brand-headlines.webp",
          "diet-brand-shades.webp",
          "diet-brand-colors.webp",
          "diet-brand-blur.webp",
          "diet-brand-elements.webp",
          "diet-brand-gradients.webp",
          "diet-brand-moodboard.webp",
        ],
      },
      { img: "diet-laptop3.webp", alt: "Section vidéo du site sur MacBook", side: "right", texts: [dieteticienneText4] },
    ],
  },
  peftrust: {
    title: "PEFtrust",
    subtitle:
      "PEFtrust is a fashion-tech SaaS company bringing Life Cycle Assessment (LCA) intelligence to fashion and lifestyle brands — from a single SKU to entire collections. I led the website redesign and partial rebrand as Project Manager, my first end-to-end ownership of a project.",
    date: "2022-2023",
    url: "https://www.peftrust.com",
    logo: "/assets/exp-peftrust.webp",
    secondaryCta: { label: "See my Professional Experience", href: "/about" },
    // Pas de grand aperçu pour ce projet — une section "brief" fait la
    // transition entre le hero et la galerie à la place.
    context: {
      eyebrow: "The Brief",
      text: "PEFtrust helps fashion and lifestyle brands run Life Cycle Assessments (LCA) — from a single SKU to entire collections — and turn environmental data into carbon accounting, CSRD reporting and sourcing decisions. The website needed to become the first step of the sales funnel, translate that technical depth into a credible story for prospects, and support a partial rebrand — all within a fixed design budget and PEFtrust's existing brand guidelines.",
    },
    gallery: [
      { img: "peftrust-hero.webp", alt: "Page d’accueil du site PEFtrust — « From SKU to Strategy »", side: "left", texts: [peftrustText1] },
      { img: "peftrust-lifecycle.webp", alt: "Section Lifecycle Assessment du site PEFtrust", side: "right", texts: [peftrustText2] },
      // Les 2 états du dashboard ("Data capture" / "Analyze & Share") en mini-carrousel.
      { imgs: ["peftrust-dashboard-1.webp", "peftrust-dashboard-2.webp"], alt: "Dashboard produit — Carbon Accounting et CSRD", side: "left", texts: [peftrustText3] },
      { img: "peftrust-smarter.webp", alt: "Section « Smarter Sustainability » du site PEFtrust", side: "right", texts: [peftrustText4] },
    ],
  },
};
