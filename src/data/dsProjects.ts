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
  models: DsModel[];
  keywords: string[];
  codeUrl: string;
  pdfUrl: string;
}

export const dsProjects: DsProject[] = [
  {
    id: "phishing",
    index: "01",
    title: "Phishing URL Detection",
    short: "Phishing URL",
    pitch: "A classifier that flags malicious URLs on the PhiUSIIL dataset — and a lesson in spotting data leakage.",
    period: "2025",
    type: "Machine Learning · Cybersecurity",
    context:
      "Phishing detection looks easy until you inspect the features. On this dataset, some columns quietly encode the answer, so a naive model reaches near-perfect scores that would collapse in production.",
    approach:
      "I audited every feature, removed the leaking ones (URL similarity index, HTML-derived fields only computable after the page is fetched), rebuilt a clean pipeline, then compared linear, tree-based and boosted models with stratified cross-validation.",
    impact:
      "The honest model scores a few points lower on paper but actually generalises — and the write-up documents exactly which features to distrust and why.",
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
    codeUrl: "#",
    pdfUrl: "#",
  },
  {
    id: "marketing",
    index: "03",
    title: "Marketing Campaign Targeting",
    short: "Marketing Campaign",
    pitch: "Predicting which bank clients subscribe to a term deposit — and turning the model into a call list that converts.",
    period: "2025",
    type: "Machine Learning · Marketing Analytics",
    context:
      "Only 1 client in 9 subscribes, so a model that always answers “no” is already 88.7% accurate — and completely useless. On top of that, call duration leaks the outcome: you only know it once the call is over.",
    approach:
      "I checked multicollinearity (VIF), log-transformed the skewed predictors, then built two model families: pre-contact models that exclude the leaking duration, and full models kept only as a benchmark. Each was tuned with GridSearchCV on PR-AUC over stratified 5-fold CV, against dummy baselines.",
    impact:
      "Contacting only the top 5% of prospects ranked by the model captures 266 of the 927 subscribers — a 65% hit rate against an 11.3% baseline, roughly a 5.7× lift on campaign efficiency. The macro-economic context (euribor3m) turned out to dominate the decision.",
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
];

// Récapitulatif des outils, regroupés (section claire en bas de page)
export const toolbox = [
  { label: "Languages", items: ["Python", "SQL", "R"] },
  { label: "ML & Modeling", items: ["scikit-learn", "XGBoost", "HistGradientBoosting", "Random Forest", "K-Means"] },
  { label: "Data & Stats", items: ["Pandas", "NumPy", "statsmodels", "SciPy"] },
  { label: "Viz & Apps", items: ["Streamlit", "Seaborn", "Matplotlib", "Plotly"] },
  { label: "Workflow", items: ["Jupyter", "VS Code", "Git", "Agile"] },
];
