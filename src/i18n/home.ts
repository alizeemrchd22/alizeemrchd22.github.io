// =============================================================
//  Dictionnaire de traduction — page d'accueil uniquement pour l'instant.
//  Clés à plat ("section.sous-clé") posées directement en data-i18n sur les
//  éléments du DOM. Le switch est instantané côté client (voir I18nEngine.astro),
//  pas de nouvelles URLs par langue.
//
//  Ce qui N'EST PAS traduit, volontairement :
//  - noms d'entreprises, intitulés de poste, diplômes, noms de langues
//  - noms d'outils / compétences (Python, Figma, Scrum...) : termes universels
//  - les citations de recommandation LinkedIn (mots exacts des personnes)
// =============================================================

export type Lang = "en" | "fr" | "es" | "zh";

export const homeDict: Record<Lang, Record<string, string>> = {
  en: {
    "common.letsCall": "Let’s call",
    "common.letsGetInTouch": "Let’s get in Touch!",
    "common.readMissions": "Read the missions",
    "common.viewProject": "View Project",
    "common.professionalExperience": "Professional Experience",
    "common.moreAboutMe": "More about me",
    "common.letsWorkTogether": "Let’s work together",
    "common.mailMe": "Mail Me",

    "nav.home": "Home",
    "nav.competencies": "My Competencies",
    "nav.portfolio": "Data Science",
    "nav.aboutme": "About Me",

    "hero.roles": "Data Science · UX/UI · Project Management",
    "hero.titleMain": "I help transform complex information into better decisions, better products and",
    "hero.titleAccent": "practical solutions.",

    "values.authenticity.title": "Authenticity",
    "values.authenticity.text": "I value honesty, respect and meaningful collaboration. I believe the best ideas emerge when different perspectives challenge each other and everyone is empowered to contribute their unique strengths.",
    "values.curious.title": "Curious",
    "values.curious.text": "I'm driven by the desire to understand how things work. I enjoy exploring complex problems, connecting ideas across disciplines and continuously learning to build better, more thoughtful solutions.",
    "values.adventurous.title": "Adventurous",
    "values.adventurous.text": "I embrace new challenges with curiosity and determination. Whether it's a new industry, technology or responsibility, I'm always eager to learn, adapt and stay ahead in a fast-changing world.",

    "projects.title": "Data Science Projects",
    "projects.pitch.phishing": "A classifier that flags malicious URLs on the PhiUSIIL dataset, and a lesson in spotting data leakage.",
    "projects.pitch.socialMedia": "Predicting negative mental-health impact from usage patterns, then segmenting who is most at risk.",
    "projects.pitch.marketing": "Ranking prospects in a telecom campaign so the calls go to the people most likely to subscribe.",

    "backpack.title": "What's in my backpack ?",
    "backpack.intro": "A mix of code, design and project tools I've picked up along the way, and actually use to get things done.",
    "backpack.pm": "Project Management",
    "backpack.ds": "Data Science",
    "backpack.design": "Design",

    "experience.title": "So, what I've been up to ?",
    "experience.intro": "A mix of projects, challenges and roles that took me across industries. I've explored different worlds, picked up new skills, and learned how to connect the dots between business, tech and design.",
    "experience.ctaSeeFull": "See full experience",
    "experience.saphes.desc": "Driving product and design work end-to-end: from user research and wireframes to shipped interfaces and project coordination.",
    "experience.peftrust.desc": "Leading ISO 27001 certification programme, translating security standards into practical processes, and helping teams make security part of their everyday work.",
    "experience.maersk.desc": "Partnering with operational teams on cost visibility and container flow optimisation, with weekly P&L reporting and variance analysis across LatAm.",
    "experience.ijc.desc": "Running the business development, marketing and quality departments of a junior enterprise, setting pricing and value propositions, and owning budgeting and VAT.",

    "diplomas.title": "Diplomas & Certifications",
    "diplomas.intro": "From international business and corporate finance to data science, my academic journey has taken me across countries, and across disciplines.",
    "diplomas.cta": "My Data Science Project",

    "languages.title": "3 Fluent Language",
    "languages.intro": "France, Spain, Panama, Australia, and quite a few places in between. Living and working across countries has shaped the way I communicate, adapt and approach new environments.",

    "workethic.title": "My work Ethic",
    "workethic.subtitle": "I believe the best work is built on trust, curiosity and shared purpose.",
    "workethic.para1": "I enjoy building environments where ideas can be questioned, improved and transformed into meaningful and efficient solutions.",
    "workethic.para2": "Every conversation, every challenge and every project is an opportunity to learn.",
    "workethic.integrity.title": "Integrity",
    "workethic.integrity.desc": "I value honesty, transparency and respect in every collaboration. Great work starts with trust.",
    "workethic.collaboration.title": "Collaboration",
    "workethic.collaboration.desc": "The strongest solutions emerge when different perspectives meet. I believe in listening, constructive debate and shared ownership.",
    "workethic.continuous.title": "Continuous Improvement",
    "workethic.continuous.desc": "Every project is an opportunity to improve a product, refine a process and work more effectively together.",
    "workethic.quality.title": "Quality",
    "workethic.quality.desc": "If something is worth doing, it's worth doing well. I strive to create work that is thoughtful, useful and built to last.",

    "recommendations.title": "Straight from the people I've worked with",
    "recommendations.intro": "A couple of words from colleagues and managers, the kind of feedback that means more than any portfolio line.",
    "recommendations.hint": "View full recommendation on LinkedIn",

    "digcta.eyebrow": "Alizée Marchand",
    "digcta.title": "Let’s meet and have a talk!",
    "digcta.sub": "I’m always up for a call or a good iced coffee.",

    "footer.copyright": "© 2025 ALIZEE MARCHAND. All rights reserved.",
  },

  fr: {
    "common.letsCall": "On s'appelle ?",
    "common.letsGetInTouch": "Contactons-nous !",
    "common.readMissions": "Voir les missions",
    "common.viewProject": "Voir le projet",
    "common.professionalExperience": "Expérience professionnelle",
    "common.moreAboutMe": "En savoir plus sur moi",
    "common.letsWorkTogether": "Travaillons ensemble",
    "common.mailMe": "M'écrire",

    "nav.home": "Accueil",
    "nav.competencies": "Mes compétences",
    "nav.portfolio": "Data Science",
    "nav.aboutme": "À propos de moi",

    "hero.roles": "Data Science · UX/UI · Gestion de projet",
    "hero.titleMain": "Je rends l'information complexe compréhensible : de meilleures décisions, de meilleurs produits, des",
    "hero.titleAccent": "solutions concrètes.",

    "values.authenticity.title": "Authenticité",
    "values.authenticity.text": "Je crois en l'honnêteté, le respect et une collaboration sincère. Les meilleures idées naissent quand des points de vue différents se confrontent et que chacun peut apporter sa singularité.",
    "values.curious.title": "Curieuse",
    "values.curious.text": "Je suis animée par l'envie de comprendre comment les choses fonctionnent. J'aime explorer des problèmes complexes, relier des idées entre disciplines et apprendre en continu pour construire des solutions plus abouties.",
    "values.adventurous.title": "Aventurière",
    "values.adventurous.text": "J'aborde chaque nouveau défi avec curiosité et détermination. Qu'il s'agisse d'un nouveau secteur, d'une nouvelle technologie ou d'une nouvelle responsabilité, j'apprends et je m'adapte pour rester à la pointe dans un monde qui change vite.",

    "projects.title": "Projets Data Science",
    "projects.pitch.phishing": "Détecter automatiquement les URL malveillantes, en déjouant les variables piégées qui gonflent artificiellement les performances du modèle.",
    "projects.pitch.socialMedia": "Mesurer l'effet des réseaux sociaux sur la santé mentale, et identifier les facteurs de risque les plus déterminants.",
    "projects.pitch.marketing": "Repérer, dans une campagne télécom, les clients à contacter en priorité : ceux qui ont le plus de chances de souscrire.",

    "backpack.title": "Mes compétences couteau suisse",
    "backpack.intro": "Data, design et gestion de projet : les outils que j'ai appris à manier au fil des projets, et dont je me sers vraiment au quotidien.",
    "backpack.pm": "Gestion de projet",
    "backpack.ds": "Data Science",
    "backpack.design": "Design",

    "experience.title": "Mes expériences professionnelles",
    "experience.intro": "Différents postes et différents rôles, qui m'ont fait traverser plusieurs secteurs et plusieurs pays. J'y ai appris de nouvelles compétences, et surtout à relier le business, la tech et le design.",
    "experience.ctaSeeFull": "Voir toute l'expérience",
    "experience.saphes.desc": "Piloter le produit et le design de bout en bout : de la recherche utilisateur aux wireframes, jusqu'aux interfaces livrées et à la coordination de projet.",
    "experience.peftrust.desc": "Diriger le programme de certification ISO 27001, traduire les normes de sécurité en processus concrets, et aider les équipes à faire de la sécurité un réflexe au quotidien.",
    "experience.maersk.desc": "Travail avec les équipes opérationnelles sur la visibilité des coûts et l'optimisation des flux de conteneurs, avec reporting P&L hebdomadaire et analyse des écarts sur la zone Amérique latine.",
    "experience.ijc.desc": "Direction des pôles business development, marketing et qualité d'une junior-entreprise, définition du positionnement tarifaire et de l'offre, et pilotage du budget et de la TVA.",

    "diplomas.title": "Diplômes & Certifications",
    "diplomas.intro": "Du commerce international et de la finance d'entreprise à la data science, mon parcours académique m'a fait traverser plusieurs pays, et plusieurs disciplines.",
    "diplomas.cta": "Mon projet Data Science",

    "languages.title": "3 langues courantes",
    "languages.intro": "France, Espagne, Panama, Australie, et quelques escales entre les deux. Vivre et travailler dans différents pays a façonné ma façon de communiquer, de m'adapter et d'aborder de nouveaux environnements.",

    "workethic.title": "Mon éthique de travail",
    "workethic.subtitle": "Je crois que le meilleur travail se construit sur la confiance, la curiosité et un objectif partagé.",
    "workethic.para1": "J'aime créer des environnements où les idées peuvent être questionnées, améliorées et transformées en solutions concrètes et efficaces.",
    "workethic.para2": "Chaque conversation, chaque défi et chaque projet est une occasion d'apprendre.",
    "workethic.integrity.title": "Intégrité",
    "workethic.integrity.desc": "Je place l'honnêteté, la transparence et le respect au cœur de chaque collaboration. Un travail de qualité commence par la confiance.",
    "workethic.collaboration.title": "Collaboration",
    "workethic.collaboration.desc": "Les meilleures solutions naissent de la rencontre de points de vue différents. Je crois en l'écoute, au débat constructif et à la responsabilité partagée.",
    "workethic.continuous.title": "Amélioration continue",
    "workethic.continuous.desc": "Chaque projet est une occasion d'améliorer un produit, d'affiner un processus et de mieux travailler ensemble.",
    "workethic.quality.title": "Qualité",
    "workethic.quality.desc": "Si quelque chose mérite d'être fait, il mérite d'être bien fait. Je m'efforce de produire un travail réfléchi, utile et durable.",

    "recommendations.title": "Directement de la part de ceux avec qui j'ai travaillé",
    "recommendations.intro": "Quelques mots de collègues et de managers, le genre de retour qui compte plus que n'importe quelle ligne de portfolio.",
    "recommendations.hint": "Voir la recommandation complète sur LinkedIn",

    "digcta.eyebrow": "Alizée Marchand",
    // Titre volontairement laissé en anglais, même en version française.
    "digcta.title": "Let’s meet and have a talk!",
    "digcta.sub": "Je suis toujours partante pour un appel ou un bon café glacé.",

    "footer.copyright": "© 2025 ALIZEE MARCHAND. Tous droits réservés.",
  },

  es: {
    "common.letsCall": "Hablemos",
    "common.letsGetInTouch": "¡Contactemos!",
    "common.readMissions": "Ver las misiones",
    "common.viewProject": "Ver proyecto",
    "common.professionalExperience": "Experiencia profesional",
    "common.moreAboutMe": "Más sobre mí",
    "common.letsWorkTogether": "Trabajemos juntos",
    "common.mailMe": "Escríbeme",

    "nav.home": "Inicio",
    "nav.competencies": "Mis competencias",
    "nav.portfolio": "Data Science",
    "nav.aboutme": "Sobre mí",

    "hero.roles": "Data Science · UX/UI · Gestión de proyectos",
    "hero.titleMain": "Ayudo a transformar información compleja en decisiones más acertadas, mejores productos y",
    "hero.titleAccent": "soluciones prácticas.",

    "values.authenticity.title": "Autenticidad",
    "values.authenticity.text": "Valoro la honestidad, el respeto y una colaboración sincera. Creo que las mejores ideas surgen cuando distintas perspectivas se desafían entre sí y todos pueden aportar lo que los hace únicos.",
    "values.curious.title": "Curiosa",
    "values.curious.text": "Me motiva el deseo de entender cómo funcionan las cosas. Disfruto explorando problemas complejos, conectando ideas entre disciplinas y aprendiendo continuamente para construir soluciones más sólidas.",
    "values.adventurous.title": "Aventurera",
    "values.adventurous.text": "Afronto cada nuevo reto con curiosidad y determinación. Ya sea una nueva industria, tecnología o responsabilidad, siempre estoy dispuesta a aprender, adaptarme y mantenerme a la vanguardia en un mundo que cambia rápido.",

    "projects.title": "Proyectos de Data Science",
    "projects.pitch.phishing": "Un clasificador que detecta URLs maliciosas en el dataset PhiUSIIL, y una lección sobre fugas de datos.",
    "projects.pitch.socialMedia": "Predecir el impacto negativo en la salud mental a partir de los patrones de uso, y luego identificar quién está más en riesgo.",
    "projects.pitch.marketing": "Detectar, en una campaña de telecomunicaciones, a qué clientes llamar primero: los que tienen más probabilidades de contratar.",

    "backpack.title": "¿Qué llevo en mi mochila?",
    "backpack.intro": "Una mezcla de herramientas de código, diseño y gestión de proyectos que he ido reuniendo con el tiempo, y que realmente uso para sacar el trabajo adelante.",
    "backpack.pm": "Gestión de proyectos",
    "backpack.ds": "Data Science",
    "backpack.design": "Diseño",

    "experience.title": "Entonces, ¿en qué he estado?",
    "experience.intro": "Una mezcla de proyectos, retos y roles que me han llevado por distintas industrias. He explorado mundos diferentes, adquirido nuevas habilidades y aprendido a conectar negocio, tecnología y diseño.",
    "experience.ctaSeeFull": "Ver toda la experiencia",
    "experience.saphes.desc": "Liderando el trabajo de producto y diseño de principio a fin: desde la investigación de usuarios y los wireframes hasta las interfaces entregadas y la coordinación del proyecto.",
    "experience.peftrust.desc": "Liderando el programa de certificación ISO 27001, traduciendo estándares de seguridad en procesos prácticos, y ayudando a los equipos a hacer de la seguridad parte de su día a día.",
    "experience.maersk.desc": "Colaboración con los equipos operativos en la visibilidad de costes y la optimización del flujo de contenedores, con reporting semanal de P&L y análisis de desviaciones en Latinoamérica.",
    "experience.ijc.desc": "Dirección de los departamentos de desarrollo de negocio, marketing y calidad de una junior empresa, definiendo precios y propuesta de valor, y gestionando presupuesto e IVA.",

    "diplomas.title": "Diplomas y Certificaciones",
    "diplomas.intro": "Desde los negocios internacionales y las finanzas corporativas hasta la ciencia de datos, mi trayectoria académica me ha llevado por distintos países, y distintas disciplinas.",
    "diplomas.cta": "Mi proyecto de Data Science",

    "languages.title": "3 idiomas con fluidez",
    "languages.intro": "Francia, España, Panamá, Australia, y varias paradas entremedias. Vivir y trabajar en distintos países ha moldeado mi forma de comunicarme, adaptarme y afrontar nuevos entornos.",

    "workethic.title": "Mi ética de trabajo",
    "workethic.subtitle": "Creo que el mejor trabajo se construye sobre la confianza, la curiosidad y un propósito compartido.",
    "workethic.para1": "Me gusta crear entornos donde las ideas puedan cuestionarse, mejorarse y convertirse en soluciones útiles y eficaces.",
    "workethic.para2": "Cada conversación, cada reto y cada proyecto es una oportunidad para aprender.",
    "workethic.integrity.title": "Integridad",
    "workethic.integrity.desc": "Valoro la honestidad, la transparencia y el respeto en cada colaboración. El buen trabajo empieza por la confianza.",
    "workethic.collaboration.title": "Colaboración",
    "workethic.collaboration.desc": "Las mejores soluciones surgen cuando se encuentran distintas perspectivas. Creo en la escucha, el debate constructivo y la responsabilidad compartida.",
    "workethic.continuous.title": "Mejora continua",
    "workethic.continuous.desc": "Cada proyecto es una oportunidad para mejorar un producto, afinar un proceso y trabajar mejor en equipo.",
    "workethic.quality.title": "Calidad",
    "workethic.quality.desc": "Si algo merece hacerse, merece hacerse bien. Busco crear un trabajo reflexivo, útil y duradero.",

    "recommendations.title": "Directamente de quienes han trabajado conmigo",
    "recommendations.intro": "Unas palabras de colegas y responsables, el tipo de comentario que vale más que cualquier línea de un portafolio.",
    "recommendations.hint": "Ver la recomendación completa en LinkedIn",

    "digcta.eyebrow": "Alizée Marchand",
    "digcta.title": "Let’s meet and have a talk!",
    "digcta.sub": "Siempre estoy lista para una llamada o un buen café helado.",

    "footer.copyright": "© 2025 ALIZEE MARCHAND. Todos los derechos reservados.",
  },

  zh: {
    "common.letsCall": "预约通话",
    "common.letsGetInTouch": "联系我",
    "common.readMissions": "查看工作内容",
    "common.viewProject": "查看项目",
    "common.professionalExperience": "工作经历",
    "common.moreAboutMe": "更多关于我",
    "common.letsWorkTogether": "一起合作吧",
    "common.mailMe": "给我发邮件",

    "nav.home": "首页",
    "nav.competencies": "我的能力",
    "nav.portfolio": "数据科学",
    "nav.aboutme": "关于我",

    "hero.roles": "数据科学 · UX/UI · 项目管理",
    "hero.titleMain": "我帮助将复杂的信息转化为更好的决策、更好的产品，以及",
    "hero.titleAccent": "切实可行的解决方案。",

    "values.authenticity.title": "真诚",
    "values.authenticity.text": "我重视诚实、尊重和真诚的合作。我相信最好的想法来自不同观点的碰撞，以及每个人都能发挥自己独特优势的环境。",
    "values.curious.title": "好奇",
    "values.curious.text": "我渴望理解事物运作的方式。我喜欢探索复杂的问题，跨学科连接想法，并持续学习，以构建更完善、更周全的解决方案。",
    "values.adventurous.title": "敢于冒险",
    "values.adventurous.text": "我以好奇心和决心迎接每一个新挑战。无论是新的行业、新技术还是新的责任，我都乐于学习、适应，并在快速变化的世界中保持领先。",

    "projects.title": "数据科学项目",
    "projects.pitch.phishing": "一个在 PhiUSIIL 数据集上识别恶意网址的分类器，也是一堂关于数据泄漏的课。",
    "projects.pitch.socialMedia": "根据使用习惯预测对心理健康的负面影响，并识别出风险最高的人群。",
    "projects.pitch.marketing": "在电信营销活动中找出最值得优先致电的客户，也就是最有可能签约的那批人。",

    "backpack.title": "我的工具箱里有什么？",
    "backpack.intro": "这是我一路积累下来的代码、设计和项目管理工具，而且是真正在用的那些。",
    "backpack.pm": "项目管理",
    "backpack.ds": "数据科学",
    "backpack.design": "设计",

    "experience.title": "那么，我最近都在做什么？",
    "experience.intro": "一系列跨越不同行业的项目、挑战和角色。我探索了不同的领域，学到了新技能，也学会了如何将商业、技术与设计联系起来。",
    "experience.ctaSeeFull": "查看完整经历",
    "experience.saphes.desc": "全流程主导产品与设计工作：从用户调研、线框图到最终交付的界面与项目协调。",
    "experience.peftrust.desc": "主导 ISO 27001 认证项目，将安全标准转化为可落地的流程，帮助团队把安全融入日常工作。",
    "experience.maersk.desc": "与运营团队合作提升成本可见度、优化集装箱周转，并负责拉美区域的每周损益报告与差异分析。",
    "experience.ijc.desc": "负责一家初级企业的业务拓展、市场与质量部门，制定定价与价值主张，并统筹预算与增值税申报。",

    "diplomas.title": "学历与认证",
    "diplomas.intro": "从国际商务、企业金融到数据科学，我的求学之路跨越了不同国家，也跨越了不同学科。",
    "diplomas.cta": "我的数据科学项目",

    "languages.title": "精通3种语言",
    "languages.intro": "法国、西班牙、巴拿马、澳大利亚，中间还经停了不少地方。在不同国家生活和工作，塑造了我沟通、适应和面对新环境的方式。",

    "workethic.title": "我的工作理念",
    "workethic.subtitle": "我相信最好的工作建立在信任、好奇心和共同目标之上。",
    "workethic.para1": "我喜欢营造一种氛围：想法可以被质疑、被完善，并最终转化为有意义且高效的解决方案。",
    "workethic.para2": "每一次交流、每一个挑战、每一个项目，都是学习的机会。",
    "workethic.integrity.title": "诚信",
    "workethic.integrity.desc": "我在每一次合作中都重视诚实、透明与尊重。优秀的工作始于信任。",
    "workethic.collaboration.title": "协作",
    "workethic.collaboration.desc": "最好的解决方案来自不同观点的碰撞。我相信倾听、建设性的讨论，以及共同承担责任。",
    "workethic.continuous.title": "持续改进",
    "workethic.continuous.desc": "每个项目都是改进产品、优化流程、更高效协作的机会。",
    "workethic.quality.title": "品质",
    "workethic.quality.desc": "值得做的事，就值得做好。我努力让每一份工作都经得起推敲、切实有用、经久耐用。",

    "recommendations.title": "来自共事伙伴的真实评价",
    "recommendations.intro": "来自同事和上级的几句话，这种反馈，比任何作品集里的一行字都更有分量。",
    "recommendations.hint": "在领英查看完整推荐",

    "digcta.eyebrow": "Alizée Marchand",
    "digcta.title": "Let’s meet and have a talk!",
    "digcta.sub": "我随时乐意接个电话，或者喝杯冰咖啡聊聊。",

    "footer.copyright": "© 2025 ALIZEE MARCHAND. 保留所有权利。",
  },
};
