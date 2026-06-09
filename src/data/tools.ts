export type ToolCategory =
  | "Écriture"
  | "Images"
  | "Présentations"
  | "Recherche"
  | "Productivité"
  | "Apprentissage"
  | "Audio & Voix";

export type ToolDifficulty = "Très simple" | "Simple" | "Intermédiaire";

export interface AiTool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  useCase: string;
  link: string;
  difficulty: ToolDifficulty;
  frenchFriendly: boolean;
  isFree: boolean;
  bestFor: string[];
  starterPrompt: string;
  beginnerTip: string;
  caution: string;
  highlight?: string;
}

export const tools: AiTool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Un assistant IA pour écrire, résumer, expliquer, traduire et trouver des idées.",
    category: "Écriture",
    useCase: "Écrire un message, comprendre un sujet, préparer une lettre ou poser une question simple.",
    link: "https://chat.openai.com/",
    difficulty: "Très simple",
    frenchFriendly: true,
    isFree: true,
    bestFor: ["messages", "explications", "idées", "résumés"],
    starterPrompt: "Explique-moi ce sujet en français simple, avec un exemple concret et les points importants à retenir.",
    beginnerTip: "Donne toujours le contexte et dis le format que tu veux : court, détaillé, poli, simple ou professionnel.",
    caution: "Vérifie les informations importantes avant de les utiliser pour une décision sérieuse.",
    highlight: "Le meilleur outil pour commencer",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "Un moteur de recherche IA qui répond avec des sources pour mieux vérifier les informations.",
    category: "Recherche",
    useCase: "Faire des recherches rapides, comparer des informations et obtenir des liens utiles.",
    link: "https://www.perplexity.ai/",
    difficulty: "Simple",
    frenchFriendly: true,
    isFree: true,
    bestFor: ["recherche", "sources", "comparaison", "actualité"],
    starterPrompt: "Recherche ce sujet et donne-moi une réponse simple avec les sources les plus utiles.",
    beginnerTip: "Lis toujours les sources proposées si le sujet est important ou récent.",
    caution: "Certaines réponses peuvent mélanger des sources fiables et moins fiables.",
  },
  {
    id: "deepl",
    name: "DeepL",
    description: "Un traducteur fiable pour traduire des textes entre le français, l’anglais et d’autres langues.",
    category: "Écriture",
    useCase: "Traduire un document, un email, une phrase ou vérifier une formulation.",
    link: "https://www.deepl.com/translator",
    difficulty: "Très simple",
    frenchFriendly: true,
    isFree: true,
    bestFor: ["traduction", "emails", "documents", "phrases"],
    starterPrompt: "Traduis ce texte en anglais clair et naturel, puis propose une version plus professionnelle.",
    beginnerTip: "Pour un message important, compare la traduction avec ton intention avant d’envoyer.",
    caution: "Évite de coller des documents très confidentiels sans vérifier les règles de confidentialité.",
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "Un outil IA pour créer des présentations propres et modernes rapidement.",
    category: "Présentations",
    useCase: "Préparer une présentation, un rapport visuel ou une explication bien structurée.",
    link: "https://gamma.app/",
    difficulty: "Simple",
    frenchFriendly: true,
    isFree: true,
    bestFor: ["présentations", "rapports", "formation", "plans"],
    starterPrompt: "Crée une présentation simple de 6 slides sur ce sujet, avec un titre clair et des points faciles à comprendre.",
    beginnerTip: "Commence avec un plan simple avant de demander un design avancé.",
    caution: "Relis le contenu : les slides générées peuvent être jolies mais parfois trop générales.",
  },
  {
    id: "canva",
    name: "Canva",
    description: "Une plateforme simple pour créer des affiches, présentations, cartes, CV et visuels.",
    category: "Images",
    useCase: "Créer un visuel propre sans être graphiste.",
    link: "https://www.canva.com/",
    difficulty: "Très simple",
    frenchFriendly: true,
    isFree: true,
    bestFor: ["affiches", "design", "présentations", "cartes"],
    starterPrompt: "Aide-moi à créer une affiche simple pour cet événement avec un style propre et lisible.",
    beginnerTip: "Utilise les modèles existants et change seulement le texte, les couleurs et les images.",
    caution: "Certaines images, polices ou modèles peuvent être payants.",
  },
  {
    id: "leonardo",
    name: "Leonardo AI",
    description: "Un générateur d’images IA pour créer des illustrations, idées visuelles et concepts.",
    category: "Images",
    useCase: "Créer une image à partir d’une description.",
    link: "https://leonardo.ai/",
    difficulty: "Intermédiaire",
    frenchFriendly: false,
    isFree: true,
    bestFor: ["illustrations", "concepts", "images", "créativité"],
    starterPrompt: "Create a realistic image of a warm modern office, natural light, clean design, peaceful atmosphere.",
    beginnerTip: "Les prompts en anglais donnent souvent de meilleurs résultats pour les images.",
    caution: "Vérifie les droits d’usage avant d’utiliser une image dans un projet officiel.",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Un espace de notes avec IA pour organiser des idées, résumer et planifier.",
    category: "Productivité",
    useCase: "Organiser des notes, faire une liste, résumer un texte ou planifier un projet.",
    link: "https://www.notion.so/product/ai",
    difficulty: "Intermédiaire",
    frenchFriendly: true,
    isFree: false,
    bestFor: ["notes", "organisation", "planning", "résumés"],
    starterPrompt: "Transforme ces notes en plan clair avec des priorités et les prochaines actions.",
    beginnerTip: "Commence avec une page simple : idées, tâches, dates importantes et documents.",
    caution: "Certaines fonctions IA nécessitent un abonnement.",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "Un outil de voix IA pour générer ou transformer de l’audio avec des voix naturelles.",
    category: "Audio & Voix",
    useCase: "Créer une voix off, écouter un texte ou expérimenter avec l’audio.",
    link: "https://elevenlabs.io/",
    difficulty: "Intermédiaire",
    frenchFriendly: false,
    isFree: true,
    bestFor: ["voix off", "audio", "lecture", "narration"],
    starterPrompt: "Generate a calm and clear voiceover for this short text, with a warm professional tone.",
    beginnerTip: "Teste d’abord avec un texte court avant d’utiliser un long document.",
    caution: "Respecte la voix et l’identité des autres personnes : ne copie pas une voix sans autorisation.",
  },
  {
    id: "duolingo",
    name: "Duolingo",
    description: "Une application simple pour apprendre ou pratiquer une langue chaque jour.",
    category: "Apprentissage",
    useCase: "Pratiquer l’anglais, apprendre une langue ou garder une routine d’apprentissage.",
    link: "https://www.duolingo.com/",
    difficulty: "Très simple",
    frenchFriendly: true,
    isFree: true,
    bestFor: ["langues", "routine", "vocabulaire", "pratique"],
    starterPrompt: "Je veux pratiquer 10 minutes par jour. Aide-moi à choisir une routine simple pour apprendre l’anglais.",
    beginnerTip: "Le plus important est la régularité : quelques minutes chaque jour valent mieux qu’une longue session rare.",
    caution: "Duolingo aide à pratiquer, mais ne remplace pas les conversations réelles.",
  },
  {
    id: "suno",
    name: "Suno",
    description: "Un outil IA qui aide à créer des chansons à partir d’une idée ou d’un texte.",
    category: "Audio & Voix",
    useCase: "Créer une chanson, un jingle ou une idée musicale.",
    link: "https://suno.com/",
    difficulty: "Simple",
    frenchFriendly: false,
    isFree: true,
    bestFor: ["musique", "chants", "jingles", "créativité"],
    starterPrompt: "Create an uplifting gospel-inspired song about gratitude, hope, and faith, with simple lyrics.",
    beginnerTip: "Décris le style musical, l’émotion et le thème avant de générer la chanson.",
    caution: "Vérifie les conditions d’utilisation avant de publier ou vendre une musique générée.",
  },
];

export const categories = ["Tous", ...Array.from(new Set(tools.map((tool) => tool.category)))] as const;
