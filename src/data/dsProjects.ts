// =============================================================
//  PROJETS DATA SCIENCE — contenu de la page /portfolio
//  Tout est éditable ici : textes, stacks, modèles, liens.
// =============================================================

export interface DsModel {
  name: string;
  metric: string;
  value: string;
  baseline?: boolean;
}

export interface DsProject {
  id: string;
  /** Sert aux filtres de la page : projets ML vs Data Engineering. */
  category: "ml" | "engineering";
  /** Chiffre mis en avant sur la tuile du listing. Optionnel. */
  highlight?: { value: string; label: string };
  /** Page dédiée. Si absent, la tuile ouvre une pop-up. */
  detailUrl?: string;
  index: string;
  title: string;
  short: string;      // libellé court pour le menu de navigation
  pitch: string;
  period: string;
  type: string;
  context: string;
  approach: string;
  impact: string;
  stack: string[];
  models?: DsModel[];
  keywords: string[];
  codeUrl: string;
  pdfUrl?: string;
}

export const dsProjects: DsProject[] = [
  {
    id: "phishing",
    highlight: { value: "3", label: "feature configurations compared" },
    category: "ml",
    index: "01",
    title: "Phishing URL Detection",
    short: "Phishing URL",
    pitch: "A classifier that flags malicious URLs on the PhiUSIIL dataset, and a lesson in spotting data leakage.",
    period: "2025",
    type: "Machine Learning · Cybersecurity",
    context:
      "Phishing detection looks easy until you inspect the features. On this dataset, some columns quietly encode the answer, so a naive model reaches near-perfect scores that would collapse in production.",
    approach:
      "I audited every feature, removed the leaking ones (URL similarity index, HTML-derived fields only computable after the page is fetched), rebuilt a clean pipeline, then compared linear, tree-based and boosted models with stratified cross-validation.",
    impact:
      "The honest model scores a few points lower on paper but actually generalises, and the write-up documents exactly which features to distrust and why.",
    stack: ["Python", "scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Jupyter"],
    // ⚠️ MÉTRIQUES À VÉRIFIER — remplace par tes vrais scores
    models: [
      { name: "Logistic Regression", metric: "F1", value: "0.89" },
      { name: "Random Forest", metric: "F1", value: "0.93" },
      { name: "XGBoost", metric: "ROC-AUC", value: "0.96" },
    ],
    keywords: ["Classification", "Data leakage", "Feature engineering", "Cross-validation", "Cybersecurity"],
    codeUrl: "/projects/phishing-code.html",
    pdfUrl: "/projects/phishing-report.pdf",
  },
  {
    id: "social-media",
    highlight: { value: "23,678", label: "users analysed" },
    category: "ml",
    index: "02",
    title: "Social Media & Mental Health",
    short: "Social Media",
    pitch: "Predicting negative mental-health impact from usage patterns, then segmenting who is most at risk.",
    period: "2025",
    type: "Machine Learning · Classification",
    context:
      "Aggregate statistics on screen time hide the fact that the same hour affects a teenager and an adult very differently. The interesting question is not how much, but for whom.",
    approach:
      "After cleaning and encoding the survey data, I trained classifiers to predict self-reported negative impact, then layered a segmentation by age group, creator vs. consumer behaviour and region to read the drivers per profile.",
    impact:
      "The segmentation surfaced patterns the global model averaged away, and became the core of the recommendations in the report.",
    stack: ["Python", "Pandas", "scikit-learn", "Seaborn", "Streamlit"],
    // ⚠️ MÉTRIQUES À VÉRIFIER — remplace par tes vrais scores
    models: [
      { name: "Random Forest", metric: "Accuracy", value: "0.87" },
      { name: "Gradient Boosting", metric: "F1", value: "0.85" },
      { name: "K-Means (segmentation)", metric: "Silhouette", value: "0.52" },
    ],
    keywords: ["Classification", "Segmentation", "Survey data", "Feature importance", "Storytelling"],
    codeUrl: "/projects/social-media-code.html",
    pdfUrl: "/projects/social-media-report.pdf",
  },
  {
    id: "marketing",
    highlight: { value: "5.7×", label: "campaign efficiency lift" },
    category: "ml",
    index: "03",
    title: "Marketing Campaign Targeting",
    short: "Marketing Campaign",
    pitch: "Ranking prospects in a telecom campaign so the calls go to the people most likely to subscribe.",
    period: "2025",
    type: "Machine Learning · Marketing Analytics",
    context:
      "Only 1 client in 9 subscribes, so a model that always answers “no” is already 88.7% accurate, and completely useless. On top of that, call duration leaks the outcome: you only know it once the call is over.",
    approach:
      "I checked multicollinearity (VIF), log-transformed the skewed predictors, then built two model families: pre-contact models that exclude the leaking duration, and full models kept only as a benchmark. Each was tuned with GridSearchCV on PR-AUC over stratified 5-fold CV, against dummy baselines.",
    impact:
      "Contacting only the top 5% of prospects ranked by the model captures 266 of the 927 subscribers: a 65% hit rate against an 11.3% baseline, roughly a 5.7× lift on campaign efficiency. The macro-economic context (euribor3m) turned out to dominate the decision.",
    stack: ["Python", "scikit-learn", "statsmodels", "Pandas", "NumPy", "Seaborn"],
    // ✅ Métriques réelles issues du notebook (PR-AUC en CV stratifiée 5-fold)
    models: [
      { name: "Logistic Regression (balanced)", metric: "PR-AUC", value: "0.435" },
      { name: "Random Forest", metric: "PR-AUC", value: "0.456" },
      { name: "HistGradientBoosting", metric: "PR-AUC", value: "0.466" },
      { name: "Dummy (majority class)", metric: "PR-AUC", value: "0.113", baseline: true },
    ],
    keywords: ["Imbalanced classification", "PR-AUC", "Data leakage", "GridSearchCV", "Top-K targeting", "Feature importance"],
    // Notebook exporté en HTML (lisible directement dans le navigateur, avec
    // les graphiques) + rapport PDF. Fichiers dans public/projects/.
    codeUrl: "/projects/marketing-campaign-code.html",
    pdfUrl: "/projects/marketing-campaign-report.pdf",
  },
  {
    id: "data-warehouse",
    highlight: { value: "2", label: "source systems unified" },
    category: "engineering",
    index: "04",
    title: "SQL Data Warehouse",
    short: "Data Warehouse",
    pitch: "Turning raw CRM and ERP exports into an analytics-ready star schema, through a Bronze/Silver/Gold pipeline.",
    period: "2026",
    type: "Data Engineering · Data Warehousing",
    context:
      "Sales, customer and product data lived in two disconnected systems, a CRM and an ERP, with overlapping keys and inconsistent formats. Answering a simple business question meant reconciling exports by hand every time.",
    approach:
      "I built a layered warehouse in PostgreSQL: a Bronze layer that lands the raw exports untouched, a Silver layer that cleans, types and reconciles keys across both systems, and a Gold layer modelled as a star schema with fact and dimension tables ready for analysis.",
    impact:
      "Business questions on customer behaviour, product performance and sales trends now come down to a single SQL query against the Gold layer, instead of a manual reconciliation.",
    stack: ["PostgreSQL", "SQL", "DBeaver", "Git", "Draw.io"],
    keywords: ["Data Warehousing", "ETL", "Medallion Architecture", "Dimensional Modeling", "Star Schema", "Data Cleaning"],
    codeUrl: "https://github.com/alizeemrchd22/sql-data-warehouse-project",
  },
  {
    id: "data-lake",
    highlight: { value: "2.6M", label: "rows processed" },
    category: "engineering",
    index: "05",
    title: "YouTube Trending Data Lake",
    short: "Data Lake",
    pitch: "Building a queryable data lake over 2.6M YouTube trending records spread across 10 countries, in CSV and JSON.",
    period: "2026",
    type: "Data Engineering · Data Lake",
    context:
      "Ten countries, two incompatible formats: daily trending videos as CSV, category labels as JSON, all sitting in cloud storage. The country was not even a column, it was buried in the filename. Nothing could be queried as-is.",
    approach:
      "I layered the pipeline in Snowflake: external tables read the files straight from the Azure stage without duplicating them, materialized tables type the data and recover the country from the filename (LATERAL FLATTEN unfolds the nested JSON), and a final table joins both sides on country and category. Cleaning then handled orphan categories, a broken video_id and near-duplicate rows resolved with ROW_NUMBER.",
    impact:
      "2,667,041 raw rows became 2,597,494 trustworthy ones. The single final table answers questions the raw files could not: category concentration per country, how long a video stays trending, and which channels dominate each category.",
    stack: ["Snowflake", "SQL", "Azure Blob Storage", "CSV", "JSON"],
    keywords: ["Data Lake", "External Tables", "Semi-structured JSON", "Deduplication", "Data Quality", "Window Functions"],
    codeUrl: "/projects/data-lake-sql.html",
    pdfUrl: "/projects/data-lake-report.pdf",
  },
];

// Récapitulatif des outils, par famille (section claire en bas de page).
// Volontairement resserré : seulement ce sur quoi Alizée a réellement travaillé.
export const toolbox = [
  { label: "Languages & Databases", items: ["Python", "SQL", "PostgreSQL", "Snowflake"] },
  { label: "Modelling", items: ["Logistic Regression", "Decision Tree", "Random Forest", "XGBoost", "HistGradientBoosting", "KNN"] },
  { label: "Data & Stats", items: ["Pandas", "NumPy", "scikit-learn", "statsmodels", "SciPy"] },
  { label: "Workflow", items: ["Jupyter", "Git", "DBeaver", "VS Code", "Agile"] },
];
